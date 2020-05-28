const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, current) {
    e.preventDefault();
    //CTA.classList.toggle("hide");
    //ALERT.classList.toggle("hide");

    current.innerHTML == 'Book Now!' ? CTA.innerHTML = 'Ooooops!' : CTA.innerHTML = 'Book Now!';
}

//CTA.addEventListener('click', reveal, false);
CTA.addEventListener('click', function(e){reveal(e,this);}, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
