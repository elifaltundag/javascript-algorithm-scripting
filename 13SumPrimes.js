/* A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

function sumPrimes(num) {
    // Array to gather all numbers upto num
    let allNums = [];
    for (let i = 1; i <= num; i++) {
        allNums.push(i);
    }

    // Array for primes 
    const primes = allNums.filter(number => {
        let numDivider = 0;
        for (let i = 0; i < allNums.length; i++) {
            if (number % allNums[i] === 0) {
                numDivider++;
            }
        }
        if (numDivider === 2) {
            return true;
        } else {
            return false;
        }
    })

    return primes.reduce((prevVal, curVal) => prevVal + curVal, 0);
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));