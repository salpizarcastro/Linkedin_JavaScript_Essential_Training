/*
function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	return sum;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);


function doSomeMath() {
	var a = 5;
	var b = 4;
	function multiply(){
		var result = 4 * 5;
		return result;
	}

	return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);
console.log("The result: ", theResult());
console.log("The result: ", doSomeMath()());
*/

function giveMeEms(pixel){
	var baseValue = 16;
	function doTheMath(){
		return pixel / baseValue;
	}
	return doTheMath;
}
var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);

console.log(smallSize());
console.log(mediumSize());
