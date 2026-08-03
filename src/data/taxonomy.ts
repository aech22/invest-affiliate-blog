// サイトの分類体系（シカクナビ＝資格の通信講座・スクールの比較ハブ）。
// slug は services.json の subCategory ・記事frontmatterの categorySlug と一致させる（結合キー）。
// gender 軸は無い。資格ジャンルを法律・士業／技術・建築／オンライン資格学習の3分類で扱う（2026-08-03）。

export interface Category {
  slug: string;
  label: string;
  emoji: string;
  blurb: string; // カテゴリページの説明・meta description に使う
}

export const CATEGORIES: Category[] = [
  { slug: 'law', label: '法律・士業', emoji: '⚖️', blurb: '行政書士・司法書士など、法律・士業系の資格講座を費用・サポートで比較。' },
  { slug: 'technical', label: '技術・建築', emoji: '🏗️', blurb: '電気・施工管理・建築士・インテリアなど、技術/建築系の資格講座を比較。' },
  { slug: 'online', label: 'オンライン資格学習', emoji: '📱', blurb: 'スマホで学べる資格学習サービスや、幅広い資格に対応する講座を比較。' },
];

export const categoryBySlug = (slug?: string | null): Category | undefined =>
  CATEGORIES.find((c) => c.slug === slug);
