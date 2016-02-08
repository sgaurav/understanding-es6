/**
 * Class is syntactical sugar over prototype based inheritance.
 */

/**
 * ES6 version
 */
class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }

    makeNoise() {
        return `The ${this.type} goes ${this.sound}`;
    }
}

const simone = new Animal('cat', 'meow');

simone.makeNoise(); // Returns "The cat goes meow"

/**
 * ES5 version
 */
function ES5Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}

ES5Animal.prototype.makeNoise = function makeNoise() {
    return 'The ' + this.type + ' goes ' + this.sound;
};

var dogbert = new ES5Animal('dog', 'bark');

dogbert.makeNoise(); // Returns "The dog goes bark"
