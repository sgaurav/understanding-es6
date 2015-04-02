function* count(){
  var start = 0;
  while(true) {
    yield start;
    ++start;
  }
}

var iterator = count();

iterator.next(); //{value: 0, done: false}
iterator.next(); //{value: 1, done: false}
iterator.next(); //{value: 2, done: false}
iterator.next(); //{value: 3, done: false}