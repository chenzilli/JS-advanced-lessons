/**
 * Created by qile on 2017/8/14.
 */
//使用var可能存在变量共享问题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
//console.log("i：",i);


//使用let可有效避免变量共享问题
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
/*
Sun Jun 10 2018 23:42:15 GMT+0800 (中国标准时间) 3
Sun Jun 10 2018 23:42:15 GMT+0800 (中国标准时间) 0
Sun Jun 10 2018 23:42:16 GMT+0800 (中国标准时间) 3
Sun Jun 10 2018 23:42:16 GMT+0800 (中国标准时间) 1
Sun Jun 10 2018 23:42:17 GMT+0800 (中国标准时间) 3
Sun Jun 10 2018 23:42:17 GMT+0800 (中国标准时间) 2
*/
