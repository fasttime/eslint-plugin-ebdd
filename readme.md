# `eslint-plugin-ebdd` · [![npm version][npm badge]][npm url]

[ESLint](https://eslint.org/) environment for [Mocha](https://mochajs.org/)
[EBDD](https://github.com/fasttime/EBDD) interface.

## Installation

Install ESLint and `eslint-plugin-ebdd`:

```console
npm i --save-dev eslint eslint-plugin-ebdd
```

### Note

If you installed ESLint globally (using the `-g` flag) then you must also install plugins globally:

```console
npm i -g eslint-plugin-ebdd
```

## Usage

### Flat Config

Import `"eslint-plugin-ebdd"` in your `eslint.config.js` configuration file.
Use the `globals` export to define `languageOptions.globals` in your config.

```js
import { globals: ebddGlobals } from "eslint-plugin-ebdd";

export default [{ languageOptions: { globals: ebddGlobals } }];
```

### Legacy Config

Add `"ebdd"` to the plugins section of your `.eslintrc` configuration file.
You can omit the `eslint-plugin-` prefix.
Then configure the environment `ebdd/ebdd` under the `"env"` section.

```json
{
    "plugins": [
        "ebdd"
    ],
    "env": {
        "ebdd/ebdd": true
    }
}
```

[npm badge]: https://badge.fury.io/js/eslint-plugin-ebdd.svg
[npm url]: https://www.npmjs.com/package/eslint-plugin-ebdd
