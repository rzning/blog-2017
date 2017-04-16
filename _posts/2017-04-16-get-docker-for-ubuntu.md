---
layout          : post
title           : "在 Ubuntu 安装 Docker"
author          : Rzning
date            : 2017-04-16 22:00:00 +0800
modified        : ~
categories      : blog Docker
tags            : Docker
---

Get Docker for Ubuntu
=====================

> refer: <https://docs.docker.com/engine/installation/linux/ubuntu/>

## 前提

### 系统需求

安装 [Docker] 需要 64-bit 的下列 Ubuntu 版本：

- Yakkety 16.10
- Xenial 16.04 (LTS)
- Trusty 16.04 (LTS)

[Docker] CE 版本支持 `x86_64` 和 `armhf` 架构。

### 卸载旧版本

旧版本的 [Docker] 被称作 `docker` 或 `docker-engine`。若已安装它们，请执行下列命令进行卸载：

```sh
$sudo apt-get remove docker docker-engine
```

# 安装

你可以根据你的需要，选择不同的方式安装 [Docker] ：

- 多数用户会配置 [Docker] 存储库，并使用存储库来安装。此方法便于安装和升级任务，这是推荐的方法。
- 个别用户会下载 DEB 包来手动安装，并使用完全手动的方式管理升级。此方法适用于，没有互联网接入的封闭系统环境下安装 [Docker] 。

## 通过存储库安装

在一个新主机上首次安装 [Docker] 之前，你需要配置 [Docker] 存储库。之后，你可以从此仓库中安装和更新 [Docker] 。

#### 一、配置存储库

对于 `Docker CE` 和 `Docker EE` ，其配置存储库的过程是不同的：

#### Docker CE

1. 安装包允许 `apt` 通过 HTTPS 使用存储库：

    ```sh
    $sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        software-properties-common
    ```

2. 添加 [Docker] 官方 GPG 秘钥：

    ```sh
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    ```

    验证秘钥的关键是 `9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88` 。

    ```sh
    $ sudo apt-key fingerprint 0EBFCD88

    pub   4096R/0EBFCD88 2017-02-22
        Key fingerprint = 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
    uid                  Docker Release (CE deb) <docker@docker.com>
    sub   4096R/F273FCD8 2017-02-22
    ```

3. 使用以下命令设置稳定的（stable）存储库。



[Docker]: <http://docker.com>


