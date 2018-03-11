//数据类型
var num = 1;
var str = "some string";
var b = true;
var n = null;
var u = undefined;//如果没赋值的话，是什么情况
//答：undefined

var arr = ["apple", "pear", "banana"];
var func = function(){
    return "this a function";
};
var obj = new Object();
obj.name = "test";

console.log("\n");
console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof b); //boolean
console.log(typeof n); //这里返回的是object，这是JS语言的特别之处
console.log(typeof u); //undefined
console.log("\n");
console.log(typeof arr); //object
console.log(typeof func); //function
console.log(typeof obj); //object

//思考
console.log(typeof Number); //答：function
console.log(typeof String); //答：function
console.log(typeof Boolean); //答：function
console.log(typeof Object); //答：function
console.log(typeof Array); //答：function
console.log(typeof Function); //答：function
console.log(typeof RegExp); //答：function
console.log(typeof Error); //答：function
console.log(typeof Math); //答：function
console.log(typeof JSON);//答：function

//==、=== 回顾 值类型与引用类型回顾 不同类型变量 判等时的区别
//判等步骤
//1.看是==还是===

//2.如果是===则先看类型
// 类型不同肯定false
// 类型相同（如果是基本类型：判断值是否相等；  如果是引用类型：判断引用是否是同一个引用）

//3.如果是==则先看类型
// 先试着进行类型转换
// 转换后（如果是基本类型：判断值是否相等；   如果是引用类型：判断引用是否是同一个引用）
var a1 = 2;
var a2 = "2";
console.log(a1==a2);//true or false 原理是什么？？？？？
//答：true,“=”为相等运算符，如果一个值是对象，另一个值是数字或字符串，则将对象转换为原始值，然后再进行比较。

console.log(a1===a2);
/*答：false,严格等于（===）
1、首先判断他们的类型，如果两个值类型不相同，则它们不相等，直接返回 false。   
2、如果两个值都是null或者都是undefined，则它们才相等。
3、如果两个值都是布尔值true或false，则它们相等。
4、如果其中一个值是NaN，或者两个两个值都是NaN，则它们不相等。NaN和其他任何值都是不相等的，包括它本身！！！通过x!==x来判断x是否为NaN，只有在x为NaN的时候，这个表达式的值才为true。
5、如果两个值为数字，且数值相等，则它们相等。如果一个为0，另一个为-0，则它们同样相等。
6、如果两个值为字符串，且所含的对应位上的16位数完全相等，则它们相等。如果它们的长度或内容不同，则它们不等。两个字符串可能含义完全一样且所显示出手字符也一样，但具有不同编码的16位值。JavaScript并不对Unicode进行标准化的转换，因此像这样的字符串通过"==="和"=="运算符的比较结果也不相等。
7、如果两个引用值同一个对象、数组或函数，则它们是相等的。如果指向不同的对象，则它们是不等的。尽管两个对象具有完全一样的属性。
*/
var b1 = {};
var b2 = {};
console.log(b1==b2);//true or false 原理是什么？？？？？
//答：false，引用类型与地址值不同
console.log(b1===b2);//true or false
//答：false
console.log(b1===b1);//true or false
//答：true 

//进一步理解
var c1 = 23;
var c2 = new Number(23);
console.log(c1==c2);//true or false 原理是什么？？？？？
//答：true 
console.log(c1===c2);//true or false
//答：false

//包装对象
var str2 = "abc";
console.log(str2.length);
str2.length = 1;
console.log(str2);//原始类型变量的不可变性，指的是包装对象的改变并不影响原始类型的变量
//答：3,abc

//怎么理解JS中都是对象这句话
//访问基本类型的变量属性时，会创建临时包装对象，访问的是该包装对象的属性
//另外改变此临时包装对象的属性，并不会影原变量（原始类型变量的不可变性）

//undefined与null 未确定的值、空引用

//typeof 与 instance
//typeof 常用于检测基本类型的变量
//instance 常用于检测引用类型的变量 instance左侧期望是一个对象，右侧期望是一个类型
console.log({}instanceof Object);
//答：true
console.log([]instanceof Object);
//答：true
console.log([]instanceof Array);
//答：true
