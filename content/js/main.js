// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuNav.addEventListener('click', hideMenuOnClick);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        //set Menu state
        showMenu = true;
    } else {

        hideMenuOnClick();
    }
}

function hideMenuOnClick() {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));

    //set Menu state
    showMenu = false;
}

//get full year for footer
function getFullYear() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("copyright-year").innerHTML = year;
}
//execute function to display year in footer
getFullYear();