/**
 * Created by qile on 2017/8/14.
 */
//变量共享问题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
console.log("i：",i);
//i:3

//通过IIFE解决变量共享问题
for (var i = 0; i < 3; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
/*Sun Jun 10 2018 23:40:12 GMT+0800 (中国标准时间) 3
Sun Jun 10 2018 23:40:12 GMT+0800 (中国标准时间) 0
Sun Jun 10 2018 23:40:13 GMT+0800 (中国标准时间) 3
Sun Jun 10 2018 23:40:13 GMT+0800 (中国标准时间) 1
Sun Jun 10 2018 23:40:14 GMT+0800 (中国标准时间) 3
Sun Jun 10 2018 23:40:14 GMT+0800 (中国标准时间) 2
userId =  234
*/