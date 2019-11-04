#### javaScript 知识点汇总

script标签注意点：

* 在一对script的标签中有错误的js代码，那么该错误的代码后面的js代码不会执行
* 如果第一对的script标签中有错误，不会影响后面的script标签中的js代码执行
* script的标签中可以些什么内容 type=“text/javascript”是标准写法或者写 Language=“JavaScript”都可以
* 但是，目前在我们的html页面中，type 和 Language 都可以省略，原因：html是遵循H5的标准
* 有可能出现这种情况：script标签中可能同时出现type 和 Language 的写法
* script 标签在页面中可以出现多对
* script 标签一般是在body的标签的最后的，有的时候会在head标签中，建议body的最后