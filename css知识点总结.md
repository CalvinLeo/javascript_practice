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
