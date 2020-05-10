/*
<div class="cta">
    <a href="#">Book Now!</a>
</div><!-- .cta -->
*/

const CTAELEMENT = document.querySelector(".cta a");
if(CTAELEMENT.hasAttribute("target")){
  console.log(CTAELEMENT.getAttribute("target"));
} else {
  CTAELEMENT.setAttribute("target", "_blank");
}
console.log(CTAELEMENT.attributes);

//<a href="#" targer = "_blank">Book Now!</a>
