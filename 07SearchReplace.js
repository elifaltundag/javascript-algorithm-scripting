/* 
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/ 


// THE FUNCTION WORKS AS IT SHOULD BUT I CANNOT USE IT IN ARR.MAP() 

function myReplace(str, before, after) {
    // My variables: regular expressions, case matching after, result string 
    const upperRegEx = /[A-Z]/;
    const lowerRegEx = /[a-z]/;
    let newAfter = "";    
    let resultStr = "";
    
    // Get before's index
    let beforeIndex = str.indexOf(before);

    // Match after's capitalization with before's 
    if (upperRegEx.test(before) && !upperRegEx.test(after[0])) {
        newAfter += after[0].toUpperCase() + after.slice(1);
    } else if (lowerRegEx.test(before) && !lowerRegEx.test(after[0])) {
        newAfter += after[0].toLowerCase() + after.slice(1);
    } else {
        newAfter += after;
    }

    // Concatinate result string    
    resultStr = str.slice(0, beforeIndex) + newAfter + str.slice(beforeIndex + before.length);

    return resultStr;
}


console.log(myReplace("I think we should look up there", "up", "Down"));


/* const testArr = [
    [ "Let us go to the store", "store", "mall" ],
    [ "He is Sleeping on the couch", "Sleeping", "sitting" ],
    [ "I think we should look up there", "up", "Down" ],
    [ "This has a spellngi error", "spellngi", "spelling" ],
    [ "His name is Tom", "Tom", "john" ],
    [ "Let us get back to more Coding", "Coding", "algorithms" ],    
]

const resultArr = testArr.map((elm) => {myReplace(elm)});

console.log(resultArr); */
