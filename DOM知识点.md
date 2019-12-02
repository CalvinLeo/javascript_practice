<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-11-21 22:06:00
 * @LastEditTime: 2019-12-02 21:58:55
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

##### 绑定事件
> addEventListener() 与 attachEvent() 相同点：都可以为元素绑定事件

不同点:
1. 方法名不一样
2. 参数个数不同 addEventListener 三个参数，attachEvent两个参数
3. addEventListener 谷歌，火狐，IE11支持，IE8不支持
    attachEvent 谷歌火狐不支持，IE11不支持，IE8支持
4. this 不同，addEventListener 中的 this 是当前绑定事件的对象 
    attachEvent中的 this 是window
5. addEventListener 中事件的类型（事件的名字）没有on 
    attachEvent 中的事件类型（事件的名字）有on

##### 解绑事件
> 注意：用什么方式绑定事件，就应该用对应的方式解绑事件

1. 解绑事件
    对象.on事件名字=事件处理函数 ---> 绑定事件;
    对象.on事件名字=null;

2. 解绑事件
    对象.addEventListener("没有on的事件类型，命名函数，false");
    对象.removeEventListener("没有on的事件类型，函数名字，false");

3. 解绑事件
    对象.attachEvent("on事件类型",命名函数);
    对象.detachEvent("on事件类型",命名函数);

##### 事件三阶段

1. 事件捕获阶段: 从外向里
2. 事件目标阶段: 从目标开始
3. 事件冒泡阶段: 从里向外

addEventListener("没有on的事件类型", 事件处理函数, 控制事件阶段的)
事件触发的过程中，可能会触发事件冒泡的效果，为了阻止事件冒泡

window.event.cancelBubble=true; 谷歌，IE8支持，火狐不支持
window.event 就是一个对象，是IE中的标准。
e.stopPropagation()阻止事件冒泡。
window.event 和 e都是事件参数对象，一个是IE的标准，一个是火狐的标准

addEventListener中第三个参数是控制事件阶段的，通过e.eventPhase这个属性可以知道
当前事件是什么阶段。如果这个属性的值是 1、捕获阶段，2、目标阶段，3、冒泡阶段

##### 获取元素的宽高等参数

offset系列：

offsetLeft: 距离左边的距离
offsetTop: 距离右边的距离
offsetHeight: 高度带边框
offsetWidth: 宽度带边框