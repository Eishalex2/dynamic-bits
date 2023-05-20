const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides = document.getElementsByClassName('slide');

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
}

nextBtn.addEventListener('click', () => {
  console.log(currentIndex);
  changeImage('next');
});

prevBtn.addEventListener('click', () => {
  changeImage('prev');
})