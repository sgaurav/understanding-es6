/**
  * extract data from arrays or objects
  */

var foo = [1, 2, 3];
var [one, two, three] = foo;
// one => 1, two => 2, three => 3

var {a, b} = {a:1, b:2};
// a => 1, b => 2


/**
 Destructuring with defaults
**/

var bar = [1,2,3];
var [w=9,x=8,y=7,z = 5] = bar;
//w =>1, x=> 2, y=>3, z=> 5

var foobar = {
   x1 : 1,
   x2 : 2
};

var {x1=5,x2=6,x3=7} = foobar;
//x1=1,x2=2,x3=7

/** Destructring by assigning new variable names 
**/

var myObj = { x : 1, y :2, z: 3 };
var {x : var1, y : var2 , z : var3, w : var4 = 5 } = myObj;

//var1 = 1, var2 = 2, var3 = 3, var4 = 5
// x,y,z,w are undefined
