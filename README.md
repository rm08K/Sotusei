# Sotusei
絶賛製作中  
トップページからMusicLadarにアクセスした場合、スクリプトが読み込まれないため更新して読み込んでください（大バグ）

## ビルド設定

```bash
# 依存関係のインストール
$ yarn install

# ホットリロードによるサーブ(Cross-env)
$ yarn dev

# 本番用にビルドしてサーバーを立ち上げる
$ yarn build
$ yarn start

# 静的プロジェクトの生成
$ yarn generate
```

詳しい動作説明については、[documentation](https://nuxtjs.org)をご覧ください。

## 特別なディレクトリ

以下のような特別なディレクトリを作成することができ、その中には特殊な動作をするものもあります。ただし、`pages`だけは必須です。

### `assets`

assets ディレクトリには、Stylus や Sass のファイル、画像、フォントなど、コンパイルされていないアセットが格納されます。

このディレクトリの使い方については、[ドキュメント](https://nuxtjs.org/docs/2.x/directory-structure/assets)を参照してください。

### `components` (コンポーネント)

componentsディレクトリには、Vue.jsのコンポーネントが格納されています。コンポーネントは、ページのさまざまな部分を構成し、ページやレイアウト、他のコンポーネントに再利用したり、インポートしたりすることができます。

このディレクトリの使い方については、[ドキュメント](https://nuxtjs.org/docs/2.x/directory-structure/components)で詳しく説明しています。

### `layouts` (レイアウト)

レイアウトは、サイドバーを追加したり、モバイル用とデスクトップ用に異なるレイアウトを用意したりと、Nuxtアプリの外観を変更したいときに大きな助けとなります。

このディレクトリの使い方については、[ドキュメント](https://nuxtjs.org/docs/2.x/directory-structure/layouts)を参照してください。

### `pages`

このディレクトリには、アプリケーションのビューとルートが格納されます。Nuxt はこのディレクトリ内のすべての `*.vue` ファイルを読み込み、Vue Router を自動的に設定します。

このディレクトリの使い方については、[ドキュメント](https://nuxtjs.org/docs/2.x/get-started/routing)を参照してください。

### `plugins`

plugins ディレクトリには、ルートの Vue.js アプリケーションをインスタンス化する前に実行したい JavaScript プラグインが格納されています。Vue のプラグインを追加したり、関数や定数を注入したりする場所です。`Vue.use()` を使用する必要がある場合は、`plugins/` にファイルを作成し、そのパスを `nuxt.config.js` の plugins に追加する必要があります。

このディレクトリの使い方については、[ドキュメント](https://nuxtjs.org/docs/2.x/directory-structure/plugins)で詳しく説明しています。

### `static`

静的ファイルを格納するディレクトリです。このディレクトリ内の各ファイルは `/` にマッピングされます。

例: `/static/robots.txt` は `/robots.txt` にマッピングされます。

このディレクトリの使い方については、[ドキュメント](https://nuxtjs.org/docs/2.x/directory-structure/static)を参照してください。

### `store`

Vuexのストアファイルを格納するディレクトリです。このディレクトリにファイルを作成すると、自動的に Vuex が起動します。

このディレクトリの使用方法については、[ドキュメント](https://nuxtjs.org/docs/2.x/directory-structure/store)を参照してください。
