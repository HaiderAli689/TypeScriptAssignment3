"use strict";
// (1) Write a program that uses filter to remove all negative numbers from an array of numbers
function removeNegativeNumbers(numbers) {
    // Use the filter method to create a new array with only positive numbers
    const positiveNumbers = numbers.filter((num) => num >= 0);
    return positiveNumbers;
}
// Example usage:
const inputArray = [1, -2, 3, -4, 5, -6];
const resultArray = removeNegativeNumbers(inputArray);
console.log(resultArray);
// (2) Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a 
//new array where each number is multiplied by 2.
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.map((num) => num * 2);
console.log(doubledArray);
// (3) Given an array of strings ["apple", "banana", "cherry", "date", 
//"grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
const fruits = ["apple", "banana", "cherry", "date", "grape"];
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits);
// (4) Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together 
//to create a new array containing the squares of even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquares = numbers
    .filter((num) => num % 2 === 0) // Filter even numbers
    .map((evenNum) => evenNum ** 2); // Square the even numbers
console.log(evenSquares);
// (5) Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a 
//new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32
const celsius = [0, 10, 20, 30, 40];
const temptofht = celsius.map((fht) => (fht * 9 / 5) + 32);
console.log(temptofht);
// (6) Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods 
//together to create a new array containing the doubled values of odd numbers.
var numbers1 = [3, 6, 9, 12, 15, 18];
const doubleOddValues = numbers1.filter((num) => num % 2 != 0)
    .map((odd) => odd * 2);
console.log(doubleOddValues);
// (7) Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to 
//log each name with an exclamation mark at the end, e.g., "Alice!".
const names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((name) => {
    console.log(`${name}!`);
});
