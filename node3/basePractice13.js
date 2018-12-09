// 如果函数有多个返回值，优先使用对象解构，而不是数据属性解构

// bad
// function processInput(input) {
//     return [left, right, top, bottom];
}

// good
// function processInput(input) {
//     return { left, right, top, bottom };
// }
//
// const { left, right } = processInput(input);



// 如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。
// good
// const obj = {
//     id: 5,
//     name: 'San Francisco',
//     [getKey('enabled')]: true,
// };


// 对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
// good
const a = { x: null };
a.x = 3;

console.log(a);

