/* 
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
*/ 


function addTogether() {
    // Get the arguments
    const nums = [...arguments];
    
    // If there are 2 or more numbers, get the sum of the first 2
    if (nums.length >= 2) {
        if (typeof nums[0] === "number" && typeof nums[1] === "number") {
            return nums[0] + nums[1];
        } else {
            return undefined;
        }

    // If there are 2 separate arguments    
    } else if (nums.length == 1) {
        if (typeof nums[0] === "number") {
            return function addNum(num) {
                if (typeof num === "number") {
                    return nums[0] + num;
                } else {
                    return undefined;
                }
            }
        } else {
            return undefined;
        }
    }
};