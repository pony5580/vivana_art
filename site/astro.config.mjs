// @ts-check
import { defineConfig } from 'astro/config';

// ビバナアート公式サイト（静的LP）
export default defineConfig({
  site: 'https://vivana-art.example.com',
  compressHTML: true,
  image: {
    // astro:assets で自動的に webp 生成・遅延読込
    responsiveStyles: true,
  },
});
