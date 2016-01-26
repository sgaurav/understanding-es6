/**
  * Arrow functions have shorter syntax that function expression.
  * These functions also lexically bind `this` value and are always anonymous.
  */

var foo = ["Hello", "World"];

//single arguments do not require parenthesis or curly braces.
var bar = foo.map(x => x.length);

//multiline functions require curly braces
//no arguments expect parenthesis
var foobar = () => {
    console.log("Hello World")
}