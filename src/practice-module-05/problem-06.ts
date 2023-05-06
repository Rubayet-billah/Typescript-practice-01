/*
Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
*/

/*
interface Person {
  name: string;
  age: number;
  email: string;
}

const getPerson = (persons: Person[], email: string): Person | null => {
  for (const person of persons) {
    if (person.email === email) {
      return person;
    }
  }
  return null;
};

const persons: Person[] = [
  { name: "Alice", age: 30, email: "alice@example.com" },
  { name: "Bob", age: 25, email: "bob@example.com" },
  { name: "Charlie", age: 40, email: "charlie@example.com" },
];

// Call the getPerson function with an email
const email = "alice@example.com";
const person = getPerson(persons, email);

console.log(person);

*/
