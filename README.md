# ts-nextjs-storybook-react-testing-library

2023/03/25  
"next": "13.2.4",  
"react": "18.2.0",

## 目的

以下の項目に慣れ親しむようにする。

- storybook
- react-testing-library
- jest

## プロジェクトの作成

1. next-app
2. tailwind install
3. prettier setting

```shell
$ npx create-next-app . --typescript
# npx create-next-app@latest my-project --typescript --eslint

$ npm run dev
http://localhost:3000/
```

## nextjs + tailwind

https://tailwindcss.com/docs/guides/nextjs

```shell
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

```tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Unknown at rule @tailwindcss(unknownAtRules)

https://flaviocopes.com/fix-unknown-at-rule-tailwind/

```.vscode/settings.json
"css.lint.unknownAtRules": "ignore",
```

とすることで、無視する。

### TailwindCSS の class の並び替え

[TaiwindCSS の class の順番並び替えを最速で導入する](https://zenn.dev/nbr41to/articles/e1fe669ae37875)

```shell
$ npm i -D prettier prettier-plugin-tailwindcss
```

インストールするだけで、prettier が動いてくれる。

### scripts

```package.json
  "scripts": {
    "dev": "next dev -p 3033",
    "build": "next build",
    "start": "next start",
    "lint": "next lint --dir src",
    "lint:fix": "npm run lint --fix",
    "format": "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json}'"
  },
```

## other libs

```shell
$ npm i @heroicons/react @headlessui/react
$ npm i @tanstack/react-query
```

# install testing libs

https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
https://zenn.dev/garypippi/articles/c79cb002e001681a73cd
https://zenn.dev/purenium/articles/nextjs-12_1-next-jest-and-e2e-cypress

```shell
$ npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

# install storybook

```shell
$ npx storybook init
$ npm i -D @storybook/addon-postcss
```

addons に、@storybook/addon-postcss を追加する。

```.storybook/main.js
 "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ]
```

preview で、globals.css を読み込むようにする。

```.storybook/preview.ts
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
```
