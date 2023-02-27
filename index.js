let a = document.querySelectorAll("section[id]");
window.addEventListener('DOMContentLoaded', (event) => {
  a.forEach(function(e) {
    if ("#" + e.getAttribute("id") != '#about') {
      e.style.display = "none";
    }
    else {
      
      e.style.display = "block";
      var windowHeight = window.innerHeight;
      var elementTop = e.getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        console.log('elementTop: '+elementTop) 
        e.classList.add("active");
      }
    } 
  })
})

window.onhashchange = () => {
  a.forEach(function(e) {
    if ("#" + e.getAttribute("id") != location.hash) {
      e.style.display = "none";
      e.classList.remove("active");
    }
    else {
      
      e.style.display = "block";
      var windowHeight = window.innerHeight;
      var elementTop = e.getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        console.log('elementTop: '+elementTop)
        e.classList.add("active");
      }
    } 
  })
} 
/* Find all slideshow containers */
var slideshowContainers = document.getElementsByClassName("slideshow-container");
  var slideIndex = 0;
  var cycle
  var slides
  var dots
/* For each container get starting variables */
for(let s = 0; s < slideshowContainers.length; s++) {
  /* Read the new data attribute */        
  cycle = slideshowContainers[s].dataset.cycle;
  /* Find all the child nodes with class mySlides */
  slides = slideshowContainers[s].querySelectorAll('.mySlides');
  
  dots = slideshowContainers[s].querySelectorAll('.dot');
  /* Now we can cycle slides, but this recursive function must have parameters */
  /* slides and cycle never change, those are unique for each slide container */
  /* slideIndex will increase during each iteration */
  showSlides(slides, slideIndex, cycle,dots);
};

function currentSlide(index) {
  slideIndex = index;
  showSlides(slides, slideIndex, cycle,dots);
}
function plusSlides(step) {

  if(step < 0) {
    slideIndex -= 2;
    
    if(slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }

  showSlides(slides, slideIndex, cycle,dots);
}

/* Function is alsmost same, but now it uses 3 new parameters */
function showSlides(slides, slideIndex, cycle,dots) {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  };
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  };
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.add('active');
  /* Calling same function, but with new parameters and cycle time */
  setTimeout(function() {
    showSlides(slides, slideIndex, cycle,dots)
  }, cycle);
};
/*

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

const sections = Array.from(document.querySelectorAll('section'));
console.log(sections)
for (let section of sections) {
   const children = section.getElementsByClassName('fade-delay');
  for (let count = 0; count < children.length; count++) {
    children[count].setAttribute('style', 'transition-delay: ' + count * 0.5 + 's');
  }
  observer.observe(section);
} 
});*/
 
/**/