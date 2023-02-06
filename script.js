// for sticky navbar
window.onscroll = function() {stickyNavigation()}

const navbar = document.getElementById('navbar')
const sticky = navbar.offsetTop

const stickyNavigation = (() => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
})

// FAQ accordion
document.querySelectorAll('.question').forEach((question) => question.addEventListener('click', () => {

  // Open accordion item
  if(question.parentNode.classList.contains("active")) {

    question.parentNode.classList.toggle("active")

  //Close accordion item 
  } else {
    document.querySelectorAll('.question').forEach(question => question.parentNode.classList.remove('active'))

    question.parentNode.classList.add("active")
  }

}))

// for hamburger menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger= document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// animation scroll

function reveal() {
  const reveals = document.querySelectorAll(".reveal")

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

