
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e){
  e.preventDefault();
  CTA.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}

/*
CTA.onclick = reveal;
CTA.onclide = console.log("button was clicked");
*/

/*with event listener*/
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(){console.log("button was clicked")}, false);
