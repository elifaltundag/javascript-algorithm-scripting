/* 
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
*/ 

function spinalCase(str) {
    // Copy string to avoid mutations
    let newStr = "";
    newStr += str;

    // Regular expressions
    const splitRegEx = /(\s|\_)+/g;
    const caseRegEx = /[A-Z]/g;

    // Capitalized letters indices array 
    const indexes = [];

    for (let i = 1; i < newStr.length; i++) {
        if (newStr[i].match(caseRegEx)) {
            indexes.push(i);
        }
    }

    // Add the first and last indices
    indexes.unshift(0);
    indexes.push(newStr.length);
    
    // Sliced pieces 
    const wordsArr = [];
    for (let j = 0; j < indexes.length - 1; j++) {
        wordsArr.push(newStr.slice(indexes[j], indexes[j+1]));
    }

    // Rejoin the array as a whole string
    let joinedStr = wordsArr.join(" ");

    // Replace the regEx with hyphen and change all letters to lower case
    const result = joinedStr.replace(splitRegEx, "-").toLowerCase();
    return result;
}