/**
 * Created by qile on 2017/8/14.
 */
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出什么？//Mike
person.name = "Lucy";
console.log(person.name);//输出什么？//Mike
delete person.name;
console.log(person.name);//输出什么？//Mike

//将 writable:false改成 writable:true
//输出结果：Mike Lucy Lucy


//将configurable:false改成configurable:true
//输出结果：Mike Mike undefined


//将writable:false和configurable:false都改为true
//输出结果：Mike Lucy