/**
 * Created by qile on 2017/8/14.
 */

//Part 000000000
//字符串比较
console.log("A" > "a");
//答：false
console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
//答：1
console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
//答：0
console.log("A".localeCompare("B"));
//答：-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;
//答：“abcdef”

//Part 111111111 字符串提取
//String.prototype.charAt(pos);
//String.prototype.charCodeAt(pos);
//String.prototype.slice(start,end?);
//String.prototype.substr(start,length?)
//String.prototype.substring(start,end?);
//String.prototype.split(separator?,limit?);

//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);
//答：cdef
var str3 = "abcdef".slice(2,5);
//答：cde
var str4 = "abcdef".slice(-2);
//答：ef
var str5 = "abcdef".slice(2,-2);
//答：cd

var str6 = "abcdef".split("c");//返回数组
//答："ab"，"def"
var str7 = "abcdef".split("c",1);
//答："ab"
var str8 = "abcdef".split("c",2);
//答："def"

var str9 = "abcdef".charAt(2);
//答：a
var str10 = "abcdef".charCodeAt(3);
//答：99
var str11 = "abcdefabcdef".indexOf("d",1);
//答：2
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找
//答：6

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏
//答：abcdefghijklmn cdefg
var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏
//答：abcdefghijklmn cde



//Part 222222222 字符串变换
//String.prototype.trim( );
//String.prototype.concat(str1?,str2?);
//String.prototype.toLowerCase( );
//String.prototype.toLocaleLowerCase( );
//String.prototype.toUpperCase( );
//String.prototype.toLocaleUpperCase( );
var str16 = "aaa".concat("bbb");//返回字符串
//答：aaabbb
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
//答：abc def
var str18 = "abcDEF".toLowerCase();
//答：abcdef
var str19 = "abcDEF".toUpperCase();
//答：ABCDEF

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
//答：9
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");
//答：15

//Part 444444444 与正则相关的方法 详细内容参见正则表达式章节
//String.prototype.search(regexp);
//String.prototype.match(regexp);
//String.prototype.replace(regexp);

//其余部分参见《深入理解JS》第12章