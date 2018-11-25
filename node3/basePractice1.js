// 关于node对于数组对象的取值解析

// let [a,b,c] = [1,2,3];
// console.log(a,b,c);

/*let[,,g] = [1,2,3];
// console.log(g);

let[head,...tail] = [1,2,3,4];
console.log(head);
console.log(tail);

let[x,y,...z] = ['a'];
console.log(x+"\n"+y+"\n"+z);

let [a, [b], d] = [1, [2, 3], 4];
console.log(a+"\n"+[b]+"\n"+d);

let [variable] = false;
console.log(variable);*/

// set结构赋值解构
// let[x,y,z] = new Set(['a', 'b', 'c']);
// console.log(x+"\n"+y+"\n"+z);

// let [foo = true] = [];
// foo // true
//
// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

// node关于对象的解构
let {a, b} = {a: 111, b: "john"};
console.log(a + "\n" + b);
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz+"\n"+foo)