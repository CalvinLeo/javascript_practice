<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-13 21:38:27
 * @LastEditTime: 2019-10-13 22:12:20
 * @LastEditors: Please set LastEditors
 -->
# CSS知识点总结

### 样式：

选择器 { 属性 ： 值}

**标签选择器:** 标签 { 属性： 值 }

```
a {
    color: #fff;
}

div {
    width: 100px;
    height: 100px;
}
```

**类选择器：** . + "类名"  { 属性： 值 }

```
.nav {
    margin: 0;
    padding: 0;
}
```

**id 选择器：** # + "类名"  { 属性： 值 }

```
#wrap {
    margin: 0;
    padding: 0;
}
```

**全局选择器：** * { 属性： 值 }

```
* {
    margin: 0;
    padding: 0;
}
```

**后代选择器：** 空格隔开，div p { 属性：值 }; 意思是div中的所有 p 标签

```
div p {
    margin: 0;
    padding: 0;
}
```

**子选择器：**  > 隔开父子元素， 父 > 子 { 属性：值 }
```
div>p {
    margin: 0;
    padding: 0;
}

<div> 
    <p></p>
    <p></p>
    <p></p>
</div>
```
**兄弟选择器：** ~ 隔开兄弟元素，兄弟 ~ 兄弟 { 属性： 值 } 
```
.first~p {
    margin: 0;
    padding: 0;
}

<div> 
    <p class="first"></p>
    <p></p>
    <p></p>
</div>
```
**群选择器：** ，分隔 选择器1, 选择器2 { 属性： 值 }
```
.first, span {
    margin: 0;
    padding: 0;
}

<div>
    <p class="first"></p>
    <span></span>
    <p></p>
</div>
```
**伪类选择器：** : + 属性 { 属性： 值 } 
```
a:hover {
    color: blue;
}
```

#### 样式优先级

 1. 权重相同 就近原则
 2. 权重会叠加 div p 比 p 优先级高
 3. 类权重 大于 一般标签
 4. 内联样式 > 以上
 5. 继承关系中，只要自己标签有样式，父标签的权重再高也无用
 6. ！importmant 权重最高

#### 字体图标

>本质是字体，可以任意改变大小、颜色、透明度等。把所有的图标都打包成字体库，减少请求。具有矢量性，放大时可以保证清晰度。几乎支持所有的浏览器，移动端设备必备良药

**网址：**

* [icomoon字体][1]
* [阿里 icon font][2] 
* [fontello字体][3] 

[1]:https://icomoon.io/
[2]:http://www.iconfont.cn
[3]:http://fontello.com
**使用**

```
<style>
    @font-face {
        font-family: 'icomoon'; 
        src:url('fonts/icomoon.eot?mcsslk');
        src:url('fonts/icomoon.eot?mcsslk#iefix') format('embedded-opentype'),
  	    url('fonts/icomoon.ttf?mcsslk') format('truetype'),
        url('fonts/icomoon.woff?mcsslk') format('woff'),
        url('fonts/icomoon.svg?mcsslk#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    span {
        font-family: "icomoon";
    }
</style>
```
#### float 布局

> float 浮动，浮动布局的设计初衷是实现文字环绕图片的效果。会使文件脱离文档流，漂浮于上方，故称为浮动。

使用场景：文字环绕图片、一列列，一行行相同的item。

特性：

* 让元素浮起来，产生其他元素对其缠绕的效果
* 拥有块级元素的属性，可以使用width，height等属性设置
* 紧贴非浮动元素的边缘

使用过程中遇到的问题：

* 父视图没有设置高度属性，内容视图如果设置了浮动，那么父视图会变成很小的一部分，或者0
* 如果float元素没有设置好宽高，会导致兄弟元素展示不下，采取下移动的方式展示

解决：比较常见的问题是 父视图高度随着 子视图的浮动而改变，所以清除浮动可以解决这个高度问题。1、父视图 overflow: hidden 2、父视图浮动 3、所有浮动视图下方设置 clear:both 4、clearfix.

#### 过渡

> transition 要过渡的属性 花费时间 运动曲线 开始时间； 如果有多组属性变化，用逗号隔开

transition 简写属性，用于在一个属性中设置四个过渡属性
transition-property 规定应用过渡的 CSS 属性的名称
transition-duration 定义过渡效果花费的时间 默认是0
transition-timing-function 规定过渡效果的曲线，默认是"ease"
transition-delay 规定过渡效果何时开始 默认是0

#### 移动与缩放

> transform 变形

transform translate 2D 模型的平移
transform scale（1， 1） 水平缩放1倍，竖直缩放1倍
transform rotate(45deg); 旋转45度

##### 背景图的缩放

background-size: 缩放模式，cover 等比例缩放， contain 自动缩放比例，宽或者高到了就停止。

#### 浏览器前缀

```
-webkit- chrome
-moz- hotfox
-ms- IE
-o- Opera
```