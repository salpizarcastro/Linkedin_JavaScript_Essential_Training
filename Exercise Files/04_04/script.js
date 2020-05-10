function findBiggestFraction(a,b) {
    //a>b ? console.log("a: ", a) : console.log("b: ", b);
    a > b ? result = ["firts", a] : result = ["second", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var result = findBiggestFraction(firstFraction,secondFraction);
console.log(result);
