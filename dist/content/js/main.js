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
window.onscroll = function() { on_scroll() };
$(document).ready(function() {
    $(document).on("scroll", onScroll);
});
$(".link").click(function() {

    // Select all list items 
    var listItems = $(".link");

    // Remove 'active' tag for all list items 
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active");
    }

    // Add 'active' tag for currently selected item 
    this.classList.add("active");
});

function on_scroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar-center").className = "navbar-on-scroll";

    } else {
        document.getElementById("navbar-center").className = "";
    }
}

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#navbar-center a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar-center a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
// Add active class to the current button (highlight it)
// var header = document.getElementById("navbar-center");
// var btns = header.getElementsByClassName("link");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

//
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