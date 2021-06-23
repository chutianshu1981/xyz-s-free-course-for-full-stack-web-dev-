# wxml

## 1. 简介

WXML 全称是 WeiXin Markup Language，是小程序框架设计的一套标签语言，结合小程序的基础组件、事件系统，可以构建出页面的结构。

使用方式，完全类似 html

## 2. 属性

​标签可以拥有属性，属性提供了有关的 WXML元素更多信息。属性总是定义在开始标签中，除了一些特殊的属性外，其余属性的格式都是key="value" 的方式成对出现。需要注意的是，WXML中的属性是大小写敏感的

``` html
<!--一个带有属性的图片标签 -->
<image class="userinfo-avatar" src="./image/a.png" ></image>
```

## 3. 数据绑定



> 参考资料
>
> [小程序官方文档](https://developers.weixin.qq.com/ebook?action=get_post_info&docid=000ee2c29d4f805b0086a37a254c0a)