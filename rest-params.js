/**
 * rest, params passed as an array to function
 */

function foo(...x) {
    // x is an array
    return x.length;
}

foo(1, 2, 3, 4); // 4
