---
layout          : post
title           : "babel-core 编译核心包"
author          : Rzning
date            : 2017-03-20 20:00:00 +0800
update          : 2017-03-20 20:00:00 +0800
categories      : blog babel
tags            : Babel
share_text      : "A compiler for writing next generation JavaScript."
---

babel-core
==========

> Babel compiler core.

## 引入

- `var babel = require('babel-core);`

- `import {transform} from 'babel-core';`

- `import * as babel from 'babel-core';`


## 使用

### `babel.transform()`

```js
/**
 * @param {String} code 需要处理的代码
 * @param {Object} options 转换选项
 * @return {Object} 返回包含 `code`, `map` 和 `ast` 的对象
 */
var result = babel.transform(code, options);
result; // => { code, map, ast }
```

### `babel.transformFile()`

```js
/**
 * 异步转换指定文件全部内容
 * @param {String} filename 需要处理的文件名称
 * @param {Object} options 转换选项
 * @param {Function} callback 转换完成回调
 */
babel.transformFile(filename, options, function (err, result) {
    result; // => { code, map, ast }
});
```

### `babel.transformFileSync()`

```js
/**
 * 同步方式转换指定文件全部内容
 * @param {String} filename 需要处理的文件名称
 * @param {Object} options 转换选项
 * @return {Object} 返回包含 `code`, `map` 和 `ast` 的对象
 */
var result = babel.transformFileSync(filename, options);
result; // => { code, map, ast }
```

### `babel.transformFromAst()`

鉴于一个 [AST](https://astexplorer.net/) 进行转换。

```js
const code = "if (true) return;";
const ast = babylon.parse(code, { allowReturnOutsideFunction: true });
const { code, map, ast } = babel.transformFromAst(ast, code, options);
```

## 选项

> #### Babel CLI
> 你可以使用来自 Babel CLI 的选项，比如：
> 
> `babel --name=value`

