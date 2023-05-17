const hamburgIcon = document.getElementById('dropdown-icon');

hamburgIcon.addEventListener('mouseover', (e) => {
  e.target.nextElementSibling.classList.toggle('visible');
});

hamburgIcon.addEventListener('mouseout', (e) => {
  e.target.nextElementSibling.classList.toggle('visible');
})