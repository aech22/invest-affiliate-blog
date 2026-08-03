import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages（プロジェクトページ）で配信。site + base でSEO・sitemap・OGP・canonical を解決する。
// 内部リンクは import.meta.env.BASE_URL 方式のため、base を設定すると全リンクがサブパス配下で解決される。
export default defineConfig({
  site: 'https://aech22.github.io',
  base: '/invest-affiliate-blog/',
  integrations: [sitemap({ changefreq: 'weekly', priority: 0.7 })],
  vite: {
    plugins: [tailwindcss()],
  },
});
