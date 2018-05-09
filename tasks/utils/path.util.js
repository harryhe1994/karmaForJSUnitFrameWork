var path = require('path');

module.exports.resolve = resolve;

function resolve(dir) {
    return path.join(__dirname, '../..', dir);
}