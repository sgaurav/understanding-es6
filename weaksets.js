/**
  * WeakSet are collection of objects. It allows to store weakly held objects
  * in collection. Weakly held objects are unique across collection.
  * Unlike Set, WeakSet can only store Objects. Objects are held weakly and no
  * reference is stored and hence prevents leaking.
  */

const x = {};
const y = function y() {};
const z = 'foo';

const ws = new WeakSet();

ws.add(x);
ws.add(y);
ws.add(z);

console.log(ws.has(x)); // true

ws.delete(x);

ws.clear(); // Purge the whole WeakSet
