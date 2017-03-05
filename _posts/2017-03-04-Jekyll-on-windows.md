---
layout          : post
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

```sh
> ruby dk.rb install
[INFO] Updating convenience notice gem override for 'C:/Ruby22'
[INFO] Installing 'C:/Ruby22/lib/ruby/site_ruby/devkit.rb'
```

- 一切顺利的话，Ruby 环境以及配置好了。

> 验证安装是否成功可参考：[rubyinstaller-wiki-DevKit - Test Installation](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit#5-test-installation)

# 2. Install the Jekyll Gem

```sh
> gem install jekyll bundler
```

执行上面命令将安装下列 Gem 包：

- `safe_yaml-1.0.4`
- `rouge-1.11.1`
- `forwardable-extended-2.6.0`
- `pathutil-0.14.0`
- `mercenary-0.3.6`
- `liquid-3.0.6`
- `kramdown-1.13.2`
- `ffi-1.9.18`
- `rb-inotify-0.9.8`
- `rb-fsevent-0.9.8`
- `listen-3.0.8`
- `jekyll-watch-1.5.0`
- `sass-3.4.23`
- `jekyll-sass-converter-1.5.0`
- `colorator-1.1.0`
- `public_suffix-2.0.5`
- `addressable-2.5.0`
- `jekyll-3.4.1`
- `bundler-1.14.6`

安装好后，就可以使用 Jekyll 命令工具构建站点了。

> 参考 : https://jekyllrb.com/docs/quickstart/

```sh
> jekyll new myblog

> cd myblog

> jekyll build

> jekyll serve
```

在 Windows 平台，可能出现各种问题，下面列出一些常见问题和解决方法。


使用下面命令可以安装一些现有的 Jekyll 主题 Gem 包。

```sh
> gem install <jekyll-theme-name>
```

# 3. Install a Syntax Highlighter


> GitHub Pages 默认使用 [Rouge] 实现 Jekyll's 语法高亮。
>
> From: [Using syntax highlighting on GitHub Pages](https://help.github.com/articles/using-syntax-highlighting-on-github-pages/)

[Rouge] Gem 在安装 Jekyll Gem 时已经默认安装，使用下面命令单独安装。

```sh
gem install rouge
```

添加到 `_config.yml` 配置文件

```yaml
highlighter: rouge
```

Done.

[Rouge]: <http://rouge.jneen.net/>

# 4. Configure Markdown

- Jekyll v3.x 使用 [kramdown] 作为默认的 Markdown 引擎。
- GitHub Pages 只支持 [kramdown] 引擎。

安装 

```sh
> gem install markdown
```

执行上面命令将安装下列 Gem 包

- `concurrent-ruby-1.0.5`
- `i18n-0.8.1`
- `activesupport-5.0.2`
- `rubyzip-1.2.1`
- `logutils-0.6.1`
- `props-1.1.2`
- `textutils-1.4.0`
- `markdown-1.2.0`

编辑 `_config.yml` 配置文件，指定 Markdown 引擎。

```yaml
markdown: kramdown
```

[kramdown]: <http://kramdown.gettalong.org/>

# 5. Let Jekyll --watch

Jekyll 带有一个内置的开发服务器，允许你在本地浏览器预览生成的站点。

运行下面命令将开启服务器，可通过地址 `http://localhost:4000/` 访问。

```sh
> jekyll serve
```

在 Windows 环境运行时，会提示缺少 `wdm` Gem 包。

```sh
> jekyll serve
...
Please add the following to your Gemfile to avoid polling for changes:
    gem 'wdm', '>= 0.1.0' if Gem.win_platform?
...
```
### 安装 `wdm` Gem 包

```sh
> gem install wdm
```

修改 Gemfile 文件，依照执行 `jekyll serve` 命令的错误提示，在 Gemfile 文件末尾追加下面代码，这样项目在其他电脑上打开时，将自动识别并安装相应的 Gem 包。

```sh
gem 'wdm', '~> 0.1.0' if Gem.win_platform?
```

### 安装 `listen` Gem 包

```sh
> gem install listen
```

执行上面命令将安装下列 Gem 包。

- ruby_dep-1.5.0
- listen-3.1.5



# 6. Run Jekyll without errors

## 编码 Encoding

> 如果你使用 UTF-8 编码，确保在你的文件中一定不要出现 `BOM` 头字符，否则你会碰上非常糟糕的事情，尤其当你在 Windows 上使用 Jekyll 的时候。
>
> From: https://jekyllrb.com/docs/windows/#encoding

自 Jekyll v3.1.1 版本 [BOM (Byte order mark)](https://en.wikipedia.org/wiki/Byte_order_mark) 将被支持。需要做的，只需在 `_config.yml` 配置文件中显式的指定即可。

```yaml
encoding: bom|utf-8
```

## 端口号 Port

在启动 Jekyll 内置服务器时，默认使用 `4000` 端口，可能出现下面错误信息。

```
> jekyll sevse
...
jekyll 3.4.1 | Error:  Permission denied - bind(2) for 127.0.0.1:4000
```

拒绝访问 `4000` 端口。

解决方法，只需修改 `_config.yml` 配置文件，重新指定一个端口号即可。

```yaml
# Local Server Port
port: 8089
```

## 构建和访问

完成上面操作，应该就可以正常执行下面命令了。

```sh
> jekyll build
> jekyll build --watch
> jekyll build -w
> jekyll serve
> jekyll serve --no-watch
```



# 参考

- [Jekyll on Windows](http://jekyllrb.com/docs/windows/)
