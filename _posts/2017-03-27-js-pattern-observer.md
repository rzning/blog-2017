---
layout          : post
title           : "JavaScript 设计模式 - 观察者模式"
author          : Rzning
date            : 2017-03-27 10:00:00 +0800
modified        : 2017-03-27 13:00:00 +0800
categories      : blog javascript
tags            : JavaScript Pattern
---

The Observer Pattern
====================


实现一个观察者模式，通常包含下面几个组件。

Component | Description
--|--
`Subject` | 维护一个观察者列表，用于添加或删除观察者
`Observer` | 当 `Subject` 状态改变时，为需要被通知的对象提供一个更新接口


观察者列表对象

```js
define('ObserverList', [], function() {
    return function() {

        var list = [];

        return {
            count: function() {
                return list.length;
            },
            add: function(obj) {
                list.push(obj);
            },
            get: function(index) {
                if(index>-1 && index<list.length) {
                    return list[index];
                }
            },
            indexOf: function(obj, startIndex) {
                var i = startIndex || 0;
                while(i<list.length) {
                    if(list[i] == obj) {
                        return i;
                    }
                    i++;
                }
                return -1;
            },
            removeAt: function(index) {
                list.splice(index, 1);
            }
        };
    };
});
```

主对象

```js
define('Subject', ['ObserverList'], function(ObserverList) {
    return function() {

        var observers = new ObserverList();

        return {
            addObserver: function(observer) {
                observers.add(observer);
            },
            removeObserver: function(observer) {
                var index = observers.indexOf(observer);
                observers.removeAt();
            },
            /**
             * 发布通知到所有观察者
             */
            notify: function(context) {
                var count = observers.count();
                for(var i=0;i<count;i++) {
                    observers.get(i).update(context);
                }
            }
        }
    }
});
```

观察者对象

```js
define('Observer', [], function() {
    return function() {
        return {
            update: function() {
                //...
            }
        }
    }
});
```




## 参考

- [The Observer Pattern - Learning JavaScript Design Patterns - Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)
- [深入理解JavaScript系列（32）：设计模式之观察者模式 - 汤姆大叔 - 博客园](http://www.cnblogs.com/TomXu/archive/2012/03/02/2355128.html)
- [Javascript异步编程的4种方法 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/12/asynchronous＿javascript.html)