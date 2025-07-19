const heroImg = document.getElementById('hero-img');
const heroBtn = document.getElementById('hero-btn');
const heroPara = document.getElementById('hero-para');
const heroHead = document.getElementById('hero-head');

window.addEventListener('load', () => {
  heroImg.classList.remove('opacity-0', 'translate-y-10');
  heroBtn.classList.remove('opacity-0', 'translate-x-10');
  heroHead.classList.remove('opacity-0', '-translate-x-10');
  heroPara.classList.remove('opacity-0', '-translate-y-10');
});
