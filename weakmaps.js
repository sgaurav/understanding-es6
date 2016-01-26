/**
  * WeakMap object are key/value collections in which the keys are objects.  
  * Values in WeakMap can be any arbitrary value.
  * WeakMap, reference to key object are kept weakly and hence it does not  
  * prevent it from being garbage collected. Hence WeakMap helps in preventing
  * memory leak issues.
  */

var x = {};
var y = function(){};
var z = "foo";

var w = new WeakMap();

w.set(x, "bar");
w.set(y, 123);
w.set(z, "xyz"); // error - key needs to be an object

w.get(x); // bar
w.get(y); // 123

w.has(x); // trues