#### javaScript 知识点汇总

##### script标签注意点：

* 在一对script的标签中有错误的js代码，那么该错误的代码后面的js代码不会执行
* 如果第一对的script标签中有错误，不会影响后面的script标签中的js代码执行
* script的标签中可以些什么内容 type=“text/javascript”是标准写法或者写 Language=“JavaScript”都可以
* 但是，目前在我们的html页面中，type 和 Language 都可以省略，原因：html是遵循H5的标准
* 有可能出现这种情况：script标签中可能同时出现type 和 Language 的写法
* script 标签在页面中可以出现多对
* script 标签一般是在body的标签的最后的，有的时候会在head标签中，建议body的最后

##### 类型相关

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