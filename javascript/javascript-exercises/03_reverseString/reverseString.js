const reverseString = function(word) {
    let reverseWord = "";
    for(let i = word.length; i >= 0; i--)
        reverseWord += word.charAt(i);
    return reverseWord;
    /*
    official solution:
    return string.split("").reverse().join("");    
    */ 
};

// Do not edit below this line
module.exports = reverseString;
