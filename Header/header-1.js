// ====== Header 1 =====
const navmenuBtn = document.getElementById('navmenuBtn');
const navmenuBtnIcon = document.querySelector('#navmenuBtn i');
const navmenu = document.getElementById('navmenu');

const showNavmenu = () => {
  if (navmenu.classList.contains('left-[-100%]')) {
    navmenu.classList.remove('left-[-100%]');
    navmenu.classList.add('left-[20%]');
    navmenuBtnIcon.classList.remove('ri-menu-2-line');
    navmenuBtnIcon.classList.add('ri-close-fill');
  } else {
    navmenu.classList.remove('left-[20%]');
    navmenu.classList.add('left-[-100%]');
    navmenuBtnIcon.classList.remove('ri-close-fill');
    navmenuBtnIcon.classList.add('ri-menu-2-line');
  }
};
navmenuBtn.addEventListener('click', showNavmenu);
