var h = require('./hello.js');

function callHello(a, b) {
    var c = h.hello(a, b);
    return c;
}


module.exports.callHello = callHello;