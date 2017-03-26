---
layout          : post
title           : "babel-core 编译核心包"
author          : Rzning
date            : 2017-03-20 20:00:00 +0800
modified        : 2017-03-26 22:40:00 +0800
categories      : blog babel
tags            : Babel
share_text      : "A compiler for writing next generation JavaScript."
---

[babel-core]
============

[babel-core]: <https://github.com/babel/babel/tree/7.0/packages/babel-core>

[babel-core] : Babel compiler core.

> babel API 参考 : <http://babeljs.io/docs/usage/api/>

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

> AST - Abstract Syntax Tree 抽象语法树

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

Option | Default | Description
-|-|-
`ast`       | `true` | 返回对象中包含 AST
`auxiliaryCommentAfter`  | `null` | 在所有非用户注入代码之前添加注释
`auxiliaryCommentBefore` | `null` | 在所有非用户注入代码之后添加注释
`babelrc`   | `true` | 指定是否使用 `.babelrc` 和 `.babelignore` 文件
`code`      | `true` | 使能生成代码
`comments`  | `true` | 是否输出注释
`compact`   | `"auto"` | 简洁输出，排除多余的空白字符和行结束符
`env`       | `{}` | 用于配置不同的环境
`extends`   | `null` | 用于继承的 `.babelrc` 文件路径
`filename`  | `"unknown"` | 用于错误等的文件名
`filenameRelative`  | `(filename)` | 相对于 `sourceRoot` 的文件名
`generatorOpts`     | `{}` | 传递给 babel 代码生成器的配置对象
`getModuleId`       | `null` | 指定一个自定义回调，用来生成模块 ID
`highlightCode`     | `true` | ANSI 高亮显示语法错误代码框架
`ignore`            | `null` | `only` 的对立选项，若指定了 `only` 则将无视 `ignore` 选项
`inputSourceMap`    | `null` | 一个输出源映射将基于的源映射对象
`minified`      | `false` | 是否代码压缩
`moduleId`      | `null` | 指定一个自定义模块 ID
`moduleIds`     | `false` | 若为 `true` 则显式的插入模块 ID 。默认情况下,所有模块都是匿名的。（不能用于 `common` 模块）
`moduleRoot`    | `(sourceRoot)` | 可选的 AMD 模块格式化程序前缀，这将首先考虑模块定义的文件名
`only`          | `null` | 一个 [glob](https://github.com/isaacs/minimatch), regex (正则表达式) 或包含两者的混合数组，用于 **only** 编译时匹配的路径
`parserOpts`    | `{}` | 传递给 Babel 解析器的配置对象
`plugins`       | `[]` | 需加载的插件列表 [plugins](http://babeljs.io/docs/plugins/)
`presets`       | `[]` | 需加载的 [presets](http://babeljs.io/docs/plugins/#presets) （一组插件）列表
`retainLines`   | `false` | 保留行号
`resolveModuleSource`   | `null` | 指定一个自定义模块源
`shouldPrintComment`    | `null` | 一个可选回调，用于控制是否输出注释
`sourceFileName`        | `(filenameRelative)` | 设置 `sources[0]` 到返回的源映射
`sourceMaps`            | `false` | 若为真则添加 `map` 属性到返回输出对象。
`sourceMapTarget`       | `(filenameRelative)` | 设置 `file` 到返回的源映射
`sourceRoot`            | `(moduleRoot)` | 指定所有源文件的相对根路径
`sourceType`            | `"module"` | 指定需解析的代码的模式 `script` 或 `module`
`wrapPluginVisitorMethod` | `null` | 一个可选回调可用于包装访问器方法