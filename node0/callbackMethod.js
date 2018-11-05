var fs = require('fs');
// var data = fs.readFileSync('test.txt');
// console.log(data.toString());
// console.log('文件读取完成');

fs.readFile('test.txt',function (err,data) {
    if(err) return console.error(err);
    console.log(data.toString());
});