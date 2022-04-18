/* 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    // Get the first and the last character's code
    const firstCharCode = str.charCodeAt(0);
    const lastCharCode  = str.charCodeAt(str.length - 1);
 
    // Loop through str
    for (let i = 0; i < str.length - 1; i++) {

        // If there is no missing letter 
        if (str.length === lastCharCode - firstCharCode + 1) {
            return undefined

        // If there is a missing letter
        } else if (str.length < lastCharCode - firstCharCode + 1 && str.charCodeAt(i + 1) - str.charCodeAt(i) === 2) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
}

let testArr = [ "abce", "abcdefghjklmno", "stvwx", "bcdf", "abcdefghijklmnopqrstuvwxyz"];
let results = testArr.map(str => fearNotLetter(str));

for (let i = 0; i < testArr.length; i++) {
    console.log(`${testArr[i]} : ${results[i]}`)    
}