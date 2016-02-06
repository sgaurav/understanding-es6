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


// lexical binding for `this`
let bob = {
  _name: "Bob",
  _friends: [],
  printFriends: function () {
    this._friends.forEach(f => {
      console.log(this._name + " knows " + f);
    });
  }
};

// ES5
var bob = {
  _name: "Bob",
  _friends: [],
  printFriends: function () {
    var self = this;
    this._friends.forEach(function (f) {
      console.log(self._name + "knows " + f);
    });
  }
};
