# デプロイ手順（Cloudflare Pages）

ビバナアート公式サイトを Cloudflare Pages にデプロイする手順です。
**Astro プロジェクトはリポジトリ直下ではなく `site/` サブディレクトリにあります。**
ルートディレクトリの指定を忘れないでください。

## 1. リポジトリを接続

1. [Cloudflare ダッシュボード](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. GitHub を連携し、`pony5580/vivana_art` を選択

## 2. ビルド設定（ここが重要）

| 項目 | 値 |
|---|---|
| Production branch | `main` |
| Framework preset | `Astro` |
| **Root directory（詳細設定）** | **`site`** |
| Build command | `npm run build` |
| Build output directory | `dist` |

- Node バージョンは `site/.nvmrc`（= 22）で自動認識されます。
  認識されない場合は環境変数 `NODE_VERSION = 22` を追加。

## 3. デプロイ

- 「Save and Deploy」で初回ビルド。以降は **`main` へ push するたびに自動デプロイ**。
- プルリクエストごとにプレビューURLも自動生成されます。

## 4. 独自ドメイン（取得済み）

Pages プロジェクト → **Custom domains** → **Set up a custom domain** → ドメイン入力。

- **ドメインのネームサーバが Cloudflare の場合**: ワンクリックでDNS＋SSLまで自動。
- **他社DNSのままの場合**: 表示される **CNAME**（例: `<project>.pages.dev`）を、レジストラのDNSに追加。
  ルートドメイン（`example.com`）を使う場合は CNAME フラット化に対応した Cloudflare DNS への移管が最も簡単です。

## 5. デプロイ後の確認

- `astro.config.mjs` の `site:` を本番ドメインに合わせておくこと（canonical / OGP / sitemap 用）。
- 表示・カレンダー・地図・LINEリンクの動作を本番URLで確認。

## メモ

- `material/`（元素材・.ai・写真原本）はリポジトリに含めていません（サイズ削減のため）。
  サイトで使う画像は `site/src/assets/photos/` に取り込み済みです。
- Google カレンダー連携時は、環境変数 `PUBLIC_GCAL_API_KEY` を Cloudflare Pages のビルド環境変数に追加します。
