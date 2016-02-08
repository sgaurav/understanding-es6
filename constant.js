/**
 * Constant is a single assignment variable.
 */

function foo() {
    const i = 1;

    var bar = i; // 1
    var i = 2; // Error
}

function fooTwo() {
    const object = {
        nestedProperty: 1,
    };

    object = 2; // Error
    object.nestedProperty = 2; // No error
}
