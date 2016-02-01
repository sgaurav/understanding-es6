/**
 * Generators are functions which can be paused and resumed later. Function
 * context is saved across resumes.
 */

function* count() {
    let start = 0;
    while (true) {
        yield start;
        ++start;
    }
}

var iterator = count();

iterator.next(); // {value: 0, done: false}
iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.return();
