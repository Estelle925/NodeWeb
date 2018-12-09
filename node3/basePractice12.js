// bad
const a = "foobar";
const b = 'foo' + a + 'bar';

// acceptable
// const c = `foobar`;

// good
// const a = 'foobar';
// const b = `foo${a}bar`;

console.info(b);


// 函数的参数如果是对象的成员，优先使用解构赋值。
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
}

// good
function getFullName(obj) {
    const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {
}




