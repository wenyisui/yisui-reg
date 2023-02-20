// console.log(new Array('10'));  // ['10']
// console.log(new Array(10));    // (10) [empty × 10]

// match String.prototype.match();
// exec  RegExp.prototype.exec();

// 正则表达式的两种写法
// var newReg = new RegExp(/\d/, 'gim'); // 构造函数的写法
// var reg = /\d/g  // 字面量: pend 的写法

// match
// var str = 'dsfdgfdag423543534gfgsbsd';

// console.log(str.match(/\d/g));  // ['4', '2', '3', '5', '4', '3', '5', '3', '4']
// 数组：
// 不加g，返回单个值的数组
// g，返回所有值的数组;

// exec
// var str = 'cat,bat,sat,fat';

// var reg = /.at/g;
// var match1 = reg.exec(str);
// var match2 = reg.exec(str);
// var match3 = reg.exec(str);
// var match4 = reg.exec(str);
// console.log(match1);
// console.log(match2);
// console.log(match3);
// console.log(match4);
/**
 * ['cat', index: 0, input: 'cat,bat,sat,fat', groups: undefined]
 * ['bat', index: 4, input: 'cat,bat,sat,fat', groups: undefined]
 * ['sat', index: 8, input: 'cat,bat,sat,fat', groups: undefined]
 * ['fat', index: 12, input: 'cat,bat,sat,fat', groups: undefined]
 */
// 不加g，返回单个值的数组;
// 加g，记忆功能;


// charAt charCodeAt fromcharCode;  深层次理解
// 
// var str = 'a';
// console.log(str.charAt(0)); //0  对象的第0个字符是什么
// console.log(str.charCodeAt()); // 97 对象(a)的字符编码在哪里 a所对应的字符编码在哪里

// console.log(String.fromCharCode(97));  // a  函数调用，功能性方法 字符

//'A-Z'
// for(var i =0, res = ''; i < 26; i ++) {
//     res += String.fromCharCode(65 + i)
// }

// console.log(res)
// reduce 第一个参数回调函数 回调函数参数 (prev, cur, index) prev：返回值   cur：当前的参数  index：当前下标
//        第二个参数 初始值
// var str= new Array(60).fill('').reduce((prev, cur, index)=>{
//     return prev + String.fromCharCode(65 + index)
// }, '').match(/[A-Za-z]/gm).join('');
// console.log(str);

console.log(String.prototype);
// toLocaleLowerCase  // 英文字符还有其他一些国家的语言
// toLocaleUpperCase
// toLowerCase   // 英文字符大小写转化
// toUpperCase


// slice() 字符串和数组都能截取
// slice()  数组的slice()
// var arr = [1,2,3,4,5];
// var str = '12345';
// console.log(arr.slice());   // startIndex  endIndex  [)  左闭右开
// console.log(arr.slice(1));  // [2, 3, 4, 5]
// console.log(arr.slice(1,3)); // [2, 3]
// console.log(arr.slice(NaN)); // 无效参数，默认当0看
// console.log(arr.slice(undefined)); // 在js中undefined意思为空参数，作为未传值来处理
// console.log(arr.slice(null)); // 无效参数，默认当0看
// // slice()的参数会经过Number()的隐式转换
// // Number()转换的缺陷 NaN本来是number转了之后还是NaN
// console.log(arr.slice([1]));
// console.log(arr.slice('1'));
// console.log(arr.slice(1, undefined))  // [2, 3, 4, 5]
// console.log(arr.slice(-2));  // 支持负数
// console.log(arr.slice(1, null))

// console.log(Number(NaN))  // NaN

// undefined 是作为未传值来处理；


// 字符串的slice()
// var arr = [1,2,3,4,5];
// var str = '12345';
// console.log(str.slice());   // startIndex  endIndex  [)  左闭右开
// console.log(str.slice(1));  // [2, 3, 4, 5]
// console.log(str.slice(1,3)); // [2, 3]
// console.log(str.slice(NaN)); // 无效参数，默认当0看
// console.log(str.slice(undefined)); // 在js中undefined意思为空参数，作为未传值来处理
// console.log(str.slice(null)); // 无效参数，默认当0看
// // slice()的参数会经过Number()的隐式转换
// // Number()转换的缺陷 NaN本来是number转了之后还是NaN
// console.log(str.slice([1]));
// console.log(str.slice('1'));
// console.log(str.slice(1, undefined))  // [2, 3, 4, 5]
// console.log(str.slice(-2));  // 支持负数
// console.log(str.slice(1, null));  // 空串



// substring  substr
// substring
// var arr = [1,2,3,4,5];
// var str = '12345';
// console.log(str.substring());   // startIndex  endIndex  [)  左闭右开
// console.log(str.substring(1));  // [2, 3, 4, 5]
// console.log(str.substring(1,3)); // [2, 3]
// console.log(str.substring(NaN)); // 无效参数，默认当0看
// console.log(str.substring(undefined)); // 在js中undefined意思为空参数，作为未传值来处理
// console.log(str.substring(null)); // 无效参数，默认当0看
// console.log(str.substring([1]));
// console.log(str.substring('1'));
// console.log(str.substring(1, undefined))  // [2, 3, 4, 5]
// console.log(str.substring(-2));  // 支持倒叙
// console.log(str.substring(1, null));  // 1
// 2个区别，substring 支持倒叙；(3, 1)  反序(-2)负数不支持；


