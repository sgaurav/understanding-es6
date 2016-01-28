/**
  * Set is a collection of unique values. A Set can be iterated in order of
  * insertion of its elements.
  */

var foo = new Set();

foo.add(1);
foo.add(2);
foo.add("three");

foo.has(1); // true

foo.size; // 3

foo.delete(2); // removes 2 from foo
