/* 
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
*/


function sumAll(arr) {
  // Copy the array to avoid mutations
  const rangeLimits = [...arr];

  // Sort the array in ascending order
  rangeLimits.sort((a, b) => a - b);

  // Get the whole range of integers 
  const range = [];
  for (let i = rangeLimits[0]; i <= rangeLimits[rangeLimits.length - 1]; i++) {
    range.push(i);
 }

  // Add up the integers to return to final sum
  return range.reduce((prevVal, curVal) => prevVal + curVal, 0);
}