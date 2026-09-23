// ビバナアート サイト共通データ（構成.md より）

export const site = {
  name: 'ビバナアート',
  nameLatin: 'VIVANA art',
  tagline: '色を楽しむアトリエ',
  catch: '夢中になる時間が、自分の「好き」を育てる。',
  line: 'https://lin.ee/QBo2HTO',
  instagram: 'https://www.instagram.com/', // @VIVANA*ART*（正式URL未確定）
  instagramHandle: '@VIVANA*ART*',
  email: 'vivanaoko2030@gmail.com',
  address: {
    zip: '〒236-0042',
    body: '横浜市金沢区釜利谷東3-4-23',
    access: '京浜急行「金沢文庫駅」より徒歩10分',
  },
} as const;

export const nav = [
  { id: 'about', label: 'ABOUT', jp: '想い' },
  { id: 'trial', label: 'TRIAL', jp: '体験' },
  { id: 'class', label: 'CLASS', jp: 'コース' },
  { id: 'price', label: 'PRICE', jp: '料金' },
  { id: 'schedule', label: 'SCHEDULE', jp: '日程' },
  { id: 'supporter', label: 'ABOUT ME', jp: '先生' },
  { id: 'access', label: 'ACCESS', jp: 'アクセス' },
] as const;

export type Course = {
  key: 'kids' | 'junior' | 'youth';
  name: string;
  target: string;
  body: string;
  price: string;
  minutes: string;
  times: string[];
  color: string;
};

export const courses: Course[] = [
  {
    key: 'kids',
    name: 'キッズコース',
    target: '年中〜小学2年生',
    body: '色や素材にたくさん触れながら、「やってみたい！」という気持ちを育てます。',
    price: '6,500円',
    minutes: '90分',
    times: ['月曜 15:30–17:00', '木曜 15:30–17:00', '土曜 9:00–10:30'],
    color: 'var(--kids)',
  },
  {
    key: 'junior',
    name: 'ジュニアコース',
    target: '小学3年生〜小学6年生',
    body: 'さまざまな画材や技法に挑戦しながら、自分らしい表現をみつけていきます。',
    price: '7,000円',
    minutes: '90分',
    times: ['月曜 17:00–18:30', '木曜 17:00–18:30', '土曜 10:30–12:00'],
    color: 'var(--junior)',
  },
  {
    key: 'youth',
    name: 'ユースコース',
    target: '中学1年生〜高校3年生',
    body: '忙しい毎日の中だからこそ、時間を忘れて夢中になれる時間を大切に、アートを通して「好き」を深めていきます。',
    price: '7,500円',
    minutes: '120分',
    times: ['土曜 10:30–12:00', '土曜 13:30–15:30'],
    color: 'var(--youth)',
  },
];

export const priceMeta = {
  admission: '5,000円',
  frequency: '月2回（画材費込み）',
};
