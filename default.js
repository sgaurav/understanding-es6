/**
  * default, param created in function args and passed a default value
  */

function foo(msg="I am default"){
  return msg;
}

foo(); // I am default

/**
 * ES5 version
 */
function ES5Foo(msg){
  msg = msg || "I am default";
  return msg;
}

foo(); // I am default
