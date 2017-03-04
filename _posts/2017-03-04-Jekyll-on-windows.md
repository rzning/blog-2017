---
layout          : null
title           : "在 Windows 平台使用 Jekyll 3"
author          : Rzning
date            : 2017-03-04 20:00:00
categories      : Jekyll Ruby Windows
share_text      : "An updated guide to setting up Jekyll 3 on Windows."
---

在 Windows 平台使用 Jekyll 3
============================

> 参考 : [How to run Jekyll 3 on Windows][original] - [github][original-github]

[original]: <https://labs.sverrirs.com/jekyll/>
[original-github]: <https://github.com/sverrirs/jekyllonwindows>

****
1. Ruby - Install Ruby and the Ruby DevKit
2. Jekyll - Install the Jekyll Gem
3. Syntax - Install a Syntax Highlighter
4. Markdown - Configure Markdown
5. Watch - Let Jekyll --watch
6. Run - Run Jekyll without errors

****

# 1. Install Ruby and the Ruby DevKit

根据你的系统（x86/x64）下载相应的 `Ruby` 和 `Ruby DevKit` 安装包。

- 下载地址 : [RubyInstaller for Windows](http://rubyinstaller.org/downloads/)

为保险起见，建议安装 32-bit 版本。

> The 64-bit versions of Ruby are relatively new on the Windows area and not all the packages have been updated to be compatible with it.
>
> From: http://rubyinstaller.org/downloads/

我下载了 [ruby-2.2.6-32bit][ruby-ins] 版本，及对应的 [DevKit][devkit-ins] 。

[ruby-ins]: <https://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.2.6.exe>
[devkit-ins]: <https://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe>

> Jekyll v3.x requires Ruby version >= 2.0.0.

先安装 Ruby 再安装 DevKit ，在安装 Ruby 时确保勾选 "Add Ruby executables to your PATH" 选项。

下载的 DevKit 为一个自解压包，对于解压目标目录不要出现空格字符，为简单起见使用下面路径：
- `C:\Ruby22\` - Ruby 安装目录
- `C:\RubyDevKit\` - DevKit 释放目录

完成 Ruby 安装和 DevKit 包释放，接下来需要初始化 DevKit 将其绑定到已安装好的 Ruby 上，使其能正常运作。

> Ruby DevKit 绑定过程可参考 : [rubyinstaller-wiki-DevKit - Run Installation Scripts](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit#4-run-installation-scripts)

- 打开命令窗口，切换到 DevKit 目录。

```sh
> cd C:\RubyDevKit\ 
```

- 运行下面初始化命令，此命令会自动找到 Ruby 的安装位置，并生成 `config.yml` 配置文件。

```sh
> ruby dk.rb init
[INFO] found RubyInstaller v2.2.6 at C:/Ruby22
```

- 可选：修改生成的 `config.yml` 文件，并运行下面命令验证修改的配置文件是正确的。

```sh
> ruby dk.rb review
```

- 运行下面安装命令，将 DevKit 注入到 Ruby 中。

```
> ruby dk.rb install
[INFO] Updating convenience notice gem override for 'C:/Ruby22'
[INFO] Installing 'C:/Ruby22/lib/ruby/site_ruby/devkit.rb'
```

- 一切顺利的话，Ruby 环境以及配置好了。

> 验证安装是否成功可参考：[rubyinstaller-wiki-DevKit - Test Installation](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit#5-test-installation)

# 2. Install the Jekyll Gem


# 3. Install a Syntax Highlighter


# 4. Configure Markdown


# 5. Let Jekyll --watch


# 6. Run Jekyll without errors



