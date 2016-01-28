/**
  * Syntactic sugar for string construction
  */

var x = "foo";
var y = "bar";

// es5
var join = x + ' ' + y; // foo bar

// es6
var join = `${x} ${y}`; // foo bar

/*
foo
bar
*/

// es5
var join = x + '\n' + y;

// es6
var join = `${x}
${y}`;
