/**
 * Created by qile on 2017/8/14.
 */
//类型检测 typeof 一般用于值类型检测
console.log(typeof 123);
//答：number
console.log(typeof true);
//答：boolean
console.log(typeof "abc");
//答：string
console.log(typeof null);
//答：object
console.log(typeof undefined);
//答：undefind
console.log(typeof {name:"Mike",age:20});
//答：oject
/*
//课外思考
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);//String、Boolean
答：function
console.log(typeof Math);
console.log(typeof JSON);
答：object
*/

//类型检测 instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);
//答：true
var b = [12,34,{},""];
console.log(b instanceof Array);//思考console.log(b instanceof Object);
//答：true
var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);//思考console.log(p1 instanceof Object);
//答：true
