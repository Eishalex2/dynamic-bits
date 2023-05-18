const content = document.getElementById('content');
const currentTab = document.getElementById('current');

const homeIcon = document.querySelector('.home');;
const searchIcon = document.querySelector('.search');
const addIcon = document.querySelector('.add');
const userIcon = document.querySelector('.user');

const searchbar = document.getElementById('searchbar');

function changeTab(icon, className) {
  icon.addEventListener('click', () => {
    currentTab.setAttribute('class', className);
    if (icon === searchIcon) {
      searchbar.style.display = 'block';
    } else {
      searchbar.style.display = 'none';
    }
  })
}

changeTab(homeIcon, 'home-line');
changeTab(searchIcon, 'search-line')
changeTab(addIcon, 'add-line');
changeTab(userIcon, 'user-line');