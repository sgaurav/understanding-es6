/**
  * rest, params passed as an array to function
  */

function foo(...x){
  // x is an array
  return x.length;
}

foo(1, 2, 3, 4); // 4

function bar(...y) {
  // y has all native array methods
  return y.pop();
}

bar(1, 2, 3); // 3
