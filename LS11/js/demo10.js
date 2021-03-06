/**
 * Created by qile on 2017/8/14.
 */

/*
//变量共享问题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
//console.log("i：",i);
*/
/*
Wed Apr 11 2018 21:33:05 GMT+0800 (中国标准时间) 3
Wed Apr 11 2018 21:33:06 GMT+0800 (中国标准时间) 3
Wed Apr 11 2018 21:33:07 GMT+0800 (中国标准时间) 3
i： 3
*/


//通过IIFE解决变量共享问题
for (var i = 0; i < 3; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
/*
Wed Apr 11 2018 21:33:56 GMT+0800 (中国标准时间) 0
Wed Apr 11 2018 21:33:57 GMT+0800 (中国标准时间) 1
Wed Apr 11 2018 21:33:58 GMT+0800 (中国标准时间) 2
*/