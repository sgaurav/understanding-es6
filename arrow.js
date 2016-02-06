/**
  * Arrow functions have shorter syntax than function expressions.
  * These functions also lexically bind `this` value and are always anonymous.
  */
  
let foo = ["Hello", "World"];

//single arguments do not require parenthesis or curly braces.
//The return statement is implicit
let bar = foo.map(x => x.length);

// ES5
var bar = foo.map(function(x) { return x.length; });

//multiline functions require curly braces
//no arguments expect parenthesis
let foobar = () => {
    console.log("Hello");
    console.log("World");
};

// ES5 
var foobar = function() {
    console.log("Hello");
    console.log("World");
};

//Returning object literal. Requires Brackets.
let quux = () => ({ "myProp" : 123 });

//ES5
var quux = function() {
    return { "myProp" : 123 };
};


// Lexical binding with arrow functions
// Meaning, it uses “this” from the surrounding code… 
// the code that contains the code in question. 


// ES5
function Timer() {
    // The Timer() constructor defines `this` as an instance of itself.
    this.seconds = 0;

    setInterval(function() {
        // In non-strict mode, this callback function defines `this` 
        // as the global object, which is different from the `this`
        // defined by the Timer() constructor.
        this.seconds++;
    }, 1000);
};

var t = new Timer();

// A common fix/hack is assigning a variable to the outer function's 'this'

function Timer() {
    var self = this; // assigning to variable
    self.seconds = 0;

  setInterval(function() {
      // The callback refers to the `self` variable of which
      // the value is the expected object.
      self.seconds++;
  }, 1000);
};

// With ES6 Arrow functions, no need to apply this hack

function Timer(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the Timer object
    }, 1000);
};

var t = new Timer();
