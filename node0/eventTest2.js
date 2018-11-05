// 注册event事件器
var events = require('events');
// 创建事件发射器对象
var emitter = new events.EventEmitter();
// 创建监听事件someEvent
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
// 创建监听事件
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
// 触发事件
emitter.emit('someEvent', 'byvoid', 1991);

/**server.once('connection', function (stream) {
  console.log('Ah, we have our first user!');
});**/

