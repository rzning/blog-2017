---
layout          : post
title           : "Web API 文件操作"
author          : Rzning
date            : 2017-03-22 21:00:00 +0800
modified        : 2017-03-30 12:10:00 +0800
categories      : blog WebAPI
tags            : WebAPI File Blob
---

Web File API
============

Interface | Description
:--:|-
[Blob](#blob)             | 代表一个不变的二进制数据。在一个 [Blob] 对象中，允许访问一定范围的字节数据作为一个独立的 [Blob] 。
[File](#file)             | 代表一个文件，包含一些只读的信息属性，比如文件的名称，最后修改日期等。
[FileList](#filelist)     | 代表一个数组，用于存放从底层系统中选中的文件。在用户界面，可以通过 `<input type="file">` 调用选取。
[FileReader](#filereader) | 提供了一些方法，用于读取 [File] 或 [Blob] 中的数据，并提供一个时间模型用来获取读取的结果。


> ### W3C - file-api specifications
> - [Latest published version](http://www.w3.org/TR/FileAPI/)
> - [Latest editor's draft](https://w3c.github.io/FileAPI/)


## Introduction

[File] 接口通常代表一个来自底层文件系统的文件数据，而 [Blob] 接口 - "Binary Large Object" - 代表不变的原始数据。此规范定义了一套基于事件模型的异步 API 用于访问一个 [File] 或 [Blob] 中的数据。 [FileReader] 对象提供异步读取方法，通过事件句柄内容属性和触发事件，来访问该文件的数据。

```html
<input id="file" type="file" />
```

```js
function startRead() {
    // 通过 DOM 获得 <input> 元素
    var file = document.getElementById('file').files[0];
    if(file) {
        getAsText(file);
    }
}

function getAsText(readFile) {
    var reader = new FileReader();
    // 以 UTF-16 格式，读取文件到内存
    reader.readAsText(readFile, "UTF-16");
    // 绑定相应事件回调
    reader.onprogress = updateProgress;
    reader.onload = loaded;
    reader.onerror = errorHandler;
}

/**
 * 读取过程处理
 */
function updateProgress(evt) {
    if(evt.lengthComputable) {
        // 计算文件读取进度
        var loaded = (evt.loaded/evt.total);
        if(loaded<1) {
            // 说明文件正在读取，可进行一些提示处理
            // 例如，增加进度条长度
            // style.width = (loaded *200) + "px";
        }
    }
}
/**
 * 读取完成处理
 */
function loaded(evt) {
    // 获取文件中的数据
    var fileString = evt.target.result;
    // 处理 UTF-16 文件转储
    if(utils.regexp.isChinese(fileString)) {
        // 汉字字符
    }
    else {
        // 进行其他字符集检测
    }
    // 将文件上传到服务器
    // xhr.send(fileString);
}
/**
 * 读取失败处理
 */
function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        // 文件无法读取
    }
}
```

## Blob

构造函数

- `Blob(blobParts, options)`
    - `array` - 数据数组
    - `options` - 配置对象，其中 `type` 属性指定其 MIME 类型，如 `type: 'text/html'` 等，默认为 `""` 。

一个使用示例：使用 `<iframe>` 请求一个由 [Blob] 数据创建的 URL 。

```html
<div id="root"></div>
<script>
window.addEventListener('load', function() {
    var data = '<h3>hello iframe</h3>';
    var blob = new Blob([data],{type:'text/html'});
    var iframe = document.createElement('iframe');
    var url = URL.createObjectURL(blob);
    iframe.setAttribute('src', url);
    document.getElementById('root').appendChild(iframe);
}, false);
</script>
```

其中 [URL.createObjectURL()] 静态方法接受一个 [Blob] 或 [File] 对象，将其转换为可通过路径访问的 [URL] 对象，并返回对应路径字符串。在每次调用 [URL.createObjectURL()] 方法时都会创建一个新的 [URL] 对象，若想获得最佳性能和内存使用，推荐在不使用时调用 [URL.revokeObjectURL()] 方法将其释放，其参数为相应 [URL] 对象访问路径字符串。


## File

## FileList


## FileReader







[FileList]: <https://developer.mozilla.org/en-US/docs/Web/API/FileList>
[Blob]: <https://developer.mozilla.org/en-US/docs/Web/API/Blob>
[File]: <https://developer.mozilla.org/en-US/docs/Web/API/File>
[FileReader]: <https://developer.mozilla.org/en-US/docs/Web/API/FileReader>
[URL]: <https://developer.mozilla.org/en-US/docs/Web/API/URL>
[URL.createObjectURL()]: <https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL>
[URL.revokeObjectURL()]: <https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL>