//注册event发射器
var EventEmitter = require('events').EventEmitter;
//创建event对象
var event = new EventEmitter();
//创建事件 some_event监听器
event.on('some_event', function() {
    console.log('some_event occured.');
});
//调用setTimeout，1秒后触发some_event事件
setTimeout(function() {
    event.emit('some_event');
}, 1000);
