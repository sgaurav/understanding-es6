/**
  * WeakMap object are key/value collections in which the keys are objects.
  * Values in WeakMap can be any arbitrary value.
  * WeakMap, reference to key object are kept weakly and hence it does not
  * prevent it from being garbage collected. Hence WeakMap helps in preventing
  * memory leak issues.
  */

const x = {};
const y = function y() {};
const z = 'foo';

const wm = new WeakMap();

wm.set(x, 'bar');
wm.set(y, 123);
wm.set(z, 'xyz'); // Error - key needs to be an object

console.log(wm.get(x)); // bar
console.log(wm.get(y)); // 123

console.log(wm.has(x)); // true
