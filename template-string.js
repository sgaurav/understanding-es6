/**
 * Syntactic sugar for string construction
 */

const x = 'foo';
const y = 'bar';

/*
 * ES5
 */
var join = x + ' ' + y; // foo bar

/*
 * ES6
 */
const join = `${x} ${y}`; // foo bar
console.log(join);

/*
foo
bar
*/

/*
 * ES5
 */
var join = x + '\n' + y;

/*
 * ES6
 */
const join = `${x}
${y}`;
console.log(join);
