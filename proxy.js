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
  get (obj, prop, val) {
      return val in obj ? obj[val] : 'Howdy, ${val}'
  },
  set (obj, prop, val){
    if(prop === 'password'){
      if(val.length<8){
        throw new TypeError('The length of password should be greater than 8');
      } else {
        obj[prop] = val;
      }
    } else {
      obj[prop] = val;
    }
  }
});

proxy.guest;  // "Welcome, Guest"
proxy.userX; // "Howdy, UserX"
proxy.password = 'abc'; //Error The length of password should be greater than 8.
proxy.age = 22; //age=22





