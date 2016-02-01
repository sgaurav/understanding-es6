/**
 * Arrow functions have shorter syntax than function expressions.
 * These functions also lexically bind `this` value and are always anonymous.
 */

const foo = ['Hello', 'World'];

// Single arguments do not require parenthesis or curly braces.
// The return statement is implicit
const bar = foo.map(x => x.length);

// ES5
var bar = foo.map(function (x) {
    return x.length;
});

// Multiline functions require curly braces
// No arguments expect parenthesis
const foobar = () => {
    console.log('Hello');
    console.log('World');
};

// ES5
var foobar = function foobar() {
    console.log('Hello');
    console.log('World');
};

// Returning object literal. Requires Brackets.
let quux = () => ({
    myProp: 123,
});

// ES5
var quux = function quux() {
    return {
        myProp: 123,
    };
};
