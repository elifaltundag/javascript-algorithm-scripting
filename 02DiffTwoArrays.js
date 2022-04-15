/* 
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. 

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
*/


function diffArray(arr1, arr2) {
    // Copy the original arrays to avoid mutations
    const copyArr1 = [...arr1];
    const copyArr2 = [...arr2];
  
    // Initiate empty array to store repeating elements
    const sameArr = [];
    for (let elm1 of copyArr1) {
      for (let elm2 of copyArr2) {
        if (elm1 === elm2) {
          sameArr.push(elm1);
        }
      }
    }
  
    // Initiate empty array to store differentiating elements
    const diffArr = [];

    // Find differentiating elements in both arrays
    for (let elm of copyArr1) {
      if (!sameArr.includes(elm)) {
        diffArr.push(elm);
      }
    }
  
    for (let elm of copyArr2) {
      if (!sameArr.includes(elm)) {
        diffArr.push(elm);
      }
    }  
  
    return diffArr;
}