// substr  是考点项目中不建议使用
// var arr = [1,2,3,4,5];
// var str = '12345';
// console.log(str.substr());   // startIndex  长度
// console.log(str.substr(1));  // [2, 3, 4, 5]
// console.log(str.substr(1,3)); // [2, 3]
// console.log(str.substr(NaN)); // 无效参数，默认当0看
// console.log(str.substr(undefined)); // 在js中undefined意思为空参数，作为未传值来处理
// console.log(str.substr(null)); // 无效参数，默认当0看
// console.log(str.substr([1]));
// console.log(str.substr('1'));
// console.log(str.substr(3, 1)); // 不是反序 不存在倒叙
// console.log(str.substr(1, undefined))  // [2, 3, 4, 5]
// console.log(str.substr(-2));  // 支持负数
// console.log(str.substr(1, null));  // 空串  意思为1截取0位 比较反人性

// substr 不存在倒叙(因为第二个参数是长度)   反序(-2) 支持


// indexOf()   找当前值对应的索引
// var arr = [1,2,3,4,5,2];
// var str = '12345';
// ===
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(2, 3)) // 第二个参数 start从哪开始找 索引是number 不传从0开始往后找
// console.log(arr.indexOf(2, -1)); // 支持负数  只找最后一位
// console.log(arr.indexOf(2, null)); // 当作0来处理
// console.log(arr.indexOf(2, undefined)); // 当作未传参数处理
// console.log(arr.indexOf(2, NaN)); // 当作0处理
// console.log(arr.indexOf(2, [1])); // 1
// console.log(arr.indexOf(2, '1')); // 1
// console.log(arr.indexOf(2, [3])); // 5
// console.log(arr.indexOf(2, '3')); // 5
// console.log(arr.indexOf(2, true)); // 1

/*********************/
// console.log(str.indexOf(2));
// console.log(str.indexOf(2, 3)) // 第二个参数 start从哪开始找 索引是number 不传从0开始往后找
// console.log(str.indexOf(2, -1)); // 支持负数 把负数当作0;
// console.log(str.indexOf(2, null)); // 当作0来处理
// console.log(str.indexOf(2, undefined)); // 当作未传参数处理
// console.log(str.indexOf(2, NaN)); // 当作0处理
// console.log(str.indexOf(2, [1])); // 1
// console.log(str.indexOf(2, '1')); // 1
// console.log(str.indexOf(2, [3])); // 5
// console.log(str.indexOf(2, '3')); // 5
// console.log(str.indexOf(2, true)); // 1

// 字符串 一般都不支持负数
// console.log(arr.lastIndexOf(2));
// console.log(arr.lastIndexOf(2, 3)) // 第二个参数 start从哪开始找 索引是number 不传从0开始往后找
// console.log(arr.lastIndexOf(2, -1)); // 支持负数  只找最后一位
// console.log(arr.lastIndexOf(2, null)); // 当作0来处理
// console.log(arr.lastIndexOf(2, undefined)); // 当作未传参数处理
// console.log(arr.lastIndexOf(2, NaN)); // 当作0处理
// console.log(arr.lastIndexOf(2, [1])); // 1
// console.log(arr.lastIndexOf(2, '1')); // 1
// console.log(arr.lastIndexOf(2, [3])); // 5
// console.log(arr.lastIndexOf(2, '3')); // 5
// console.log(arr.lastIndexOf(2, true)); // 1
/*********** */
// console.log(str.lastIndexOf(2));
// console.log(str.lastIndexOf(2, 3)) // 第二个参数 start从哪开始找 索引是number 不传从0开始往后找
// console.log(str.lastIndexOf(2, -1)); // 不支持负数  当0看
// console.log(str.lastIndexOf(2, null)); // 当作0来处理
// console.log(str.lastIndexOf(2, undefined)); // length - 1
// console.log(str.lastIndexOf(2, NaN)); // length - 1
// console.log(str.lastIndexOf(2, [1])); // 1
// console.log(str.lastIndexOf(2, '1')); // 1
// console.log(str.lastIndexOf(2, [3])); // 5
// console.log(str.lastIndexOf(2, '3')); // 5
// console.log(str.lastIndexOf(2, true)); // 1



// 封装typeOf
var commonTools = {
    myTypeOf: function (val) {
       var type = typeof val;

       var resSet = {
         "[object Object]": 'object',
         "[object Array]": 'array',
         "[object Number]": 'obj_number',
         "[object String]": 'obj_string',
         "[object Boolean]": 'obj_boolean',
         "[object Date]": 'date',
         "[object RegExp]": 'regexp'
       }

       if(val === null) {
         return null;
       }else if(type === 'object') {
          var res = Object.prototype.toString.call(val);
          return resSet(res);
       }else {
          return type;
       }
    }
}

