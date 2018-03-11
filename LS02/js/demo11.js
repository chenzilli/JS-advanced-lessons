/**
 * Created by qile on 2017/8/14.
 */
//Part 1
console.log(Boolean(undefined));
//答：false
console.log(Boolean(null));
//答：false
console.log(Boolean(0));
//答：false
console.log(Boolean(NaN));
//答：false
console.log(Boolean(1));
//答：true
console.log(Boolean(""));
//答：false
console.log(Boolean("abc"));
//答：true
console.log(Boolean({}));
//答：true

if(new Boolean(false)){
    console.log("执行");
    //答：执行
}

//Part 2
console.log(Number(undefined));
//答：NaN
console.log(Number(null));
//答：0
console.log(Number(true));
//答：1
console.log(Number(false));
//答：0
console.log(Number(""));
//答：0
console.log(Number("abc"));
//答：NaN
console.log(Number("123.345xx"));
//答：NaN
console.log(Number("32343,345xx"));
//答：NaN
console.log(Number({x:1,y:2}));
//答：NaN

console.log(parseFloat("123.345xx"));
//答：123.345
console.log(parseFloat("32343,345xx"));
//答：32343
console.log(parseInt("123.345xx"));
//答：123
console.log(parseInt("32343,345xx"));
//答：32343

//Part 3
console.log(String(undefined));
//答：undefine
console.log(String(null));
//答：null
console.log(String(true));
//答：true
console.log(String(false));
//答：false
console.log(String(0));
//答：0
console.log(String(234));
//答：234
console.log(String({x:1,y:2}));
//答：[object Object]