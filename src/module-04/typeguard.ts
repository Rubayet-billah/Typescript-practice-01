// type guard

// keyof guard
type Alphanumeric = number | string;

function add(num1: Alphanumeric, num2: Alphanumeric): Alphanumeric {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}

add("1", "9");

// in guard

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

function checkAdmin(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `This is ${user.role}`;
  } else {
    return "This is Rod Rice";
  }
}

const normalUser1: NormalUserType = { name: "Beast Titan" };
const adminUser1: AdminUserType = { name: "Founding Titan", role: "admin" };

console.log(checkAdmin(normalUser1));
console.log(checkAdmin(adminUser1));

// intance guard

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("Making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log("Ghew Ghew");
  }
}

class Mew extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMew() {
    console.log("Mew Mew");
  }
}

// type guard

function getAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (animal instanceof Mew) {
    animal.makeMew();
  } else {
    animal.makeSound();
  }
}
