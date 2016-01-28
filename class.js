/**
  * Class is a syntactical sugar over prototype based inheritance.
  */
class Animal { 
  constructor(type, sound) {
    this.type = type;
    this.sound = sound;
  }
  
  makeNoise() {
    return ('The' + this.type + ' goes ' + this.sound);
  }
}

var Simone = new Animal("cat", "meow");

Simone.makeNoise(); // returns "The cat goes meow"
