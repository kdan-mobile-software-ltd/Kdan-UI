<p align="center">
  <img src="https://www.kdanmobile.com/images/menu/kdanlogo_02.svg" height="100" alt="rts" />

<p align="center">
  <img src="https://uploaddeimagens.com.br/images/002/705/273/full/rts.png?1592061852" height="100" alt="rts" />

# Kdan UI Kit

[online preview](https://www.chromatic.com/builds?appId=5ffed3d9e0d3f0002185cee9)

---

## About

Kdan mobile UI Storybook with ReactJS and TypeScript.

凱鈿 UI Kit 目前適用於，官網、商城兩個平台。內容包含了 Web design system，UI component。

---

### installation

```
npm install @kdanmobile/kdan-ui styled-components
or
yarn add @kdanmobile/kdan-ui styled-components
```

---

## Quick Start

Watch

```
yarn storybook
```

Build

```
yarn build
```

Test

```
yarn test
```

---

## How to use

in pages/\_app.js

```
<!-- import fonts css -->
import '@kdanmobile/kdan-ui/dist/fonts/clear-sans.css';
```

```
<!-- Normal -->
import { Example } from '@kdanmobile/kdan-ui';
```

```
<!-- Code splitting -->
import Example from '@kdanmobile/kdan-ui/dist/Example';
```

---

## Deployment

Uses Chromatic, a free publishing service made by the Storybook maintainers. It allows us to deploy and host our Storybook safely and securely in the cloud.

Now that our project is hosted in a GitHub repository, we can use a continuous integration(CI) service to deploy our Storybook automatically.

```
git add .
```

```
git commit -m "GitHub action setup"
```

```
git push origin master
```

Once you’ve set up the GitHub action. Your Storybook will be deployed to Chromatic whenever you push code.
