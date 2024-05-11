// Access toggle switch HTML element

const themeSwitcher = document.querySelector('#theme-switcher');
//Access body element from HTML files
const body = document.querySelector('body');

//Function to switch the body attributes from light to dark

function toggleDarkMode() {
  body.classList.toggle("dark");
}
//add Event listener so that the theme switch happens when the toggle button if clicked

themeSwitcher.addEventListener('click', toggleDarkMode);