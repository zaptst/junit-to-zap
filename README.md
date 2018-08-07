# junit-to-zap

> Convert JUnit to [ZAP](https://github.com/zaptst/zap)

## Install

```sh
yarn add [--global] junit-to-zap
```

## Example

```sh
... | junit-to-zap
```

```js
const junitToZap = require('junit-to-zap');

process.stdin
  .pipe(junitToZap.stream())
  .pipe(process.stdout);

junitToZap('junit output'); // "zap output"
```
