---
layout          : post
title           : "JavaScript 设计模式 - 观察者模式"
author          : Rzning
date            : 2017-03-27 10:00:00 +0800
modified        : 2017-03-27 16:00:00 +0800
categories      : blog javascript
tags            : JavaScript Pattern
---

The Observer Pattern
====================



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

## 发布/订阅模式
#### Publish/Subscribe Pattern

定义一个发布订阅对象（PubSub）

```js
define('PubSub', [], function() {
    return function() {
        // 主题容器，用于存放不同的主题，每个订阅者可以订阅不同的主题
        var subjects = {};
        // 订阅者标记
        var subUid = -1;

        return {
            /**
             * 发布
             */
            publish: function(topic, args) {
                if(!subjects[topic]) {
                    return false;
                }
                setTimeout(function() {
                    var subscribes = subjects[topic];
                    var count = subscribers ? subscribers.length : 0;
                    while(count--) {
                        subscribers[count].func(topic, args);
                    }
                }, 0);
                return true;
            },
            /**
             * 订阅
             */
            subscribe: function(topic, func) {
                if(!subjects[topic]) {
                    subjects[topic] = [];
                }
                var token = (++subUid).toString();
                subjects[topic].push({
                    token: token,
                    func, func
                });
                return token;
            },
            /**
             * 退订
             */
            unsubscribe: function(token) {
                for(var topic in subjects) {
                    for(var i=0;i<subjects[topic].length;i++) {
                        if(subjects[topic][i].token === token) {
                            subjects[topic].splice(i, 1);
                            return token;
                        }
                    }
                }
                return false;
            }
        };
    };
});
```

一个简单的订阅/发布示例

```js
require(['PubSub'], function(PubSub) {
    var pubsub = new PubSub();
    // 订阅 'ex1' 主题，返回订阅者标识
    var subscriber = pubsub.subscribe('ex1', function(topic, data) {
        console.log(topic+' : '+data);
    });
    // 发布
    pubsub.publish('ex1', 'hello world!');
    // 退订
    pubsub.unsubscribe(subscriber);
});
```

## 应用实例

利用观察者模式实现事件的绑定和触发功能





## 参考

- [The Observer Pattern - Learning JavaScript Design Patterns - Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)
- [深入理解JavaScript系列（32）：设计模式之观察者模式 - 汤姆大叔 - 博客园](http://www.cnblogs.com/TomXu/archive/2012/03/02/2355128.html)
- [Javascript异步编程的4种方法 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/12/asynchronous＿javascript.html)