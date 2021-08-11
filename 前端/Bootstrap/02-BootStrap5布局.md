# BootStrap 5 布局

## 1. 容器

> [sass 文档](https://www.sass.hk/docs/)

容器 可以根据断点自动调整宽度

## 2. 网格

* 横轴为 row
* 纵向为 col

网格 col 也可以根据断点自动调整宽度

bootstrap 的网格系统，会把一行等分为 12 列，不论多宽的屏幕，都是按照12列来等分，一般 col 样式设定时，会有下面固定格式  
 col-断点关键字-所占列宽数 比如 col-lg-10

``` HTML5
<div class="row">
    <div class="col-lg-10">第一列</div>
    <div class="col-lg-2">第二列</div>
</div>
```