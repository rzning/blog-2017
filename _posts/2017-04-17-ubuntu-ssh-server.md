---
layout          : post
title           : "SSH 远程登录 Ubuntu"
author          : Rzning
date            : 2017-04-17 14:30:00 +0800
modified        : ~
categories      : blog Linux
tags            : Linux Ubuntu SSH
---

Linux SSH Server
===================

使用 xShell 等工具，以 SSH 方式远程登录 Linux 系统，远程 Linux 系统需要开启 SSH 服务。

### 1. 更新源列表

```sh
$sudo apt-get update
```

### 2. 安装 SSH

```sh
$sudo apt-get install openssh-server
```

### 3. 查看 SSH 服务是否启动

```sh
$sudo ps -e | grep ssh
```

### 4. 启动 SSH 服务

```sh
$sudo service ssh start
```

### 5. 再次验证 SSH 服务是否启动

```sh
$sudo ps -e | grep ssh
```
