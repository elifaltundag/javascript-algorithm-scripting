/* 
Flatten a nested array. You must account for varying levels of nesting. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
*/ 

const flattenedArr = [];

function steamrollArray(arr) {
    // Copy the original array to avoid mutations
    const theArr = [...arr];
    
    // Loop through the array with recursion
    for (let elm of theArr) {
        if (!Array.isArray(elm)) {
            flattenedArr.push(elm); 
        } else if (Array.isArray(elm) && elm.length > 0) {
            steamrollArray(elm);
        }
    }

    return flattenedArr;
}

//console.log(steamrollArray([[["a"]], [["b"]]]));
//console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
//console.log(steamrollArray([1, {}, [3, [[4]]]]));
