---
layout      : post
title       : "Bootstrap 概览"
author      : Rzning
date        : 2017-04-04 22:00:00 +0800
modified    : 2017-04-04 22:00:00 +0800
categories  : blog bootstrap
tags        : Bootstrap
---

# Bootstrap 概览

### HTML5 文档类型

```html
<!DOCTYPE html>
<html lang="zh-CN">
    ...
</html>
```

### 移动设备优先

```html
<meta name="viewport" 
    content="width=device-width,
        initial-scale=1">
```

禁用其缩放（zooming）功能

```html
<meta name="viewport"
    content="width=device-width,
        initial-scale=1,
        maximum-scale=1,
        user-scalable=no">
```

### Normalize.css

为了增强跨浏览器表现的一致性，Bootstrap 使用了 [Normalize.css](http://necolas.github.io/normalize.css/) 重置样式库。

### 布局容器

Bootstrap 需要为页面内容和栅格系统包裹一个容器（Container）。Bootstrap 提供了两个作此用处的类。

- `.container` 类用于固定宽度并支持响应式布局的容器。

```html
<div class="container">
    ...
</div>
```

- `.container-fluid` 类用于 100% 宽度，占据全部视口（viewport）的容器。

```html
<div class="container-fluid">
    ...
</div>
```

