# 安装配置 nushell

> nushell 系列01

> nushell 是一个功能强大而且开源的 shell ，用 rust 开发。本文用来介绍如何在 Windows wsl2 的 Linux（类 ubuntu）中，安装配置 nushell 的通用方法

## 1. 简介

NuShell 是使用 Rust 语言编写的跨平台、开源 Shell 程序，截止发文时，Github Star 14.4 k。

个人觉得其最突出的特色：

* 跨平台，windows/linux/mac 都可用
* 命令返回结果结构化，一般都可以表示为二维表；
* 命令可以方便地结合类 sql 语句，学习代价很低

![demo gif](..\../../../imgs/nushell-autocomplete5.gif)

## 2. 安装

> 我的安装环境是 Windows wsl2 的 kali linux 中，其他的 linux 可参照本文介绍的方法，但要注意，不同的环境安装位置和配置方法都会稍有不同，最好参照[官方文档](https://www.nushell.sh/zh-cn/book/installation.html)

有几种安装方式，我推荐使用 Rust 的 cargo 安装（可以顺便安装 rust 开发环境），其他方式请自行查看文档

``` shell
# 1. 安装依赖
apt install pkg-config libssl-dev libxcb-composite0-dev libx11-dev gcc cmake
# 2. 安装 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# 3. 使用 cargo 安装 nu
cargo install nu
```

## 3. 配置 NuShell 为当前用户默认shell

两种方式，一种使用 chsh 命令，另一种直接更改 /etc/passwd，在此我使用第一种

> 注意！
>
> shell 如果设置错误，会导致 linux 系统无法启动，一定要注意！在 wsl 系统中还好更改，在文末介绍。

``` shell
chsh
# 接下来输入密码，并填入 nu 的绝对路径，如果按照上面的方式安装，路径应该为：
# /home/登录用户名/.cargo/bin/nu
```

如果设置错误，导致无法登录 Linux，可以按下面步骤操作：
1. 在 windows Teminal 中，打开对应 linux 的设置，在命令行后添加参数： -e sudo vim /etc/passwd  我用的是 kali ，所以我更改后的完整命令行是：wsl.exe -d kali-Linux  -e sudo vim /etc/passwd
2. 保存后，重新启动 wsl linux，将你的 linux 当前用户 shell 配置改回默认的 /bin/bash 即可

