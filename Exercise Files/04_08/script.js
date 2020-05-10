/*
const MYCONSTANT = 5;
console.log(MYCONSTANT);
MYCONSTANT = 6;


function logScope(){
  var localVar = 2;

  if(localVar){
    var localVar = 'Im different!';
    console.log('nested LocalVar:', localVar);
  }

  console.log("logScope localVar", localVar);
}
logScope();
*/


function logScope(){
  let localVar = 2;

  if(localVar){
    let localVar = 'Im different!';
    console.log('nested LocalVar:', localVar);
  }

  console.log("logScope localVar", localVar);
}
logScope();
