/**
  * extract data from arrays or objects
  */

var foo = [1, 2, 3];
var [one, two, three] = foo;
// one => 1, two => 2, three => 3

var {a, b} = {a:1, b:2};
// a => 1, b => 2

var {a: foo, b: bar} = {a: 1, b: 2};
// foo => 1, bar => 2
// console.log(a, b) => ReferenceError
