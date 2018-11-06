var server = require("./ServerTest");
var router = require("./router");

server.start(router.route);
