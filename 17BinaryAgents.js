/*
Return an English translated sentence of the passed binary string. The binary string will be space separated.

source: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents
*/ 

function binaryAgent(str) {
    // Get the binary numbers in an array
    const binaryArr = str.split(" ");
    
    // Loop through the array and convert them to string
    const parsedArr = binaryArr.map(binaryCode => String.fromCharCode(parseInt(binaryCode, 2)));
    
    return parsedArr.join('');
    
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
