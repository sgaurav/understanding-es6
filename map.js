/**
  * Map object are simple key/value maps. Both object and primitive values can 
  * be used as key or value in map.
  * Although Map looks similar to Object, its worth noting that keys of Object  
  * are string while their is no such restriction for a Map. Also Map size can 
  * be retrieved like array while this is not the case with Objects.
  */

var x = {};
var y = 9;
var z = "foo";

var m = new Map();

m.set(x, 34);
m.set(y, "bar");
m.set(z, {data: "test"});

m.get(x); // 34
m.get(y); // "bar"
m.get(z); // {data: "test"}

m.size; // 3
