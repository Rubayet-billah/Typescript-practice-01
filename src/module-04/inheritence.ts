// class Parent {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   makeSleep(hours: number): string {
//     return `${this.name} sleeps ${hours} a day`;
//   }
// }

// class Student extends Parent {
//   // name: string;
//   // age: number;
//   // address: string;
//   // constructor(name: string, age: number, address: string) {
//   //   this.name = name;
//   //   this.age = age;
//   //   this.address = address;
//   // }
//   // makeSleep(hours: number): string {
//   //   return `${this.name} sleeps ${hours} a day`;
//   // }

//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//   }
// }

// class Teacher extends Parent {
//   designation: string;
//   // name: string;
//   // age: number;
//   // address: string;
//   // designation: string;
//   // constructor(name: string, age: number, address: string, designation: string) {
//   //   this.name = name;
//   //   this.age = age;
//   //   this.address = address;
//   //   this.designation = designation;
//   // }
//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }
// }

// const teacher = new Teacher("Mr X", 51, "USA", "Beast Titan");
