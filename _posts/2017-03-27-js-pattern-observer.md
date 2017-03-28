---
layout          : post
title           : "JavaScript 设计模式 - 观察者模式"
author          : Rzning
date            : 2017-03-27 10:00:00 +0800
modified        : 2017-03-28 20:22:00 +0800
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
                observers.removeAt(index);
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

利用观察者模式实现事件的绑定和触发功能。

事件列表对象

```js
define('EventList', [], function() {
    return function() {
        /*{
            'event1': [
                function(){},
                function(){},
                ...
            ],
            'event2': [...],
            ...
        }*/
        var list = {};
        return {
            indexOf: function(name, value) {
                if(typeof name == 'string') {
                    if(!(name in list)) {
                        return -2;
                    }
                    if(typeof value == 'function') {
                        var i = 0;
                        while(i<list[name].length) {
                            if(list[name][i] === value) {
                                return i;
                            }
                            i++;
                        }
                        return -1;
                    }
                }
                return -3;
            },
            add: function(name, value) {
                var index = this.indexOf(name, value);

                switch(index) {
                    // 传入参数格式错误
                    case -3: return -1;
                    // 在 list 中未找到 name
                    case -2: list[name] = [];
                    // 在 list[name] 中未找到 value
                    case -1: var length = list[name].push(value);
                        return length-1;
                    // 在 list[name] 中已经存在 value
                    default: return index;
                }
            },
            get: function(name, index) {
                if(typeof name == 'string' && name in list) {
                    if(typeof index == 'number') {
                        if(index>-1 && index<list[name].length) {
                            return list[name][index];
                        }
                        return null;
                    }
                    return list[name];
                }
                return null;
            },
            remove: function(name, value) {
                var index = this.indexOf(name, value);
                if(index>-1) {
                    list[name].splice(index, 1);
                }
            }
        };
    };
});
```

事件管理对象

```js
define('Events', ['EventList'], function(EventList) {
    return function() {
        var internal = {
            on: function(obj, name, callback) {
                if(obj && obj._events) {
                    obj._events.add(name, callback);
                }
            },
            off: function(obj, name, callback) {
                if(obj && obj._events) {
                    obj._events.remove(name, callback);
                }
            },
            trigger: function(obj, name, args) {
                if(obj && obj._events) {
                    // args.unshift(obj);
                    var handles = obj._events.get(name);
                    if(handles) {
                        var length = handles.length;
                        for(var i=0;i<handles.length;i++) {
                            handles[i].apply(obj, args);
                        }
                    }
                }
            }
        };
        var _events = new EventList();
        return {
            set _events(value) {
            },
            get _events() {
                return _events;
            },
            /**
             * 绑定事件 注册事件 on
             */
            bind: function(name, callback) {
                internal.on(this, name, callback);
            },
            /**
             * 取消绑定 off unbind
             */
            remove: function(name, callback) {
                internal.off(this, name, callback);
            },
            /**
             * 触发事件 trigger
             */
            fire: function(name) {
                // var args = [].concat(arguments);
                //     args.shift();
                var length = Math.max(0, arguments.length - 1);
                var args = Array(length);
                for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

                internal.trigger(this, name, args);
            },
            /**
             * 监听事件
             */
            listen: function(obj, name, callback) {
                internal.on(obj, name, callback);
            }
        };
    };
});
```

使用示例

```js
require(['Events'], function(Events) {
    var event = new Events();

    function print(value) {
        alert(value);
    }

    // 绑定事件
    event.bind('output',print);
    // 触发事件
    event.fire('output', 'Hello World!');
    // 取消绑定
    event.remove('output', print);
});
```


## 参考

- [The Observer Pattern - Learning JavaScript Design Patterns - Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)
- [深入理解JavaScript系列（32）：设计模式之观察者模式 - 汤姆大叔 - 博客园](http://www.cnblogs.com/TomXu/archive/2012/03/02/2355128.html)
- [Javascript异步编程的4种方法 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/12/asynchronous＿javascript.html)