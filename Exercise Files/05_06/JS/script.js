/*
<div class="top-pitch centered">
    <figure class="featured-image">
        <img src="images/testimonials/bluepebble.jpg" alt="Earthrise: A photograph of the Earth and parts of the Moon's surface taken by astronaut William Anders in 1968, during the Apollo 8 mission.">
    </figure>
    <h2 class="main-title">A New Perspective on Earth</h2>
    <p class="teaser two-column">
        Coming to Moonwalk Manor you'll have the still-unique experience of seeing an earthrise; our home planet rising above the horizon like a foreign planet. Nothing will make you feel more homesick than seeing a blue pebble in space and knowing everyone you know and love are over there, and you're over here playing in microgravity.
    </p>
</div><!-- .pitch centered -->
*/

const FEATURE = document.querySelector(".featured-image");
const THEIMAGE = FEATURE.querySelector("img");
var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figCaption");
//var captionText = document.createTextNode(altText);
//captionElement.appendChild(captionText);
//console.log(captionElement);
//FEATURE.appendChild(captionElement);
//New
captionElement.append(altText);
FEATURE.append(captionElement);
//
THEIMAGE.setAttribute("alt", "");
