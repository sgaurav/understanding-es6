/**
 * Map object are simple key/value maps. Both object and primitive values can
 * be used as key or value in map.
 * Although Map looks similar to Object, its worth noting that keys of Object
 * are strings while there is no such restriction for a Map. Also Map size can
 * be retrieved like an array while this is not the case with Objects.
 */

const x = {};
const y = 9;
const z = 'foo';

const foo = new Map();

foo.set(x, 34);
foo.set(y, 'bar');
foo.set(z, {
    data: 'test',
});

foo.get(x); // 34
foo.get(y); // "bar"
foo.get(z); // {data: "test"}

console.log(foo.size); // 3
