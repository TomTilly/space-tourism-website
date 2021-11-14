const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', (e) => {
  nav.classList.add('nav--active');
});

closeBtn.addEventListener('click', (e) => {
  nav.classList.remove('nav--active');
});