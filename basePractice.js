// let 适合定义局部变量
/*
for (let i = 0; i <10 ; i++) {
    console.log(i);
}
console.info(i);
*/

// let 函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。
/*for (let j = 0; j <10 ; j++) {
    let j = 100;
    console.log(j);

}*/

// let 可以使变量不存在提升
/*
console.log(foo);
var foo = 2;

console.log(bar);
let bar = 3;*/

//代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
/*if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}*/

// let 不允许代码块里有重复声明的变量
/*let a = 10;
var a = 10;*/


// 总结：为什么要用到块级变量
// 场景一：内层变量可能会覆盖到外层变量
// 场景二：用来计数的循环变量泄露给外部变量

// let声明的变量可以改变，值和类型都可以改变，没有限制。
//
// const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。类似于java里的static静态变量

// let 和conet声明变量都差不多除了上面一条不一样
/*
if (true) {
    console.log(MAX); // ReferenceError
    const MAX = 5;
}*/
/*
var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30;*/

/*ES5只有两种声明变量的方法：var命令和function命令。ES6
除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6
一共有6种声明变量的方法。*/

var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a // 1

let b = 1;
window.b // undefined