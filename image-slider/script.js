const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');

const dotsArray = [...dots];

const totalSlides = slides.length;

let currentIndex = 0;

function changeImage(direction) {
  if (direction === 'next') {
    currentIndex++;
    if (currentIndex === totalSlides) {
     currentIndex = 0;
    } 
  } else {
    currentIndex--;
    if (currentIndex === -1) {
      currentIndex = totalSlides - 1;
    }
  }

  for (let i = 0; i < totalSlides; i++) {
    slides[i].classList.remove('showing');
  }
  slides[currentIndex].classList.add('showing');

  for (let i = 0; i < totalSlides; i++) {
    dots[i].classList.remove('active');
  }
  dots[currentIndex].classList.add('active');
}

dotsArray.forEach(element => {
  element.addEventListener('click', () => {
    currentIndex = element.getAttribute('data-index');
    for (let i = 0; i < totalSlides; i++) {
      slides[i].classList.remove('showing');
    }
    slides[currentIndex].classList.add('showing');
  
    for (let i = 0; i < totalSlides; i++) {
      dots[i].classList.remove('active');
    }
    dots[currentIndex].classList.add('active');
  })
})

nextBtn.addEventListener('click', () => {
  console.log(currentIndex);
  changeImage('next');
});

prevBtn.addEventListener('click', () => {
  changeImage('prev');
})