/**
 * Created by qile on 2017/8/14.
 */
(function () { //立即执行表达式开始
//基本（原始）数据类型与引用（对象）类型的区别1 判等不同
var a1 = 100;
var b1 = 100;
console.log(a1 == b1);
//答：true
console.log(a1 === b1);
//答：true

//
var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);
//答：flase
console.log(a2 === b2);
//答：flase

//
var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);
//答：true
console.log(a3 === b3);
//答：true

b3 = new Number(200);
console.log(a3 === b3);
//答：false
/*
//思考
var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4);//思考：是b4转换了，还是a4转换了 a4 true
console.log(a4 === b4);  
//答：false

//思考
var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);
//答：false
console.log(a5.x === a5.x);//对象属性如果是基本类型内存分配在哪，比较时是值比较还是引用比较
//答：true
*/
}());//立即执行表达式结束