/*
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
    console.log(i);
}
// 2 3 5 4


let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value));


let set1 = new Set(['red', 'green', 'blue']);
let arr = [...set1];
console.log(arr);
*/


// let set = new Set([1, 2, 3]);
// set = new Set([...set].map(x => x * 2));
// console.log(set);
// 返回Set结构：{2, 4, 6}

/*let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) === 0));
console.log(set);*/
// 返回Set结构：{2, 4}

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
console.log(union);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}

console.log(intersect);
console.log(difference);