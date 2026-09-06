import type { APIRoute } from 'astro';
import { loadEnv } from 'vite';
import { fileURLToPath } from 'node:url';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { isLocalRequest, readPrivateMedia } from './private-media';

export const prerender = false;
const headers = { 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer', 'X-Content-Type-Options': 'nosniff' };
export const GET: APIRoute = async ({ request, url }) => {
  const reply = (body: object, status = 200) => Response.json(body, { status, headers });
  if (!import.meta.env.DEV || !isLocalRequest(request)) return reply({ error: 'Not Found' }, 404);
  try {
    const item = (await readPrivateMedia()).find((item) => item.id === url.searchParams.get('id'));
    if (!item) return reply({ error: '找不到私有媒體。' }, 404);
    // Load inside each request, not at module initialization. Vite retains its
    // normal process-env precedence in the server process running this request.
    // Never spread env into responses, client props or Vite define.
    const projectRoot = fileURLToPath(new URL('../../', import.meta.url));
    const env = loadEnv(import.meta.env.MODE, projectRoot, 'R2_PRIVATE_');
    const { R2_PRIVATE_ACCESS_KEY_ID, R2_PRIVATE_SECRET_ACCESS_KEY, R2_PRIVATE_BUCKET } = env;
    const R2_PRIVATE_ACCOUNT_ID = env.R2_PRIVATE_ACCOUNT_ID?.trim();
    if (!R2_PRIVATE_ACCOUNT_ID || !/^[0-9a-fA-F]{32}$/.test(R2_PRIVATE_ACCOUNT_ID) || !R2_PRIVATE_ACCESS_KEY_ID || !R2_PRIVATE_SECRET_ACCESS_KEY || !R2_PRIVATE_BUCKET) {
      return reply({ error: '服務端配置未就緒。' }, 503);
    }
    const client = new S3Client({ region: 'auto', endpoint: `https://${R2_PRIVATE_ACCOUNT_ID}.r2.cloudflarestorage.com`, credentials: { accessKeyId: R2_PRIVATE_ACCESS_KEY_ID, secretAccessKey: R2_PRIVATE_SECRET_ACCESS_KEY } });
    try {
      const signedUrl = await getSignedUrl(client, new GetObjectCommand({ Bucket: R2_PRIVATE_BUCKET, Key: item.storageKey, ResponseCacheControl: 'no-store' }), { expiresIn: 300 });
      return reply({ url: signedUrl, expiresIn: 300 });
    } finally { client.destroy(); }
  } catch {
    return reply({ error: '無法產生預覽連結，請檢查本機 JSON 清單與 R2 設定。' }, 500);
  }
};
