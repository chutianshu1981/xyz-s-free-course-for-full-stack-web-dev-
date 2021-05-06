# 02 git常用设置

## 1. 设置、取消全局代理

``` shell

# 最后的 url 替换成你的代理服务器地址
# 设置 https 的代理
git config --global https.proxy http://127.0.0.1:1080
# 设置 http 的代理
git config --global https.proxy https://127.0.0.1:1080

# 取消 http 的代理
git config --global --unset http.proxy
# 取消 https 的代理
git config --global --unset https.proxy

```

## 2. 针对 github

``` shell
# 只针对 github.com 设置全局代理，最后的 url 换成自己的代理服务器地址
git config --global http.https://github.com.proxy 'socks5://127.0.0.1:10808'
# 取消代理
git config --global --unset http.https://github.com.proxy
```