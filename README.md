<p align="center">
  <img src="https://www.kdanmobile.com/images/menu/kdanlogo_02.svg" height="100" alt="rts" />

<p align="center">
  <img src="https://uploaddeimagens.com.br/images/002/705/273/full/rts.png?1592061852" height="100" alt="rts" />

# Kdan UI Kit

[online preview](https://www.chromatic.com/builds?appId=5ffed3d9e0d3f0002185cee9)

---

## About

Kdan mobile UI Storybook with ReactJS and TypeScript.

凱鈿 UI Kit 目前適用於，官網、商城兩個平台。內容包含了 Web design system，UI component。這套系統不會是一成不變得，元件樣式和設計系統會依照公司成長和主流風格改變不斷的迭代下去。

---

## Installation

```bash
npm install @kdanmobile/kdan-ui styled-components
or
yarn add @kdanmobile/kdan-ui styled-components
```

---

## Quick Start

Watch

```bash
yarn storybook
```

Build

```bash
yarn build
```

Test

```bash
yarn test
```

---

## How to use

### import font style

in pages/\_app.js

```js
<!-- import fonts css -->
import '@kdanmobile/kdan-ui/dist/fonts/clear-sans.css';
```

### import component

```js
<!-- Normal -->
import { Example } from '@kdanmobile/kdan-ui';
```

```js
<!-- Code splitting -->
import Example from '@kdanmobile/kdan-ui/dist/Example';
```

### Override the component style

Because of the special needs of the project, we need to cover the component style, here is a simple example.

```js
import styled from 'styled-components';

const TabsStyleWrap = styled.div`
  .ku-tabs-label {
    color: #b6b6b6;
    border-bottom-color: #b6b6b6;
  }
`;

ReactDOM.render(
  <TabsStyleWrap>
    <Tabs {...props} />
  </TabsStyleWrap>
  mountNode,
);
```

---

## Deployment

Uses Chromatic, a free publishing service made by the Storybook maintainers. It allows us to deploy and host our Storybook safely and securely in the cloud.

Now that our project is hosted in a GitHub repository, we can use a continuous integration(CI) service to deploy our Storybook automatically.

```bash
git add .
```

```bash
git commit -m "GitHub action setup"
```

```bash
git push origin master
```

Once you’ve set up the GitHub action. Your Storybook will be deployed to Chromatic whenever you push code.

---

## Design System

- Typography
- Spacing
- Color
- Breakpoint

## UI Components

- Avatar
- Button
- Card
- Carousel
- Checkbox
- Collapse
- Dropdown
- Logo
- Navbar
- Select
- Tabs
- Textfield
- Typography

## Utils

- ClickAwayListener
- Portal
- Box
