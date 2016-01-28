/**
  * Arrow functions have shorter syntax that function expression.
  * These functions also lexically bind `this` value and are always anonymous.
  */
  
let foo = ["Hello", "World"];

//single arguments do not require parenthesis or curly braces.
//The return statement is implicit
let bar = foo.map(x => x.length);

// ES5
let bar = foo.map(function(x) { return x.length; });

//multiline functions require curly braces
//no arguments expect parenthesis
let foobar = () => {
    console.log("Hello");
    console.log("World");
};

// ES5 
let foobar = function() {
    console.log("Hello");
    console.log("World");
}

//Returning onbject literal
let quux = () => ({ "myProp" : 123 });

//ES5
let quux = function() {
    return { "myProp" : 123 };
};