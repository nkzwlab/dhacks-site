# d-hacks ホームページ

## 研究一覧の更新
1. JNのVPNを有効化
2. https://d-hacks.jn.sfc.keio.ac.jp/admin/ にアクセスして研究内容を更新する

## サイトの更新
masterブランチへ push すると、GitHub Actions によるCI/CDが実行され、自動的にサイトに反映されます。

または、[Actions](https://github.com/nkzwlab/dhacks-site/actions)  の「Deploy to Production」→「Run workflow」を選択すると、手動でデプロイを開始できます。

## 管理者
※ 2024S時点
- [aokiti](https://github.com/sakusaku3939)
- [tatsuru](https://github.com/s19514tt)
- [hhiromasa](https://github.com/Hiromasa-H)
- [gozu](https://github.com/KentarouGotou)
- [hiyon](https://github.com/hiyon)
---
※ 2023F時点
- [tatsuru](https://github.com/s19514tt)
- [hhiromasa](https://github.com/Hiromasa-H)


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
