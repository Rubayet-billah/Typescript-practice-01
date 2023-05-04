class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Levi", "doggo", "ghew ghew");
const cat = new Animal("Mini", "cat", "mewww");

// dog.makeSound();
cat.makeSound();
