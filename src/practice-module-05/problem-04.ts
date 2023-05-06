/*
 Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
 */

/*
type ProductTuple = [string, number, number];
type ProductArray = ProductTuple[];

function calculateTotalCost(products: ProductArray): number {
  let totalCost = 0;
  
  for (const [productName, price, quantity] of products) {
    totalCost += price * quantity;
  }
  
  return totalCost;
}

const products: ProductArray = [
  ["apple", 5, 10],
  ["orange", 7, 8],
  ["banana", 2, 15],
];

const totalCost = calculateTotalCost(products);
console.log(`The total cost of all products is: $${totalCost}`);
*/
