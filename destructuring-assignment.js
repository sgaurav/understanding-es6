/**
  * extract data from arrays or objects
  */

const foo = [1, 2, 3];
const [one, two, three] = foo; // one => 1, two => 2, three => 3

console.log(one);
console.log(two);
console.log(three);

const { a, b } = { a: 1, b: 2 }; // a => 1, b => 2

console.log(a);
console.log(b);
