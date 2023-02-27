const repeatString = function(word, num) {
    if(num < 0) return "ERROR";
    let phrase =  "";
    for(let i = 0; i < num; i++){
        phrase += word;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
