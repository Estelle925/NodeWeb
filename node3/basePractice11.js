// Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口
const a = {
    a: 'a'
};
const b = {
    b: 'b'
};
const c = {...a, ...b}; // {a: 'a', b: 'b'}

console.log(c);

