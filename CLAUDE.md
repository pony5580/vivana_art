# CLAUDE.md

このファイルは Claude Code がこのリポジトリで作業する際のガイドです。

## プロジェクト概要

**ビバナアート（VIVANA art）公式サイト** の新規制作案件。

- 事業: 「色を楽しむアトリエ」= 子ども〜高校生向けの絵画・アートアトリエ（横浜市金沢区）
- キャッチコピー: 「夢中になる時間が、自分の『好き』を育てる。」
- 主宰: **坂野 奈穂子**（1984年生・元看板屋／オーストラリア発祥チョークアート作家）
- ロゴ: 手描き円形・クレヨン調マルチカラー（`VIVA`/`NA`/`art`）
- トーン: あたたかい・カラフル・手描き感・「比べない／自分の好きを大切に」

## コンテンツの正（Source of Truth）

- **`material/構成.md`** … 全セクションの確定テキスト（ABOUT/TRIAL/CLASS/PRICE/SCHEDULE/SUPPORTER/ACCESS/CONTACT）。文章はここが正。
- `material/ホームページ構成案.ai` … 見た目デザインの参考（PDF互換部はHOMEページのみ）。
- `material/*.jpg` … 教室・制作風景・作品・子どもの写真（**全点使用可**）。

## 確定した事業情報

- 対象: **5歳〜高校生**
- 体験レッスン: 60分 / **1,500円**（材料費込）/ 手ぶら可 / 原則子どものみ（初回不安なら親子可・各自参加費）
- レギュラー3コース（入会費5,000円・月2回・画材費込）:
  - キッズ（年中〜小2）6,500円/90分 … 月木15:30-17:00・土9:00-10:30
  - ジュニア（小3〜小6）7,000円/90分 … 月木17:00-18:30・土10:30-12:00
  - ユース（中1〜高3）7,500円/120分 … 土10:30-12:00 / 13:30-15:30
- 所在地: 〒236-0042 横浜市金沢区釜利谷東3-4-23 / 京急 金沢文庫駅 徒歩10分
- 連絡: 公式LINE `https://lin.ee/QBo2HTO` / Instagram `@VIVANA*ART*` / メール `vivanaoko2030@gmail.com`

## 決定事項（制作方針）

- **スタック: Astro**（静的・高速。本文は Markdown ソース化）。CMSは使わない。
- **連絡導線: 公式LINE誘導のみ**（申込フォームは作らない）。
- **写真: 全点使用可**（顔出し含めOK）。
- **公開情報: `構成.md` の情報はすべて掲載可**（住所・メール・LINE・Instagram含む）。
- **SCHEDULE: Googleカレンダー1本で運用**。イベントごとに色を付けてクラスを区別。
  - 表示は **FullCalendar + GoogleカレンダーAPI** でイベント色を反映（推奨）。暫定は iframe 埋め込みでも可。
  - 予定名の頭に【キッズ】【ジュニア】【ユース】等を付ける運用も併用。
- 画像は **WebP化＋遅延読込** 必須（元は2〜3MBの縦スマホ写真）。

## サイト構成（1ページLP + 必要に応じ下層）

HOME(ヒーロー) → ABOUT → TRIAL LESSON → CLASS → PRICE → SCHEDULE(カレンダー) → SUPPORTER(先生紹介) → ACCESS(地図) → CONTACT(LINE) → フッター

## デザイン方向性

- ロゴのクレヨン調マルチカラーを起点に「手描き × カラフル × 黒板(チョーク)モチーフ」。
- アクセントに黒板(ダークグリーン)×白チョーク文字、本文は明るく安心感（保護者向け）。
- 丸ゴシック系＋手描きあしらい。

## 実装状況（site/）

- サイト本体は **`site/`** に構築（Astro 5）。開発: `cd site && npm run dev`（http://localhost:4321）。ビルド: `npm run build`（`site/dist/`）。
- 1ページLP完成: HOME/ABOUT/TRIAL/CLASS/PRICE/SCHEDULE/SUPPORTER/ACCESS/CONTACT。
- 画像は `site/src/assets/photos/` に配置し `astro:assets` で自動WebP＋遅延読込。
- カレンダーは FullCalendar（`Schedule.astro`）。**現在はサンプル予定表示**。
- ロゴは `Logo.astro` でクレヨン調を再現（暫定）。

### 残タスク / 差し替えポイント
- [ ] **Googleカレンダー連携**: `Schedule.astro` のコメント参照。公開カレンダーID＋APIキー（`PUBLIC_GCAL_API_KEY`）を設定し、サンプルを置換。
- [ ] **正式ロゴ**: `ホームページ構成案.ai` / `vivanaartロゴ.ai` から SVG書き出し → `Logo.astro` を差し替え。
- [ ] **Instagram URL**: `src/data/site.ts` の `instagram` が仮。正式URLに更新。
- [ ] **SUPPORTER写真**: 現在 `welcome-board.jpg`（大人3名）を使用。坂野さん本人の写真があれば差し替え、キャプション確認。
- [ ] デプロイ先未定（Netlify/Vercel/Cloudflare Pages 等の静的ホスティング想定）。

## Claude への指示

- 新規ページ/機能の前に、まず方針をユーザーと確認してから着手する。
- `material/` の素材（画像・.ai・.md）は削除・上書きしない。Web用は最適化して別途書き出す。
