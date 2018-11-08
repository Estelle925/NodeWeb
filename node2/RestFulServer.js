// var express = require('express');
// var app = express();
// var fs = require("fs");
//
// app.get('/listUsers', function (req, res) {
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//         console.log( data );
//         res.end( data );
//     });
// });
//
// app.get('/:addUsers', function (req, res) {
//     console.log(req.param("name"));
//     res.end( data );
// });
//
//
//
//
// var server = app.listen(8081, function () {
//
//     var host = server.address().address;
//     var port = server.address().port;
//
//     console.log("应用实例，访问地址为 http://%s:%s", host, port);
//
// });

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:name', function (req, res) {
    // 首先我们读取已存在的用户
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var user = data["" + req.params.name]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
