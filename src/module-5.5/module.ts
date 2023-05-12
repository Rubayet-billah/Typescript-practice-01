import * as Methods from "./function"; // wild card import

const add = (a: number, b: number, c: number): number => {
  return a + b + c;
};

const resultOfTwoSum = Methods.add(2, 6); // asterick is used for multiple import at a time
