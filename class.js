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

var simone = new Animal("cat", "meow");

simone.makeNoise(); // returns "The cat goes meow"
