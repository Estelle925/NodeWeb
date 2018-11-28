// 解析Map
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}

// 解析json
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let {id, status, data: number} = jsonData;

console.log(id, status, number);

// String api方法
let s = 'Hello world!';

console.log(s.startsWith('Hello')); // true
console.log(s.endsWith('!')); // true
console.log(s.includes('o')); // true
console.log(s.split(":"));
console.log(s.repeat(2));

