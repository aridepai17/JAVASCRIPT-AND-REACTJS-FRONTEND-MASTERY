/* Create a function that takes a string as the argument. The function must return a string
containing 1s and 0s based on the string argument's words. If any word in the argument is not 
equal to "zero" or "one", you should ignore it. The returned string's length should be a multiple of 
8. If the string is not a multiple of 8, you should remove the numbers in excess. */

function convertToBinary(str) {
    const words = str.split(" ").filter( word => word.toLowerCase() === "zero" || word.toLowerCase() === "one");
    console.log(words);
    let binaryString = words.map(word => {
        return word.toLowerCase() === 'one' ? '1' : '0';
    }).join('');

    const excesslength = binaryString.length % 8;
    if (excesslength !== 0) {
        binaryString = binaryString.slice(0,0)
    }
    return binaryString;
    console.log(binaryString);
}

// Test the function
console.log(convertToBinary("zero one zero one zero one zero one")); // 01010101