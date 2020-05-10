/*
function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");
*/

var a = 5/7;
var b = 18/25;
var theBiggest = function(){
  var result;
  a>b ? result = ["a", a] : result = ["b", b];
  //return result;
  console.log(result);
}
