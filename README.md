# Phoenix Footer

Prinzipiell soll diese Komponente den Standard-Footer für diverse (standalone) Phoenix-Services bereitstellen.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Anwendung

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/footer
```

## Anwendung

```js
// entweder ES6+
import Footer from '@phoenixreisen/footer';

// oder CommonJS
const Footer = require('@phoenixreisen/footer');
```

#### Aufruf

```js
<Footer headline="für etwas Vorfreude" env="[staging|production]" />

//oder

m(Footer, { headline:"für etwas Vorfreude", env:"[staging|production]" });
```

Wird für `env` "staging" angegeben, wird `border-top` gelb eingefärbt.

## Test

```bash
[npm install]

npm run test
```

## Deployment

```bash
[npm install]                       # Abhängigkeiten installieren
npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm
git push
```