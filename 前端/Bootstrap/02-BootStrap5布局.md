# BootStrap 5 布局

断点：BootStrap 会自适应浏览器分辨率（浏览器显示区域的宽度），根据不同的分辨率，来进行布局的更改，一般就是到特定设置的宽度位置，更改布局宽度。断点，就是宽度要进行变换的指定位置


## 1. 容器

> [sass 文档](https://www.sass.hk/docs/)

容器 可以根据断点自动调整宽度

## 2. 网格

* 横轴为 row
* 纵向为 col

* 网格 col 也可以根据断点自动调整宽度

* bootstrap 的网格系统，会把一行等分为 12 列，不论多宽的屏幕，都是按照12列来等分，一般 col 样式设定时，会有下面固定格式  
 col-断点关键字-所占列宽数 比如 col-lg-10

* 网格到了断点位置时，比如 col-lg ，对应的是 992px ，当浏览器 < 992px ，就会自动触发布局更改，原先拍在同一行中的列，会各占一行，堆叠在一起，由横向布局，转换为纵向布局

``` HTML5
<div class="row">
    <div class="col-lg-10">第一列</div>
    <div class="col-lg-2">第二列</div>
</div>
```

## 3. 列

javascript 基本语法 -> ES6 -> typescript

>参考资料
>* [css3 flex box 介绍](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
>* [css3 flex box 实例](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
>* [阮一峰 ES6 教程](https://es6.ruanyifeng.com/)