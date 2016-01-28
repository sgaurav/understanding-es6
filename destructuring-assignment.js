/**
  * extract data from arrays or objects
  */

let foo = [1, 2, 3];
let [one, two, three] = foo;
// one = 1, two = 2, three = 3

// Works in Functions!
let myFunc = ([x, y, z]) => {
  // x = 1, y = 2, z = 3
}
myFunc(foo);

//Names need to match property names in case of object
let {a, b} = {a:1, b:2};
// a = 1, b = 2

//Allows variable swapping with no temp variable
[a, b] = [b, a];
// a = 2, b = 1