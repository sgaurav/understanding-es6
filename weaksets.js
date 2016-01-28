/**
  * WeakSet are collection of objects. It allows to store weakly held objects 
  * in collection. Weakly held objects are unique across collection.
  * Unlike Set, WeakSet can only store Objects. Objects are held weakly and no
  * reference is stored and hence prevents leaking.
  */

var x = {};
var y = function(){};

var ws = new WeakSet();

ws.add(x);
ws.add(y);

ws.has(x); // true

ws.delete(x);

ws.clear(); // purge whole weakset
