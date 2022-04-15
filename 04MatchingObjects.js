/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
*/ 

function whatIsInAName(collection, source) {
    // Get a copy of the collection array to avoid mutations
    const collArr = [...collection];

    // Get the keys of the source
    const sourceKeys = Object.keys(source);
    
    // Loop through the collection array
    const matchingObjs = collArr.filter(obj => {
        // Loop through the keys array
        return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
    }); 
    
    return matchingObjs;
}
