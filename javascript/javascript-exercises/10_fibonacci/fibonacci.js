const fibonacci = function(x) {
    if(x < 0) return "oops";
    if(count === 0) return 0;
    let a = 0, b = 1;
    for(let i = 0; i < x; i++){
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
