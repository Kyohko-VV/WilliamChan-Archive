export interface FanActivity {
  date: string;
  title: string;
  location?: string;
  category: string;
  participants?: string;
  description: string;
  detailUrl?: string;
  source?: {
    url: string;
    publishedAt: string;
    recorder: string;
  };
}

export const fanActivities: FanActivity[] = [
  {
    date: "2026-08-23",
    title: "重新回到個人網站｜開始建立陳偉霆資料庫",
    category: "建站記錄",
    description:
      "喜歡陳偉霆九年多後，我決定重新回到個人網站，從零開始整理他的作品、訪問、舞台與言語，慢慢建立一座由自己掌握內容主動權的資料庫。",
    detailUrl: "/fan-activities/2026-08-23-return-to-personal-website",
  },
  {
    date: "2025-03-12",
    title: "遠くからの友｜推し活でつながった5年越しの初対面",
    category: "ご縁・交流",
    description:
      "2019年、WilliamをきっかけにSNSで知り合った友人との交流が始まりました。Williamや作品、ファン活動の話だけでなく、日常や家族のことも話すようになり、お互いの地域で手に入りにくい物を買って送り合うこともありました。そして約5年後、ようやく初めて実際に会うことができました。約2日間を一緒に過ごし、最後は京都駅でお別れ。推し活をきっかけに生まれたご縁が、遠く離れていても長く続き、大切な友人関係になったことを実感した記録です。",
    source: {
      url: "https://note.com/kk_kyoto_vv/n/n1475d47a1f28?sub_rt=share_b",
      publishedAt: "2025-03-12",
      recorder: "Kyohko",
    },
  },
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
  {
    date: "2023-12-02",
    title: "深圳遠征｜映画『爆烈点』鑑賞・舞台挨拶",
    location: "深圳・CGV影城",
    category: "遠征・映画・舞台挨拶",
    participants: "メンバー2名＋家族1名",
    description:
      "2023年12月2日、メンバー2名と家族1名で深圳のCGV影城を訪れ、映画『爆烈点』を鑑賞し、ウィリアム・チャンの舞台挨拶に参加しました。本グループにとって2回目のイベントとなった、思い出深い深圳遠征の記録です。",
    source: {
      url: "https://note.com/kk_kyoto_vv/n/n403831e079f1?sub_rt=share_b",
      publishedAt: "2025-05-21",
      recorder: "Kyohko",
    },
  },
  {
    date: "2023-10-01",
    title: "大阪｜William 誕生日お祝い動画撮影会",
    location: "大阪ミナミ・ジャンカラ",
    category: "集まり・記念動画",
    participants: "4名",
    description:
      "2023年10月1日、大阪ミナミのジャンカラに4名で集まり、Williamへの誕生日お祝い動画を撮影しました。この集まりは、その後の推し活グループ活動につながるきっかけの一つにもなりました。撮影したお祝い動画は後に公式ファン後援会に採用され、私たちにとっても大切な記録になりました。",
    source: {
      url: "https://note.com/kk_kyoto_vv/n/n32a01aff6f18",
      publishedAt: "2025-05-20",
      recorder: "Kyohko",
    },
  },
];
