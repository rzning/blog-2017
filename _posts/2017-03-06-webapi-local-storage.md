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
2. 
****

# 1. Web Storage API

## 存储机制

- [Window].[localStorage] | 本地存储，窗口间共享（同一站点）没有过期时间（expiration time）。

- [Window].[sessionStorage] | 会话存储，单页面临时数据，在会话结束（关闭浏览器）时清除。

上面两个属性都返回 [Storage] 对象。

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

- `storage[<key>] = <value>;`
- `var <value> = storage.<key>;`

## 事件

- `window.onstorage` | 当存储域发生改变时触发，无论是添加还是清除项都会触发。


[Storage]:          <https://developer.mozilla.org/zh-CN/docs/Web/API/Storage>
[Window]:           <https://developer.mozilla.org/zh-CN/docs/Web/API/Window>
[localStorage]:     <https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage>
[sessionStorage]:   <https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage>






## 参考

- [HTML5 学习笔记（三）——本地存储(LocalStorage、SessionStorage、Web SQL Database) - SeeYouBug - 博客园](http://www.cnblogs.com/SeeYouBug/p/6127001.html)
