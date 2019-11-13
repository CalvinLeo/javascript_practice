/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-11-11 21:38:17
 * @LastEditTime: 2019-11-11 21:57:24
 * @LastEditors: Please set LastEditors
 */
function getDate(dt) {
    // var date = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1 < 10 ? "0" + dt.getMonth() + 1 : dt.getMonth() + 1;
    var day = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
    var hour = dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours();
    var minute = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();
    var second = dt.getSeconds() < 10 ? "0" + dt.getSeconds() : dt.getSeconds();
    return year + "年" + month + "月" + day + "日" + hour + ":" + minute + ":" + second;
}

function my$(id) {
    return document.getElementById(id);
}