/* 
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
*/     

// Get the prime factors of a single number
function getPrimeFactors(num) {
    // Get all factors of the input number
    let allFactors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            allFactors.push(i);
        }
    }
    
    // Get the primes 
    let primes = allFactors.filter(factor => {
       let numDivider = 0;
       for (let j = 0; j < allFactors.length; j++) {
           if (factor % allFactors[j] === 0) {
               numDivider++;
           }
       }
       if (numDivider === 2) {
           return true;
       } else {
           return false;
       }
    });

    // Get the prime factors 
    let primeFactors = primes.map(prime => {
        let power = 1;
        while (allFactors.includes(Math.pow(prime, power + 1))) {
            power++; 
        }
        return Math.pow(prime, power);
    }).sort((a,b) => a - b);
    return primeFactors;
}



// Get the smallest common multiple of a range
function smallestCommons(arr) {
    // Copy the array and sort it in ascending order
    const numArr = [...arr].sort((a,b) => a - b);
    

    // Get the range [smaller num, greater num]
    const range = [];
    for (let i = numArr[0]; i <= numArr[numArr.length - 1]; i++) {
        range.push(i);
    }


    // Get the prime factors of each number
    const allPrimeFactors = range.map(factor => getPrimeFactors(factor));


    // Get the unique prime factors 
    let uniquePrimeFactors = [];
    
    for (let primes of allPrimeFactors) {
        for (let prime of primes) {
            if (!uniquePrimeFactors.includes(prime)) {
                uniquePrimeFactors.push(prime);
            }
        }
    }
    uniquePrimeFactors.sort((a,b) => b - a);


    // Filter them zaten herhangi bir prime'da varsa o olan küçüğü at
    let filteredPrimeFactors = uniquePrimeFactors.filter(prime => {
        // Initiate number of divisions for each prime number as 0
        let numDiv = 0;

        // If a division with no remainder occurs, increment the number of divisions
        for (let i = 0; i < uniquePrimeFactors.length; i++) {
            if (uniquePrimeFactors[i] % prime === 0) {
                numDiv++;
            }
        }

        // If a prime has only 1 division with no remainder, let that pass the filter 
        if (numDiv === 1) {
            return true;
        } else { // Else, fail to pass the filter
            return false;
        }
    });

    
    // Return the smallest commom multiple
    return filteredPrimeFactors.reduce((prevVal, curVal) => prevVal * curVal, 1)
}


console.log(smallestCommons([6, 13]));



/* const testArr = [ [1, 5], [5, 1], [2, 10], [1, 13], [23, 18] ];
const resultArr = testArr.map(subArr => smallestCommons(subArr));
console.log(resultArr); */