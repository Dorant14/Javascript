var slideIndex = 1;

function showSlides(n){
    var slides = document.getElementsByClassName("slide");

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";   
    }

    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slidesIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block";

}

showSlides(1);

function changeSlides(n){
    slideIndex+=n;
    showSlides(slideIndex);
}

setInterval(changeSlides, 3000, 1);