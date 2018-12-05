let map = new Map();

map.set(-0, 123);
map.get(+0); // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) ;// 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined); // 3

map.set(NaN, 123);
map.get(NaN); // 123

// map.forEach((value, key) => console.log(key + ' : ' + value));
// map.forEach(x=>console.log(x));

console.log(map.size);
console.log(map.get(null));