---
layout      : post
title       : "Git 换行符配置"
author      : Rzning
date        : 2019-05-07 11:50:00 +0800
modified    : 2019-05-09 00:00:20 +0800
categories  : blog vue
tags        : vue
---

Git 换行符配置
=============

## 换行符

符号 | ASCII | 转义 | 名称 | 含义 | 备注
-|-|-|-|-|-
CR   | 13 | `\r` | Carriage-Return | 回车 |
LF   | 10 | `\n` | Line-Feed | 换行 | Unix 环境
CRLF |    | `\r\n` | | 回车换行 | Windows 环境


## Git 配置

```sh
$git config core.autocrlf input
$git config core.safecrlf true
```

- `AutoCRLF`

> [core.autocrlf - git-config Documentation](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coreautocrlf)

```sh
#提交时转换为 LF，检出时转换为 CRLF （Windows 下）
$git config --global core.autocrlf true

#提交时转换为 LF，检出时不转换
$git config --global core.autocrlf input

#提交检出均不转换
git config --global core.autocrlf false
```

- `SafeCRLF`

> [core.safecrlf - git-config Documentation](https://git-scm.com/docs/git-config#Documentation/git-config.txt-coresafecrlf)

```sh
#拒绝提交包含混合换行符的文件
git config --global core.safecrlf true

#允许提交包含混合换行符的文件
git config --global core.safecrlf false

#提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn
```

## 官方教程

- [Git - 配置 Git](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git)