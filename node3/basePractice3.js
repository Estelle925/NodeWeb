let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
/*let a = {
    [mySymbol]: 'Hello!'
};*/

// 第三种写法
/*
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
*/

// 以上写法都得到同样结果
// a[mySymbol] // "Hello!"
console.log(a[mySymbol]);