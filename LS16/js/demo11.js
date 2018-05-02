/**
 * Created by qile on 2017/8/14.
 */
//Part 1 constructor属性的应用

// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);
//Foo

// 2 创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
//Constr {name: "Mike"}
console.log(y instanceof Constr);
//true

// 3 constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor);
/*
ƒ Person(area){
    this.type = 'person';
    this.area = area;
}
*/
 //function person()
console.log(Father.prototype.constructor);
 //function person()
 /*
 ƒ Person(area){
    this.type = 'person';
    this.area = area;
}
*/
Father.prototype.constructor = Father;     //修正
console.log(Father.prototype.constructor); 
/*
ƒ (age){
    this.age = age;
}
*/
//function father()
var one = new Father(25);


//Part2 公有属性、私有属性、特权方法
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);
//123
// console.log(a.privateId);
a.getId();
//123 456


//补充：Shape 多态

/*
//测试
function A(){
    this.a = 10;
    this.af = function(){console.log(this.a);}
}
var a = new A();

function B(){
    A.call(this);
    this.b = 20;
    this.bf = function(){console.log(this.a);}
}
B.prototype.__proto__ = A.prototype;
var b = new B();
*/