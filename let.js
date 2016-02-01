/**
 * let declares a block scope local variable. let has been in Firefox for a
 * long time and is now a part of ES6.
 * IMPORTANT: If outside of any block, let is scoped globally else will be scoped
 * to nearest enclosing block.
 */

function foo() {
    for (let i = 0; i < 10; i++) {
        // i is visible in this block only
    }

    // i is not visible outside of the block
}
