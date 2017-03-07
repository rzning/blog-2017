---
layout          : post
title           : "Web API 本地存储"
author          : Rzning
date            : 2017-03-06 20:00:00 +0800
categories      : blog WebAPI
tags            : WebAPI localStorage
share_text      : "Web API Local Storage"
---

Web Storage
===========

****
1. Web Storage API - ( localStorage, sessionStorage )
2. Web SQL Database API
3. Indexed Database API
****

> ### W3C - storage-related specifications
> - [Web Storage](https://www.w3.org/TR/webstorage/)
> - [Indexed Database](https://www.w3.org/TR/IndexedDB/)
> - [Web SQL Database](https://www.w3.org/TR/webdatabase/) - (已停止维护)


# 1. Web Storage API

## 存储机制

- [Window].[localStorage] | 本地存储，窗口间共享（同一站点）没有过期时间（expiration time）。

- [Window].[sessionStorage] | 会话存储，单页面临时数据，在会话结束（关闭浏览器）时清除。

上面两个属性都返回 [Storage] 对象。

## 接口

- [The Storage interface](https://www.w3.org/TR/webstorage/#the-storage-interface)

## 属性

- `length` | 数量，返回存储在 [Storage] 对象中的数据项数量。

## 方法

Methods | Description
- | -
`key(<index>)` | 返回指定（索引号）位置上的项。
`getItem(<key>)` | 获取指定键名对应项的值。
`setItem(<key>,<value>)` | 创建新项，或更新对应项的值。
`removeItem(<key>)` | 删除指定项。
`clear()` | 清空存储空间中所有项。

[Storage] 对象还支持下面语法：

```js
storage[<key>] = <value>;
var <value> = storage.<key>;
```

## 事件

- `window.onstorage` | 当存储域发生改变时触发，无论是添加还是清除项都会触发。


## 存储位置

以 Windows 系统 Chrome 为例，本地存储数据存放在下面目录下。

- `%HOMEPATH%\AppData\Local\Google\Chrome\User Data\Default\`
    - `Local Storage` - 本地存储数据文件目录
    - `session Storage` - 会话存储数据文件目录
    - `databases` - SQL 数据库文件目录
    - `IndexedDB` - NoSQL 数据库文件目录

其中 `%HOMEPATH%` 为用户根目录，通常为 `C:\Users\<username>` 目录。


[Storage]:          <https://developer.mozilla.org/zh-CN/docs/Web/API/Storage>
[Window]:           <https://developer.mozilla.org/zh-CN/docs/Web/API/Window>
[localStorage]:     <https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage>
[sessionStorage]:   <https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage>


# 2. Web SQL Database API

Web SQL Database 可以让开发人员使用 SQL 语句操作客户端浏览器中嵌入的 SQLite 数据库，其提供的 API 是异步（asynchronours）的。

> Beware. Web SQL Database 规范已不再积极维护，而且 Web 应用程序工作组也不打算进一步维护它。
>
> 来自：[Web SQL Database - W3C 工作组](https://www.w3.org/TR/webdatabase/)


## 方法

Methods | Description
- | -
`openDatabase()` | 创建数据库，并返回一个 `Database` 对象
`transaction()`  | 控制事务提交或回滚
`executeSql()`   | 执行 SQL 语句


```js
var db = window.openDatabase(
    name,           // 数据库名
    version,        // 数据库版本号
    displayName,    // 数据库显示名
    estimatedSize,  // 存储大小，以字节为单位
    creationCalback // 可选回调函数，在创建数据库时回调
);

db.transaction(
    SQLTransactioncallback,     // SQL 事务处理回调函数
    errorCallback,              // 可选，错误回调函数
    successCallback             // 可选，成功回调函数
);

function SQLTransactioncallback(transaction) {  // 参数为一个事务对象，可用来执行 SQL 语句。
    transaction.executeSql(
        sqlStatement,       // 需执行的 SQL 语句字符串
        arguments,          // 可选，查询语句中 `?` 指代的字符串数据数组
        callback,           // 可选，成功回调函数
        errorCallback       // 可选，失败回调函数
    );
}

```




# 3. Indexed Database API





## 参考

- [基于 HTML5 中的 Web SQL Database 来构建应用程序 - IBM developerWorks](http://www.ibm.com/developerworks/cn/web/1108_zhaifeng_websqldb/)

- [HTML5 学习笔记（三）——本地存储(LocalStorage、SessionStorage、Web SQL Database) - SeeYouBug - 博客园](http://www.cnblogs.com/SeeYouBug/p/6127001.html)
