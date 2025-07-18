//======= Header 2 =======
const navmenuBtn = document.getElementById('navmenuBtn');
const navmenu = document.getElementById('navmenu');
const closeMenu = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

const showNavmenu = () => {
  navmenu.classList.remove('left-[-100%]');
  navmenu.classList.add('left-0');
  menuOverlay.classList.remove('hidden');
};

const closeNavmenu = () => {
  navmenu.classList.remove('left-0');
  navmenu.classList.add('left-[-100%]');
  menuOverlay.classList.add('hidden');
};

navmenuBtn.addEventListener('click', showNavmenu);
closeMenu.addEventListener('click', closeNavmenu);
menuOverlay.addEventListener('click', closeNavmenu);

// search bar
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const closeSearchBarBtn = document.getElementById('closeSearchBar');
const searchOverlay = document.getElementById('searchOverlay');

const showSearchBar = () => {
  searchBar.classList.remove('top-[-100%]');
  searchBar.classList.add('top-0');
  searchOverlay.classList.remove('hidden');
};

const closeSearchBar = () => {
  searchBar.classList.remove('top-0');
  searchBar.classList.add('top-[-100%]');
  searchOverlay.classList.add('hidden');
};

// Escape key to close search bar
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSearchBar();
  }
});

closeSearchBarBtn.addEventListener('click', closeSearchBar);
searchBtn.addEventListener('click', showSearchBar);
searchOverlay.addEventListener('click', closeSearchBar);
