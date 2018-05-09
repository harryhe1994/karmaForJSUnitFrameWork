function hello(a, b) {
    return a + b;
}


function testing(a){
    if(a == 'hehe'){
        return 'hehe';
    }else if(a == 'testing'){
        return 'testing';
    }else {
        return 'null';
    }
}

module.exports.testing = testing;
module.exports.hello = hello;