/**
  * constant is a single assignment variable.
  */

function foo(){
    const i = 1;
    
    var bar = i; // 1
    var i = 2;  // error
}

function fooTwo(){
    const object = {
        nestedProperty: 1
    };
    
    object = 2; // error
    object.nestedProperty = 2;  // no error
}
