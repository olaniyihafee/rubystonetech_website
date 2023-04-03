/************************************************ form 1 ************************************************/
var f1slideshowContainers = document.getElementsByClassName("f1");
var f1slideIndex = 0;
var cycle
var f1slides
var dots
for(let s = 0; s < f1slideshowContainers.length; s++) {
    f1slides = f1slideshowContainers[s].querySelectorAll('.myForms');
    console.log(f1slides) 
    
    f1showSlides(f1slides, f1slideIndex, dots);
};
 
function f1currentSlide(index) {
    f1slideIndex = index;
    f1showSlides(f1slides, f1slideIndex, dots);
}
function f1plusSlides(step) {
    console.log('It entered here '+step)
    if(step < 0) {
        console.log('It entered first if '+step)
        f1slideIndex += 1;
    
    if(f1slideIndex < 0) {
        console.log('It entered second if '+step)
        f1slideIndex = f1slides.length - 1;
    }
    }

    f1showSlides(f1slides, f1slideIndex, dots);
}
function f1showSlides(f1slides, f1slideIndex ,dots ) {
    for (i = 0; i < f1slides.length; i++) {
        f1slides[i].style.display = "none"; 
    };
    f1slideIndex++;
    if (f1slideIndex > f1slides.length) {
        f1slideIndex = 1
    };
    f1slides[f1slideIndex - 1].style.display = "flex";
}; 




/************************************** form 2 ***********************************************/
var f2slideshowContainers = document.getElementsByClassName("f2");
var f2slideIndex = 0;
var cycle
var f2slides
var dots
for(let s = 0; s < f2slideshowContainers.length; s++) {
    f2slides = f2slideshowContainers[s].querySelectorAll('.myForms');
    console.log(f2slides) 
    
    f2showSlides(f2slides, f2slideIndex, dots);
};
 
function f2currentSlide(index) {
    f2slideIndex = index;
    f2showSlides(f2slides, f2slideIndex, dots);
}
function f2plusSlides(step) {
    console.log('It entered here '+step)
    if(step < 0) {
        console.log('It entered first if '+step)
        f2slideIndex += 1;
    
    if(f2slideIndex < 0) {
        console.log('It entered second if '+step)
        f2slideIndex = f2slides.length - 1;
    }
    }

    f2showSlides(f2slides, f2slideIndex, dots);
}
function f2showSlides(f2slides, f2slideIndex ,dots ) {
    for (i = 0; i < f2slides.length; i++) {
        f2slides[i].style.display = "none"; 
    };
    f2slideIndex++;
    if (f2slideIndex > f2slides.length) {
        f2slideIndex = 1
    };
    f2slides[f2slideIndex - 1].style.display = "flex";
}; 