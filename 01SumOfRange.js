/* 
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

sumAll([4, 1])  should return 10.
sumAll([5, 10]) should return 45.
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