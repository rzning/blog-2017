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

### Step 1. 配置存储库

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

    > Note: 使用 `lsb_release -cs` 子命令将返回 Ubuntu 发行版本名称，如 `xenial` 。
    >
    > 有时，在 Linux Mint 发行版本中，你可能需要改变 `$(lsb_release -cs)` 为其父 Ubuntu 版本。
    > 例如：若你使用 `Linux Mint Rafaela` 系统，你需要使用 `trusty` 。

    **amd64**:

    ```sh
    $sudo add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) \
        stable"
    ```

    **armhf**:

    ```sh
    $sudo add-apt-repository \
        "deb [arch=armhf] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) \
        stable" 
    ```

#### Docker EE

1. 安装包，以允许 `apt` 通过 HTTPS 使用存储库：

    ```sh
    $sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        software-properties-common
    ```

2. 添加 [Docker] 官方 GPG 秘钥，使用你客户端 Docker EE 仓库 URL 。

    ```sh
    $ curl -fsSL <DOCKER-EE-URL>/gpg | sudo apt-key add -
    ```

    验证秘钥的关键是 `DD91 1E99 5A64 A202 E859 07D6 BC14 F10B 6D08 5F96` 。

    ```sh
    $ apt-key fingerprint 0EBFCD88

    pub   4096R/6D085F96 2017-02-22
        Key fingerprint = DD91 1E99 5A64 A202 E859  07D6 BC14 F10B 6D08 5F96
    uid       [ultimate] Docker Release (EE deb) <docker@docker.com>
    sub   4096R/91A29FA3 2017-02-22
    ```

3. 使用以下命令设置稳定的存储库，使用你的 URL 替换 `<DOCKER-EE-URL>` 。

    ```sh
    $sudo add-apt-repository \
        "deb [arch=amd64] <DOCKER-EE-URL> \
        $(lsb_release -cs) \
        stable-17.03"
    ```

### Step 2. 安装 Docker

1. 更新 `apt` 包索引。

    ```sh
    $sudo apt-get update
    ```

2. 安装最新版本的 [Docker] 或通过下一步安装一个指定版本。

    Docker Edition | Command
    --|--
    Docker CE | `sudo apt-get install docker-ce`
    Docker EE | `sudo apt-get install docker-ee`

3. 在生产系统中，你应该安装一个稳定版本的 [Docker] 而不总是使用最新版本。使用下面命令将列出可用版本。

    ```sh
    $ apt-cache madison docker-ce
    # or
    $ apt-cache madison docker-ee
    ```

    Docker Edition | Command
    --|--
    Docker CE | `sudo apt-get install docker-ce=<VERSION>`
    Docker EE | `sudo apt-get install docker-ee=<VERSION>`

    [Docker] 守护进程将自动启动。

4. 运行 `hello-world` 镜像，验证安装。

    ```sh
    $sudo docker run hello-world
    ```


## 卸载

1. 卸载 [Docker] 包：

    Docker Edition | Command
    --|--
    Docker CE | `sudo apt-get purge docker-ce`
    Docker EE | `sudo apt-get purge docker-ee`

2. 删除所有的镜像，容器和卷：

    > 在你主机上的镜像（images），容器（containers），卷（volumes）和自定义配置文件不会自动删除。

    ```sh
    $sudo rm -rf /var/lib/docker
    ```

[Docker]: <http://docker.com>
