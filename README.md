# d-hacks ホームページ

## 更新方法
1. 本レポジトリをローカルに git clone する
2. 必要な変更を加える
3. 変更点をgit add + git commitし、最後にpushする
4. github上で[Actions](https://github.com/nkzwlab/dhacks-site/actions)から「Deploy to Production」-> 「Run workflow」を選択する
5. デプロイが終わるまで待つ。

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


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

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
