/* 
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
*/

function destroyer() {
    // Get the arguments passed into the function: !!! this returns an object not an array
    const arrObj = arguments;
    console.log(arrObj);
    
    // Get the nested array at the beginning
    const nestedArr = arrObj[0];
    
    // Get the remaining arguments
    delete arrObj[0];
    const remainingArgs = Object.values(arrObj);
    
    // Eliminate the repeating elements
    const remainingsArr = nestedArr.filter(elm => {
        if (!remainingArgs.includes(elm)) {
            return true;
        } else {
            return false;
        }
    })

    return remainingsArr;
}