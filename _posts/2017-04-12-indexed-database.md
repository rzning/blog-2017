---
layout          : post
title           : "使用 IndexedDB 管理数据"
author          : Rzning
date            : 2017-04-12 21:00:00 +0800
modified        : ~
categories      : blog WebAPI
tags            : WebAPI IndexedDB
---

Web IndexedDB
=============

利用 IndexedDB API 可以在客户端浏览器上构建一个事务性数据库。

****

1. 侦测浏览器支持
2. 链接到数据库
3. 创建 UI 界面
4. 实现数据库查询
5. 创建搜索界面
6. 向数据库添加数据
7. 实现更新和删除数据
8. 删除数据库

****

## 1. 侦测浏览器对数据库的支持

```js
var indexedDB = window.indexedDB || window.webkitIndexedDB ||
                window.mozIndexedDB || window.msIndexedDB || false;
var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
                window.mozIDBKeyRange || window.msIDBKeyRange || false;
var webSQLSupport = ('openDatabase' in window);
```

## 2. 连接到 IndexedDB 数据库

使用 IndexedDB 的 `open` 方法，可以创建或连接到一个 IndexedDB 数据库。

```js
var db;
function openDB() {
    if(indexedDB) {
        // 创建或连接数据库，并返回与该数据库的连接。
        // open(name, version) 返回 IDBRequest 对象
        var request = indexedDB.open('Mobs', 1);
        // 用于检测浏览器是否支持 `upgradeNeeded` 事件
        var upgradeNeeded = ('onupgradeneeded' in request);
        request.addEventListener('success', function(e) {
            db = e.target.result;
            //
        }, false);
    }
}
```









