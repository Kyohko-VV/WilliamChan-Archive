export interface BrandEditorialSource {
  name: string;
  url: string;
  type: string;
  summary: string;
  publishedDate?: string;
}

export interface BrandEditorialImage {
  url: string;
  alt: string;
  source?: string;
  sourceUrl?: string;
  publishedDate?: string;
}

export interface BrandEditorialEntry {
  id: string;
  href?: string;
  date: string;
  brand: string;
  brandDescription?: string;
  title: string;
  type: string;
  location?: string;
  role: string;
  summary: string;
  images: BrandEditorialImage[];
  /** Opt in to the shared public archive/library using these original images. */
  mediaAlbum?: string;
  videos?: { title: string; platform: string; url: string; source: string }[];
  officialSources: BrandEditorialSource[];
  editorialSources: BrandEditorialSource[];
  mediaSources: BrandEditorialSource[];
  relatedTimelineHref?: string;
}

export const brandEditorialEntries: BrandEditorialEntry[] = [

  {
  id: "descente-ski-new-products-2026-09-20",
  href: "/brand-editorial/descente",
  date: "2026-09-20",
  brand: "DESCENTE 迪桑特",
  title: "DESCENTE 迪桑特｜雪季新品宣傳",
  type: "品牌合作／新品宣傳",
  role: "品牌代言人",
  summary:
    "2026 年 9 月 20 日，DESCENTE 迪桑特品牌代言人陳偉霆於本人微博分享全新雪季裝備，以充滿未來感的冰雪空間為背景，預告開啟新雪季，並配合天貓小黑盒新品宣傳。",
  mediaAlbum: "DESCENTE 迪桑特｜2026-09-20 雪季新品宣傳",

  images: [
    {
      url: "https://media.williamchanfanpage.com/Brand/descente2026-09-20-01.jpg",
      alt: "陳偉霆 DESCENTE 迪桑特雪季新品宣傳圖片（一）",
      source: "陳偉霆本人微博",
      sourceUrl: "https://weibo.com/1712570933/5345254750555593",
      publishedDate: "2026-09-20",
    },
    {
      url: "https://media.williamchanfanpage.com/Brand/descente2026-09-20-02.jpg",
      alt: "陳偉霆 DESCENTE 迪桑特雪季新品宣傳圖片（二）",
      source: "陳偉霆本人微博",
      sourceUrl: "https://weibo.com/1712570933/5345254750555593",
      publishedDate: "2026-09-20",
    },
    {
      url: "https://media.williamchanfanpage.com/Brand/descente2026-09-20-03.jpg",
      alt: "陳偉霆 DESCENTE 迪桑特雪季新品宣傳圖片（三）",
      source: "陳偉霆本人微博",
      sourceUrl: "https://weibo.com/1712570933/5345254750555593",
      publishedDate: "2026-09-20",
    },
    {
      url: "https://media.williamchanfanpage.com/Brand/descente2026-09-20-04.jpg",
      alt: "陳偉霆 DESCENTE 迪桑特雪季新品宣傳圖片（四）",
      source: "陳偉霆本人微博",
      sourceUrl: "https://weibo.com/1712570933/5345254750555593",
      publishedDate: "2026-09-20",
    },
  ],

  officialSources: [
    {
      name: "陳偉霆本人微博",
      url: "https://weibo.com/1712570933/5345254750555593",
      type: "本人官方／品牌宣傳",
      publishedDate: "2026-09-20",
      summary:
        "陳偉霆分享 DESCENTE 全新滑雪裝備，提到充滿未來感的冰雪空間及開啟新雪季，並配合天貓小黑盒新品宣傳。",
    },
  ],

  editorialSources: [],
  mediaSources: [],
  relatedTimelineHref:
    "/timeline/2026/#descente-ski-new-products-2026-09-20",
},



{
  id: "descente-zizai-zhuchang-shanghai-2026-09-19",
  href: "/brand-editorial/descente",
  date: "2026-09-19",
  brand: "DESCENTE 迪桑特",
  title: "DESCENTE 迪桑特｜「自在主場」主題活動",
  type: "品牌活動／運動品牌",
  location: "上海靜安嘉里中心城市概念店",
  role: "品牌代言人",
  summary:
    "2026 年 9 月 19 日，DESCENTE 迪桑特品牌代言人陳偉霆於上海靜安嘉里中心城市概念店出席「自在主場」主題活動。活動以冰雪運動與都市生活場景為主題，陳偉霆參與現場互動及品牌體驗，呈現隨心而行的運動生活理念。品牌摯友楊千嬅、蹦床世界冠軍何雯娜及游泳世界冠軍孫佳俊亦現身活動，與陳偉霆共同揭幕品牌所描述的「未來冰雪新境」。",
  mediaAlbum: "DESCENTE 迪桑特｜2026-09-19「自在主場」主題活動",
  images: [
    {
      url: "https://media.williamchanfanpage.com/Brand/descente2026-09-19-01.jpg",
      alt: "陳偉霆出席 DESCENTE 迪桑特「自在主場」上海主題活動（一）",
      source: "英皇娛樂－北京",
      sourceUrl: "https://weibo.com/3270824053/RiS9isyHS",
      publishedDate: "2026-09-19",
    },
    {
      url: "https://media.williamchanfanpage.com/Brand/descente2026-09-19-02.jpg",
      alt: "陳偉霆出席 DESCENTE 迪桑特「自在主場」上海主題活動（二）",
      source: "英皇娛樂－北京",
      sourceUrl: "https://weibo.com/3270824053/RiS9isyHS",
      publishedDate: "2026-09-19",
    },
    {
      url: "https://media.williamchanfanpage.com/Brand/descente2026-09-19-03.jpg",
      alt: "陳偉霆出席 DESCENTE 迪桑特「自在主場」上海主題活動（三）",
      source: "英皇娛樂－北京",
      sourceUrl: "https://weibo.com/3270824053/RiS9isyHS",
      publishedDate: "2026-09-19",
    },
    {
      url: "https://media.williamchanfanpage.com/Brand/descente2026-09-19-04.jpg",
      alt: "陳偉霆出席 DESCENTE 迪桑特「自在主場」上海主題活動（四）",
      source: "英皇娛樂－北京",
      sourceUrl: "https://weibo.com/3270824053/RiS9isyHS",
      publishedDate: "2026-09-19",
    },
    {
      url: "https://media.williamchanfanpage.com/Brand/descente2026-09-19-05.jpg",
      alt: "陳偉霆出席 DESCENTE 迪桑特「自在主場」上海主題活動（五）",
      source: "英皇娛樂－北京",
      sourceUrl: "https://weibo.com/3270824053/RiS9isyHS",
      publishedDate: "2026-09-19",
    },
  ],

  videos: [

{

title: "DESCENTE「自在主場」2026-09-19 活動直播錄影",

platform: "YouTube",

url: "https://youtu.be/ObsdWGKAytg",

source: "KYOHKOの推し活｜非官方保存",

},

],


  officialSources: [
    {
      name: "w-Daily｜陳偉霆工作室",
      url: "https://weibo.com/6269525799/5344978425611815",
      type: "工作室官方／活動回顧",
      publishedDate: "2026-09-19",
      summary:
        "2026-09-19 22:47｜記錄品牌代言人陳偉霆現身迪桑特「自在主場」活動，並以冰雪與都市交織的空間語境呈現活動現場。",
    },
    {
      name: "英皇娛樂－北京",
      url: "https://weibo.com/3270824053/5344980566806600",
      type: "公司官方／活動紀錄",
      publishedDate: "2026-09-19",
      summary:
        "2026-09-19 22:55｜發布陳偉霆亮相「自在主場」主題活動的現場照片，記錄門店、品牌展示及活動互動畫面。",
    },
    {
      name: "DESCENTE 迪桑特官方微博",
      url: "https://weibo.com/6166921562/RiZftjHXK",
      type: "品牌官方／活動回顧",
      publishedDate: "2026-09-20",
      summary:
        "回顧 2026 年 9 月 19 日迪桑特「自在主場」主題活動：品牌代言人陳偉霆與品牌摯友楊千嬅、蹦床世界冠軍何雯娜、游泳世界冠軍孫佳俊現身上海靜安嘉里中心城市概念店。官方以「攜手揭幕未來冰雪新境」回顧活動。",
    },
  ],
  editorialSources: [],
  mediaSources: [],
  relatedTimelineHref:
    "/timeline/2026/#descente-zizai-zhuchang-shanghai-2026-09-19",
},



{
    id: "beauever-neck-renewal-launch-2026-09-17",
    href: "/brand-editorial/beauever",
    date: "2026-09-17",
    brand: "BeauEver",
    title: "BeauEver｜「頸界新生」新品發布盛典",
    type: "品牌活動／新品發布會",
    location: "上海",
    role: "亞太地區品牌代言人",
    summary:
      "2026-09-17，BeauEver 亞太地區品牌代言人陳偉霆亮相上海「頸界新生」新品發布盛典，參與新品發布及現場互動活動。",
    mediaAlbum: "BeauEver｜2026-09-17「頸界新生」新品發布盛典",

    images: [
      {
        url: "https://media.williamchanfanpage.com/Brand/beauever-20260917-01.jpg",
        alt: "陳偉霆出席 BeauEver「頸界新生」新品發布盛典（一）",
        source: "w-Daily｜陳偉霆工作室",
        sourceUrl: "https://weibo.com/6269525799/RizGMdmeO",
        publishedDate: "2026-09-17",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/beauever-20260917-02.jpg",
        alt: "陳偉霆出席 BeauEver「頸界新生」新品發布盛典（二）",
        source: "w-Daily｜陳偉霆工作室",
        sourceUrl: "https://weibo.com/6269525799/RizGMdmeO",
        publishedDate: "2026-09-17",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/beauever-20260917-03.jpg",
        alt: "陳偉霆出席 BeauEver「頸界新生」新品發布盛典（三）",
        source: "w-Daily｜陳偉霆工作室",
        sourceUrl: "https://weibo.com/6269525799/RizGMdmeO",
        publishedDate: "2026-09-17",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/beauever-20260917-04.jpg",
        alt: "陳偉霆出席 BeauEver「頸界新生」新品發布盛典（四）",
        source: "w-Daily｜陳偉霆工作室",
        sourceUrl: "https://weibo.com/6269525799/RizGMdmeO",
        publishedDate: "2026-09-17",
      },
    ],

    videos: [
      {
        title: "BeauEver 2026-09-17 活動直播 cut",
        platform: "YouTube",
        url: "https://youtu.be/w5Vxo5E1MBs",
        source: "KYOHKOの推し活｜非官方保存",
      },
    ],

    officialSources: [
      {
        name: "w-Daily｜陳偉霆工作室",
        url: "https://weibo.com/6269525799/5344250222611481",
        type: "工作室官方／活動花絮",
        publishedDate: "2026-09-17",
        summary: "公開活動當日候場、幕後及現場花絮照片。",
      },
      {
        name: "w-Daily｜陳偉霆工作室",
        url: "https://weibo.com/6269525799/5344270963183750",
        type: "工作室官方／活動回顧",
        publishedDate: "2026-09-17",
        summary: "記錄陳偉霆以 BeauEver 亞太地區品牌代言人身份亮相新品發布盛典。",
      },
      {
        name: "英皇娛樂--北京",
        url: "https://weibo.com/3270824053/5344270774178873",
        type: "公司官方／活動紀錄",
        publishedDate: "2026-09-17",
        summary: "發布陳偉霆亮相 BeauEver 品牌活動的現場照片及活動紀錄。",
      },
    ],

    editorialSources: [],
    mediaSources: [],
    relatedTimelineHref:
      "/timeline/2026/#beauever-neck-renewal-launch-2026-09-17",
  },

  {
    id: "2026-09-16-descente-ski-season-promo",
    href: "/brand-editorial/descente",
    date: "2026-09-16",
    brand: "DESCENTE 迪桑特",
    title: "DESCENTE 迪桑特雪季裝備宣傳影片",
    type: "品牌合作／產品宣傳",
    role: "品牌代言人",
    summary: "迪桑特官方微博於 2026-09-16 12:00 發布品牌代言人陳偉霆的雪季裝備宣傳影片，配合「天猫小黑盒超级新品日」新品宣傳，邀請大家一起「上板、開滑」。",
    images: [],
    videos: [{
      title: "DESCENTE 迪桑特雪季裝備宣傳影片",
      platform: "微博",
      url: "https://weibo.com/6166921562/5343728430221545",
      source: "迪桑特DESCENTE",
    }],
    officialSources: [{
      name: "迪桑特DESCENTE",
      url: "https://weibo.com/6166921562/5343728430221545",
      type: "品牌官方／產品宣傳",
      publishedDate: "2026-09-16",
      summary: "官方微博發布時間：12:00。此貼文為雪季裝備宣傳影片入口；2026-09-16 為微博發布日期。",
    }],
    editorialSources: [],
    mediaSources: [],
    relatedTimelineHref: "/timeline/2026/#2026-09-16-descente-ski-season-promo",
  },
  {
    id: "descente-rwsb-style-promotion-2026-09-14",
    href: "/brand-editorial/descente",
    date: "2026-09-14",
    brand: "DESCENTE 迪桑特",
    title: "迪桑特 DESCENTE｜RWSB STYLE 硬殼夾克宣傳",
    type: "品牌合作／產品宣傳",
    role: "品牌代言人",
    summary: "迪桑特 DESCENTE 公開品牌代言人陳偉霆演繹 RWSB STYLE 硬殼夾克的宣傳圖片，以「隨心而行，探索多維場景」為主題。",
    mediaAlbum: "迪桑特 DESCENTE｜2026-09-14 RWSB STYLE 宣傳",
    images: [
      {
        url: "https://media.williamchanfanpage.com/Brand/descente2026-09-14-01.jpg",
        alt: "陳偉霆演繹迪桑特 DESCENTE RWSB STYLE 硬殼夾克宣傳圖片（一）",
        publishedDate: "2026-09-14",
        source: "迪桑特 DESCENTE",
        sourceUrl: "https://weibo.com/6166921562/Ri2J1kk0d",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/descente2026-09-14-02.jpg",
        alt: "陳偉霆演繹迪桑特 DESCENTE RWSB STYLE 硬殼夾克宣傳圖片（二）",
        publishedDate: "2026-09-14",
        source: "迪桑特 DESCENTE",
        sourceUrl: "https://weibo.com/6166921562/Ri2J1kk0d",
      },
    ],
    officialSources: [{
      name: "迪桑特 DESCENTE",
      url: "https://weibo.com/6166921562/Ri2J1kk0d",
      type: "品牌官方／產品宣傳",
      publishedDate: "2026-09-14",
      summary: "品牌發布陳偉霆演繹 RWSB STYLE 硬殼夾克的兩張宣傳圖片，以「隨心而行，探索多維場景」為主題。",
    }],
    editorialSources: [],
    mediaSources: [],
    relatedTimelineHref: "/timeline/2026/#descente-rwsb-style-promotion-2026-09-14",
  },
  


  {
    id: "beauever-ambassador-announcement-2026-09-13",
    href: "/brand-editorial/beauever",
    date: "2026-09-13",
    brand: "BeauEver",
    title: "BeauEver｜亞太地區品牌代言人官宣",
    type: "品牌合作／代言官宣",
    role: "亞太地區品牌代言人",
    summary: "2026-09-13，BeauEver 官宣陳偉霆擔任亞太地區品牌代言人，並公開品牌宣傳影片。w-Daily 與英皇娛樂–北京同日發布官宣內容及代言海報。",
    mediaAlbum: "BeauEver｜亞太地區品牌代言人官宣",
    images: [{
      url: "https://media.williamchanfanpage.com/Brand/beauever2026-09-13.jpg",
      alt: "陳偉霆 BeauEver 亞太地區品牌代言人官宣海報",
      source: "英皇娛樂–北京",
      sourceUrl: "https://weibo.com/3270824053/5342648841798389",
      publishedDate: "2026-09-13",
    }],
    videos: [{
      title: "官方宣傳影片",
      platform: "微博",
      url: "https://weibo.com/7919852798/5342648811914717",
      source: "BeauEver 官方微博",
    }],
    officialSources: [
      {
        name: "BeauEver 官方微博",
        url: "https://weibo.com/7919852798/5342648811914717",
        type: "品牌官方／主要官宣來源",
        publishedDate: "2026-09-13",
        summary: "品牌發布陳偉霆代言宣傳影片，文案以優雅、頸線與境界為主題。此貼文亦為官方宣傳影片入口。",
      },
      {
        name: "w-Daily 微博",
        url: "https://weibo.com/6269525799/5342648877715733",
        type: "工作室官方／官宣補充與代言海報來源",
        publishedDate: "2026-09-13",
        summary: "官方原文：「无论是否被看见，都守住对自我的要求；任凭时间向前，认真对待每一个当下。」",
      },
      {
        name: "英皇娛樂–北京微博",
        url: "https://weibo.com/3270824053/5342648841798389",
        type: "公司官方／官宣補充與代言海報來源",
        publishedDate: "2026-09-13",
        summary: "官方原文：「坦然接纳时光，回归本真状态」「循着自己的步调从容前行。」",
      },
    ],
    editorialSources: [],
    mediaSources: [],
    relatedTimelineHref: "/timeline/2026/#beauever-ambassador-announcement-2026-09-13",
  },
  {
    id: "descente-zhengzhou-delta-2026-09-04",
    href: "/brand-editorial/descente",
    date: "2026-09-04",
    brand: "DESCENTE 迪桑特",
    brandDescription: "整理陳偉霆與 DESCENTE 迪桑特的品牌合作、廣告及公開活動記錄。",
    title: "鄭州 DELTA 競速體驗場及門店活動",
    type: "品牌合作 / 運動品牌",
    location: "鄭州",
    role: "品牌代言人",
    summary: "品牌代言人陳偉霆到訪鄭州 DESCENTE「DELTA 競速體驗場」及門店，參與品牌體驗活動。",
    images: [
      {
        url: "https://media.williamchanfanpage.com/Brand/descente20260904-01.jpg",
        alt: "陳偉霆出席 DESCENTE 迪桑特鄭州 DELTA 競速體驗活動（一）",
        source: "w-Daily 微博｜官方",
        sourceUrl: "https://weibo.com/6269525799/RgA0cwxV5",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/descente20260904-02.jpg",
        alt: "陳偉霆出席 DESCENTE 迪桑特鄭州 DELTA 競速體驗活動（二）",
        source: "w-Daily 微博｜官方",
        sourceUrl: "https://weibo.com/6269525799/RgA0cwxV5",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/descente20260904-03.jpg",
        alt: "陳偉霆出席 DESCENTE 迪桑特鄭州 DELTA 競速體驗活動（三）",
        source: "w-Daily 微博｜官方",
        sourceUrl: "https://weibo.com/6269525799/Rgz5AE5K6",
      },
    ],
    officialSources: [
      {
        name: "DESCENTE 迪桑特官方微博",
        url: "https://weibo.com/6166921562/5339787725899137",
        type: "品牌官方／第一手",
        publishedDate: "2026-09-05",
        summary: "DESCENTE 迪桑特官方回顧「DELTA 競速體驗場」鄭州站活動，記錄品牌代言人陳偉霆到訪門店、體驗專業運動裝備及 DELTA 系列跑鞋，並公布鄭州丹尼斯大衛城活動持續至 9 月 13 日。",
      },
      {
        name: "w-Daily｜陳偉霆工作室",
        url: "https://weibo.com/6269525799/5339516447756887",
        type: "工作室官方",
        summary: "工作室記錄陳偉霆到訪鄭州 DESCENTE「DELTA 競速體驗場」及門店並參與品牌體驗活動。",
      },
    ],
    editorialSources: [],
    mediaSources: [],
    relatedTimelineHref: "/timeline#descente-zhengzhou-delta-2026-09-04",
  },
  {
    id: "chanel-signes-symboles-shanghai-2026",
    date: "2026-08-20",
    brand: "CHANEL 香奈兒",
    title: "SIGNES & SYMBOLES 臻品珠寶系列",
    type: "品牌活動 / 珠寶活動",
    location: "上海",
    role: "品牌形象大使",
    summary: "陳偉霆出席香奈兒於上海舉辦的 SIGNES & SYMBOLES 臻品珠寶系列活動。",
    images: [
      {
        url: "https://media.williamchanfanpage.com/Brand/chanel-20260820-1.jpg",
        alt: "陳偉霆出席 CHANEL SIGNES & SYMBOLES 臻品珠寶系列上海活動（一）",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/chanel-20260820-2.jpg",
        alt: "陳偉霆出席 CHANEL SIGNES & SYMBOLES 臻品珠寶系列上海活動（二）",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/chanel-20260820-3.jpg",
        alt: "陳偉霆出席 CHANEL SIGNES & SYMBOLES 臻品珠寶系列上海活動（三）",
      },
    ],
    officialSources: [
      {
        name: "CHANEL 品牌官方微博",
        url: "https://weibo.com/1892475055/5335483036991800",
        type: "品牌官方",
        summary: "CHANEL 品牌形象大使辛芷蕾與陳偉霆出席上海活動；系列重新演繹山茶花、星辰、太陽與獅子等象徵符號。",
      },
      {
        name: "CHANEL 香奈兒｜微信視頻號",
        url: "https://weixin.qq.com/sph/AS3gylbEB6",
        type: "品牌官方",
        summary: "CHANEL 香奈兒官方發布上海 SIGNES & SYMBOLES 臻品珠寶活動內容，記錄品牌形象大使辛芷蕾、陳偉霆出席活動，並介紹山茶花、星辰、太陽與獅子等品牌標誌性符號。",
      },
      {
        name: "陳偉霆本人微博",
        url: "https://weibo.com/1712570933/5334826380955991",
        type: "本人官方",
        summary: "從本人角度介紹獅子、星辰、山茶花與太陽等 CHANEL 符號。",
      },
      {
        name: "英皇娛樂--北京",
        url: "https://weibo.com/3270824053/5335097110694925",
        type: "公司官方",
        summary: "在山茶花詩意的符號間，釋放松弛矜貴。",
      },
    ],
    editorialSources: [
      {
        name: "VOGUE 服飾與美容",
        url: "https://weibo.com/1765870915/5334840334615939",
        type: "Editorial",
        summary: "報導辛芷蕾、陳偉霆佩戴 CHANEL SIGNES & SYMBOLES 系列出席上海發布活動。",
      },
      {
        name: "嘉人 marie claire",
        url: "https://weibo.com/1399746707/5335131816460754",
        type: "Editorial",
        summary: "報導兩人亮相上海系列預覽現場，並介紹珠寶系列的設計概念。",
      },
    ],
    mediaSources: [
      {
        name: "Chrison 克里森",
        url: "https://weibo.com/1614137095/5334842498615767",
        type: "造型 / 時尚 Editorial",
        summary: "記錄陳偉霆佩戴系列珠寶，並提及 CHANEL MONSIEUR LION BLACK EDITION 腕錶。",
      },
      {
        name: "小象王國",
        url: "https://weibo.com/1669197345/5335471521531516",
        type: "珠寶專題 / 時尚媒體",
        summary: "介紹系列設計概念，以及山茶花、星辰、太陽、獅子等符號。",
      },
      {
        name: "Xavier 杰斯君",
        url: "https://weibo.com/1762928124/5337967021526631",
        type: "延伸時尚內容",
        summary: "整理辛芷蕾、陳偉霆與香奈兒臻品珠寶的最新物料及視頻。",
      },
    ],
  },
];
