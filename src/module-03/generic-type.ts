type GenericArray<T> = Array<T>;

const rollNumbers: Array<number> = [2, 5, 6, 8];
const names: GenericArray<string> = ["abul", "babul", "dabul"];

const userNameAndRollNumber: Array<{ name: string; roll: number }> = [
  {
    name: "Eren",
    roll: 101,
  },
  {
    name: "Mikasa",
    roll: 102,
  },
];
