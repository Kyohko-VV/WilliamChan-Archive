export interface FanActivity {
  date: string;
  title: string;
  location: string;
  category: string;
  participants: string;
  description: string;
  source: {
    url: string;
    publishedAt: string;
    recorder: string;
  };
}

export const fanActivities: FanActivity[] = [
  {
    date: "2024-01-20",
    title: "東京遠征｜CANOTWAIT_ 初の海外ポップアップストア",
    location: "東京 CAPSULE",
    category: "遠征・イベント",
    participants: "メンバー2名",
    description:
      "2024年1月20日、「ウィリアム・チャン推し活 IN OSAKA（仮）」のメンバー2名で東京へ遠征し、東京 CAPSULE で開催された CANOTWAIT_ 初の海外ポップアップストアに参加しました。当日はウィリアム・チャン本人も来場。大阪から準備していた手紙や贈り物とともに、ファンの想いを込めた花を届けました。会場では日本、中国、アメリカなどさまざまな場所から訪れたファンとも交流し、「好き」という気持ちを通してつながる時間になりました。雨の降る寒い一日でしたが、私たちにとって忘れられない東京遠征の記録です。",
    source: {
      url: "https://note.com/kk_kyoto_vv/n/n2e09cc2e8837?sub_rt=share_b",
      publishedAt: "2024-09-11",
      recorder: "Kyohko",
    },
  },
];
