/**
 * Created by qile on 2017/8/14.
 */

//对象类型 简述
var obj = {x:1,y:2};//obj的原型是Object.prototype,并且obj继承的属性和方法都源于这个原型
console.log(obj.__proto__ === Object.prototype);//答：ture
console.log(Object.prototype);

var arr = [1,2,3,4,5];//arr的原型是Array.prototype,并且arr继承的属性和方法都源于这个原型
console.log(arr.__proto__ === Array.prototype);//答：ture
console.log(Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);//答：ture

function foo() { //foo的原型是Function.prototype,并且foo继承的属性和方法都源于这个原型
    console.log("foo function!");
};
console.log(foo.__proto__ === Function.prototype);//答：ture
console.log(foo.__proto__.__proto__ === Object.prototype);//答：ture

console.log(obj instanceof Object);//答：ture
console.log(arr instanceof Object);//答：ture
console.log(foo instanceof Object);//答：ture
console.log(foo === window.foo);//答：ture

//所有对象都有属性，如何查看对象的属性，ES5中查看属性相关的几种方法
for(var k in obj){//只能遍历整个原型链上可遍历的属性
    console.log(k,obj[k]);
}
//答：x 1 y 2

console.log(Object.keys(obj));
//答：["x","y"]

console.log("x" in obj);//能够检查整个原型连上的属性，包括不可遍历的属性
//答：ture

//注意：以下实例只做了解，具体内容在对象属性特性章节和函数对象章节详细介绍
//函数也是对象，也不例外，函数也有若干属性 查看foo函数都有哪些属性
for(var k in foo){
    console.log(k,foo[k]);//没有自身属性，所以没有输出
}
console.log("call" in foo);//true
console.log("apply" in foo);//true
console.log("arguments" in foo);//true

