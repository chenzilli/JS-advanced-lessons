/**
 * Created by qile on 2017/8/14.
 */
// Date 方法参考链接
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
//1525852967624

console.log((new Date()).getTime());
//0

console.log(Date.parse("1970-01-01"));//dateTimeString字符串转换成毫秒
//86400000

console.log(Date.parse("1970-01-02"));
//1506816000000

console.log(Date.UTC(2017,9,1));//将给定的日期转换成毫秒,解释为UTC 协调世界时间
//1978 10 6 25 8

//Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1525852967624

console.log(d.getTimezoneOffset());
//0
d.setDate(11);

console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1978 10 6 11 8

d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1999 5 4 3 8

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
// 15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23

console.log(d.toDateString(),"___",d.toLocaleDateString());
//Sat Apr 21 2012 ___ 2012/4/21

console.log(d.toJSON());
//2012-04-21T07:07:23.234Z

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date


VM68:2 1525852967624
VM68:4 0
VM68:5 
VM68:7 
VM68:12 
VM68:13 -480
VM68:15 
VM68:17 
VM68:21
VM68:22 
VM68:23 