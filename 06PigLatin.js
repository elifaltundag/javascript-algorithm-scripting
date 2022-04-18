/* 
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

- When split into two, if the second part begins with a vowel, exchange their positions and add "ay"

- If there are no vowels, just add "ay" at the end.
*/ 

function translatePigLatin(str) {
    if (typeof str === "string") {
        // My variables
        const regEx      = /[aeiou]/ig;
        const suffixCons = "ay";
        const suffixVow  = "w" + suffixCons;
        const vowelIndex = [];
        let pigLatin     = "";
 
        // Chech if there's any vowels and get their indices
        for (let i = 0; i < str.length; i++) {
            if (str[i].match(regEx)) {
                vowelIndex.push(i);
            }
        }     

       // If there are no vowels, just add consonants suffix at the end
        if (vowelIndex.length === 0) {
            pigLatin = str + suffixCons; 

        // Else if there are vowels at the beginning, just add vowels suffix at the end    
        } else if (vowelIndex.length > 0 && vowelIndex[0] === 0) {
            pigLatin = str + suffixVow;
        
        // Else if there are no vowels at the beginning, rearrange the letters and and vowel suffix at the end 
        } else if (vowelIndex.length > 0 && vowelIndex[0] !== 0) {
            for (let i = 0; i < str.length; i++) {
                pigLatin = str.substring(vowelIndex[0]) + str.substring(0, vowelIndex[0]) + suffixCons;
            }
        }
        return pigLatin;

    // Error for invalid input    
    } else {
        return "Invalid input: Input must be of string type"
    }
}



const testArr = ["california", "paragraphs", "glove", "algorithm", "eight", "schwartz", "rythm", 12];
const resultsArr = testArr.map(str => translatePigLatin(str));

console.log(resultsArr);

