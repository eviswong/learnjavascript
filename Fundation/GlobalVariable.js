'use strict';

var GLOBAL = {};

GLOBAL.name = 'myapp';
GLOBAL.version = 1.0;
GLOBAL.foo = function() {
    return 'function';
}

console.log(GLOBAL.foo());