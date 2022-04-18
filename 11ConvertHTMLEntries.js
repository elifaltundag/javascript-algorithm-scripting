/* 
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
& : &amp;
< : &lt;
> : &gt;
" : &quot;
' : &apos;
*/ 

function convertHTML(str) {
    
    // Regular expression
    const regEx = /&|<|>|"|'/g;

    // Matching regEx
    const matchings = [];
    // Indices of regEx chars
    const indexArr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(regEx)) {
            matchings.push(str[i]);
            indexArr.push(i);             
        }
    }

    // Generate converted chars in an array
    let convertedArr = matchings.map(char => {
        let converted;
        switch(char) {
            case "&":
                converted = "&amp;"; 
                break;
            case "<":
                converted = "&lt;";
                break;
            case ">":
                converted = "&gt;";
                break;
            case "\"":
                converted = "&quot;";
                break;
            case "'":
                converted = "&apos;";
                break;
            default: 
                converted = "XXX";
                break;
        }
        return converted;
    });
 
    // Initiate new string 
    let newStr = str.slice(0, indexArr[0]);

    for (let i = 0; i < matchings.length; i++) {
        newStr += convertedArr[i] + str.slice(indexArr[i] + 1, indexArr[i+1])
    }
    return newStr;   
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
