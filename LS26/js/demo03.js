/**
 * Created by qile on 2017/8/14.
 */
//发布订阅 实例/////////////////////
// 案例 一
var Subject = function(){
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i=0;i<_observer.length;i++){
            _observer[i].update(msg);
        }
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};
//i am a,and i get the message: hello
var sub = new Subject()
sub.attach(new Observer('a'));
//i am b,and i get the message: hello
sub.attach(new Observer('b'));
//6
sub.notify('hello');
//i am c,and i get the message: world!

//sub.print();

setTimeout(function(){
    var c = new Observer('c');
    sub.detach();
    sub.attach(c);
    c.update('world!');
    //sub.print();
});

//Promise 参见ES6部分///////////////////////
