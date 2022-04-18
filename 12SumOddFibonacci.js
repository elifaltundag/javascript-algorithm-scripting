/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
*/ 

function sumFibos(num) {
    // Fibonacci array
    const fiboArr = [1, 1]; 
   
    // Add numbers up to num to the Fibonacci array
    while (fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2] <= num) {
        fiboArr.push(fiboArr[fiboArr.length - 1] + fiboArr[fiboArr.length - 2]);
    } 

    // Filter odd numbers    
    const oddFibs = fiboArr.filter(num => num % 2 === 1);
    
    // Get the sum
    const sum = oddFibs.reduce((prevVal, curVal) => prevVal + curVal, 0);
    return sum;
}

const testArr = [1, 1000, 4000000, 4, 75024, 75025];
const results = testArr.map(num => sumFibos(num));
console.log(results);
