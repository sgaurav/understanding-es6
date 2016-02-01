/** 
* Proxies are special objects that allow you to provide custom implementations for operations on objects.
  (e.g. property lookup, assignment, enumeration, function invocation, etc).
  Proxies have a handler(a method that – if present – performs that operation),
  and target(the operation is performed on target if the handler doesn't intercept it).
*/

let target = {
  guest: "Welcome, Guest"
};

let proxy = new Proxy(target, {
  get (receiver, name) {
      return name in receiver ? receiver[name] : `Howdy, ${name}`
  }
});

proxy.guest;  // "Welcome, Guest"
proxy.userX // "Howdy, UserX"






