<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-11-21 22:06:00
 * @LastEditTime: 2019-11-21 22:25:09
 * @LastEditors: Please set LastEditors
 -->

# DOM知识点

### 基本

#### 节点

节点：页面中所有的内容都是节点（标签，属性，文本：文字，空格，换行）

文档：document---页面中的顶级对象

元素：页面中的所有的标签， 标签---元素---对象 （通过DOM的方式来获取这个标签，得到了这个对象，此时这个对象叫做DOM对象）

节点的属性：作用：为了将来获取更多的节点，得到节点中的标签（元素），识别节点中的元素

节点的类型：1.标签，2，属性节点，3.文本节点

nodeType: 节点的类型，1---标签节点，2---属性节点，3---文本节点
nodeName: 标签节点---大写的标签名字，属性节点---小写的属性名字，文本节点
nodeValue: 标签---null，属性---属性的值，文本---文本内容

##### 获取节点
```
// 获取当前节点的父级节点
getElementById("id").parentNode;
// 获取当前节点的父级元素
getElementById("id").parentElement;
// 获取当前节点的子级节点
getElementById("id").childNode;
// 获取当前节点的子级元素
getElementById("id").children;
// 获取当前节点的第一个子级节点
getElementById("id").firstChild;
// 获取当前节点的第一个子级元素
getElementById("id").firstElementChild;
// 获取当前节点的最后一个子级节点
getElementById("id").lastChild;
// 获取当前节点的最后一个子级元素
getElementById("id").lastElementChild;
// 获取当前节点的前一个兄弟节点
getElementById("id").previousSibling;
// 获取当前节点的前一个兄弟元素
getElementById("id").previousElementSibling;
// 获取当前节点的后一个兄弟节点
getElementById("id").nextSibling;
// 获取当前节点的后一个兄弟元素
getElementById("id").nextElementSibling;
```

##### 元素的创建

三种元素创建的方式

1. document.write("标签代码及内容");
2. 父级对象.innerHTML = "标签代码及内容";
3. document.createElement("标签名字")
