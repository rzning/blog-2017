---
layout          : post
title           : "Eclipse Che 工作空间管理"
author          : Rzning
date            : 2017-04-27 22:30:00 +0800
modified        : ~
categories      : blog Che
tags            : Eclipse Che
---

Eclipse Che Workspace
=====================

> 参考 : <http://www.eclipse.org/che/>

[Eclipse Che] 工作空间（Workspace）便携和可分享，因为其由项目（Projects）和环境（Environments）构成。

## Workspace 激活

### 创建一个生产运行时工作空间

- 一个 Docker 镜像或“菜谱（recipe）”，例如 `Dockerfile` / `Composefile`
- 运行时（Runtimes）可以继承自其他类型的“机器（machines）”例如 SSH
- 创建镜像，若有必要，使用额外的 run + volume mount 参数
- 提供许多预定义的 Docker 组件和镜像运行时栈

### 从版本控制引入项目

- Clone - 复制
- Mount - 挂载
- Rsync - 同步

## 工作空间模型

- 环境（Environments）
- 代理（Agents）
- 项目（Projects）
- 命令（Commands）
- 集成开发环境（IDEs）





[Eclipse Che]: <http://www.eclipse.org/che/>