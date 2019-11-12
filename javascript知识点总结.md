# javaScript知识点汇总

> JavaScript 是一门脚本语言、解释型语言、动态类型语言、基于对象的语言、弱类型语言

## script标签注意点

* 在一对script的标签中有错误的js代码，那么该错误的代码后面的js代码不会执行
* 如果第一对的script标签中有错误，不会影响后面的script标签中的js代码执行
* script的标签中可以些什么内容 type=“text/javascript”是标准写法或者写 Language=“JavaScript”都可以
* 但是，目前在我们的html页面中，type 和 Language 都可以省略，原因：html是遵循H5的标准
* 有可能出现这种情况：script标签中可能同时出现type 和 Language 的写法
* script 标签在页面中可以出现多对
* script 标签一般是在body的标签的最后的，有的时候会在head标签中，建议body的最后

## 类型相关

* 基础数据类型有Number、String、Boolean、object、function
* 对象类型有 Object、Date、Array
* 2个不包含任何值的数据类型 null、undefined
* 可以使用 **typeof** 操作符来查看 JavaScript 变量的数据类型
* **constructor** 属性返回所有 JavaScript 变量的构造函数

*类型转换*

1、其他类型转数字类型有三种方式：

1. parseInt(); // 转整数
    * parseInt(10) = 10;
    * parseInt(10sdfaf) = 10;
    * parseInt(g10) = NaN

2. parseFloat(); // 转小数
    * parseFloat(10) = 10
    * parseFloat(10sdfaf) = 10;
    * parseFloat(g10) = NaN;
    * parseFloat(10.98) = 10.98;

3. Number(); // 转数字
    * Number(10) = 10
    * Number(10sdfaf) = NaN;
    * Number(g10) = NaN;
    * Number(10.98) = 10.98;

想要转整数 parseInt(), 想要转小数 parseFloat(), 想要转数字 Number().

2、转String类型的相关操作

1. .toString(); // 如果变量有意义使用 toString()
2. String();    // 如果变量没有意义使用 String() 更安全

3、其他类型转 boolean 类型

1. boolean();

### 变量作用域相关

* 作用域：变量的使用范围
* 全局作用域：全局变量在任何位置都可以使用的范围
* 局部作用域：局部变量只能在某个地方使用---函数内
* 作用域链： 在一个函数中使用一个变量，现在该函数中搜索这个变量，找到了则只用，找不到则继续向外面找这个变量，找到则使用，一直找到全局作用域，找不到则是undefined
* 全局变量：只要在函数外声明的变量都可以看成或是理解成全局变量
* 局部变量：在函数中定义的变量
* 预解析：在执行代码之前做的事情
* 变量的声明和函数的声明被提前了，变量和函数的声明会提升到当前所在的作用域的最上面
* 函数中的变量声明，会提升到该函数的作用域的最上面
* 如果有多对的script标签都有相同名字的函数，预解析的时候是分段的，互不影响的

### 对象，方法相关

> JS中是没有类的，关于实例方法和静态方法的区别

* 实例方法----必须要通过new的方式创建的对象来调用的方法
* 静态方法----直接通过大写的构造函数名字调用的方法（直接通过大写的对象名字调用）

