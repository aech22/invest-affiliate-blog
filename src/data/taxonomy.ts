// サイトの分類体系（トウシナビ＝投資・資産運用が「学べるスクール」の比較ハブ）。
// slug は services.json の subCategory ・記事frontmatterの categorySlug と一致させる（結合キー）。
// 投資助言ではなく学習サービス（スクール・講座）の比較。株式投資スクール／FX・外貨スクールの2分類で扱う（2026-08-03）。

export interface Category {
  slug: string;
  label: string;
  emoji: string;
  blurb: string; // カテゴリページの説明・meta description に使う
}

export const CATEGORIES: Category[] = [
  { slug: 'stock', label: '株式投資スクール', emoji: '📈', blurb: '株式投資の基礎から実践までを体系的に学べるスクール・講座を、内容とサポートで比較。' },
  { slug: 'fx', label: 'FX・外貨スクール', emoji: '💹', blurb: 'FX・外貨投資を基礎から学べるスクール・講座を、カリキュラムとサポート体制で比較。' },
];

export const categoryBySlug = (slug?: string | null): Category | undefined =>
  CATEGORIES.find((c) => c.slug === slug);
