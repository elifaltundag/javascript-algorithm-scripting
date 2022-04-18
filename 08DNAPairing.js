/* 
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/ 

function pairElement(str) {
    // Copy the string as an array
    const dnaArr = str.split("");
    console.log(dnaArr);
    
    // Arrayception 
    const dnaArrCep = dnaArr.map(dna => Array.from(dna));
    
    // Pair them 
    const dnaPairArr = dnaArrCep.map(arr => {
        let pair = "";
        switch (arr[0]) {
            case "A":
                pair = "T";
                break;
            case "T":
                pair = "A";
                break;
            case "C":
                pair = "G";
                break;
            case "G":
                pair = "C";
                break;
            default: 
                pair = "X";
                break;
        }

        arr.push(pair);
        return arr;
    })
    return dnaPairArr;
}


const testDNA = "ATCGA";
let result = pairElement(testDNA);
console.log(result);

/*
const testArr = [ "ATCGA", "TTGAG", "CTCTA"];
let results = testArr.map(str => pairElement(str));
console.log(results);
*/