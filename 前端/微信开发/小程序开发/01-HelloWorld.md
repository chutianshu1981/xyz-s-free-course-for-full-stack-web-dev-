# 第一个小程序

> 本科配套代码

> [learning01](https://gitee.com/chutianshu1981/xyz-s-free-course-for-full-stack-web-dev/tree/main/%E5%89%8D%E7%AB%AF/%E5%BE%AE%E4%BF%A1%E5%BC%80%E5%8F%91/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%BC%80%E5%8F%91/codes/learning01)

## 1. 默认小程序模板

* miniprogram 文件夹：小程序代码主文件夹
* node_modules 文件夹: npm js 库
* typings 文件夹: typescript 库

### 1.1 app.xxx

应用程序本身，小程序入口对象

### 1.2 index.xxx

主页面

### 1.3 log.xxx

日志页

### 1.4 util.xxx

工具类

### 1.5 库

* node_modules : npm js 库
* typings : typescript 库

### 1.6 *.json

各种配置文件，后文中会一一讲解

## 2. 程序修改

TODO: 实现最简小程序 —— 程序打开，在页面中显示 “Hello world”，其余功能都不要

1. 删去不需要的 pages/log，utils 文件夹
2. 删去 app.xxx 中不需要的代码
3. 删去 index.xxx 中不需要的代码，并更改外观，只显示一句话

## 3. 要点简析

### 3.1 代码构成

代码构成参见小程序官方文档：[小程序代码构成](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html)
  
* .json 后缀的 [JSON 配置文件](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html#JSON-%E9%85%8D%E7%BD%AE)
* .wxml 后缀的 [WXML 模板文件](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html#WXML-%E6%A8%A1%E6%9D%BF) 
* .wxss 后缀的 [WXSS 样式文件](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html#WXSS-%E6%A0%B7%E5%BC%8F)
* .ts 后缀的 TypeScript 脚本文件
* .js 后缀的 [JS 脚本逻辑文件](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/code.html#JS-%E9%80%BB%E8%BE%91%E4%BA%A4%E4%BA%92)

### 3.2 ts js 关系

本课程假设先行课为 typescript ，在小程序中，ts 即 typescript 代码文件，在点击 “编译” 按钮后，会被编译成，最终在微信小程序中可以直接执行的，对应的 js 代码

可以这样理解

* ts：编程时的源代码（由我们程序员直接书写）
* js：运行时的可执行代码（由编译器通过同名 ts 编译生成）

> 注意：
>
> 1. 如果 ts 不能通过编译按钮自动编译为　js ， 则可以调出控制台，输入命令：  npm run tsc
>
> 这个对应的是在 package.json 中的 script 设置: 
``` json
"tsc": "node ./node_modules/typescript/lib/tsc.js"
```
> 2. 执行上面的命令需要 node_modules ，而一般的 .gitignore 中会排除该文件夹，将这个库文件夹上传到 git 上也不合适，如果项目中是从 git 上拉下来的，一般会缺少该文件夹，导致上面的命令不饿能运行
> 3. 解决方案，在 package.json 所在文件夹运行命令： npm install  ；会自动生成 node_modules 文件夹，并下载补全所需的前端库

### 3.3 程序运行

app 是小程序入口，本身并不包含外观页面

* app.wxss 可以理解为整个小程序级别的样式文件，范围最广，但优先级最低
* app.ts 主要来编写小程序的生命周期
* app.json 为小程序的配置文件

### 3.4 面向数据编程

类似于 vue 等前端框架，小程序也是面向数据编程，而非面向 dom 编程。学过 a/r/v (angular react vue) 三大框架的同学能够快速入手

### 3.5 数据绑定

index.wxml 视图页面文件

``` html
<label>{{helloStr}}</label>
```

index.ts 功能脚本文件

``` ts
Page({
  data: {
    helloStr:"Hello world!"
  },
})
```

### 3.6 动态交互

``` html
<label>{{helloStr}}</label>
<button bindtap="clickBtn">打招呼</button>
```

