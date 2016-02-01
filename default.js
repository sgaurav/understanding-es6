/**
 * default, param created in function args and passed a default value
 */

/**
 * ES6 version
 */
function foo(msg = 'I am default') {
    return msg;
}

foo(); // I am default

/**
 * ES5 version
 */
function es5Foo(msg) {
    msg = msg || 'I am default';
    return msg;
}

es5Foo(); // I am default
