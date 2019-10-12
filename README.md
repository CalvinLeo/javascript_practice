# javascript_practice

> 主要用于前端的练习

### 笔记、知识点总结

#### HTML部分：
块级元素：\<div>、\<h>、\<p> 独占一行、有宽高

行内元素：\<span>、\<a>、\<strong>、\<b>、\<em>、\<i>、\<del> 宽高无效，默认宽高是内容本身的高度

行内块元素：\<img>、\<input>、\<td> 可以设置边框和宽高

#### CSS部分：
**样式：** 选择器 { 属性 ： 值}

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
