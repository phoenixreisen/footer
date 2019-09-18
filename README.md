# Phoenix Footer

Prinzipiell soll diese Komponente den Standard-Footer für diverse (standalone) Phoenix-Services bereitstellen.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Anwendung

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/footer
```

```js
import Footer from '@phoenixreisen/footer';

//oder

const Footer = require('@phoenixreisen/footer');
```

```js
// @param url verlinkt das Logo entsprechend
// @param version wird standardmäßig unter dem Logo angezeigt

<Footer headline="für etwas Vorfreude" env="staging" />

//oder

m(Footer, { headline:"für etwas Vorfreude", env:"staging" });
```

## Test

```bash
[npm install]

npm run test
```

## Deployment

```bash
[npm install]
[npm run test]

npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm
git push
```