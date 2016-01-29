/**
  * spread allows you to pass each element of an array as a parameter.
  */

var list = [1, 2, 3, 4];

function foo(i, j, k, l){
    return i*j*k*l;
}

foo(...list); // 24

/**
 * Spread can also be used in place of Object.assign()
 */
const input = {name: 'Test', ready: false};

const inputReady = {
 ...input,
 {ready: true}
};
// equivalent to const inputReady = Object.assign(input, {ready: true))
