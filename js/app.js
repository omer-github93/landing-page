/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

var sections = document.querySelectorAll("section");
var ul = document.querySelector("#navbar__list");
var li = ''
var a ='';

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// active class helper function
const activateClassFunc = (e) => {
    for (var i = 0; i < activeclass.length; i++) {
        activeclass[i].classList.remove('active');
    }
    e.target.classList.add('active');
}

// When the user clicks on the button, scroll to the top of the document
const backToTopFunc = (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//  when user scrolls after initial scroll is greater than 100 button appears, else which is less than 100 button disappers
const scrollToTopFunc = (e) => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";

  }
}


setTimeout(function(){ ul.style.display = "none"; }, 1000);

// scroll section function
const scrollSectionFunc = () => {
  var currentScrollPos = window.pageYOffset;
	// when previous scroll is greater than current 
  if (prevScrollpos > currentScrollPos) {
  		ul.style.display = "block";
  		 ul.style.backgroundColor = "transparent";
  } else if (prevScrollpos < currentScrollPos) {
  	 ul.style.display = "block";
  	 ul.style.backgroundColor = "rgba(50, 115, 220, 0.3)";	
  } 

  prevScrollpos = currentScrollPos;

}

// Mobile Navigation Menu functions for open nav and close nav
const openNav = () => {
  document.getElementById("navbar__list").style.width = "250px";
  document.getElementById("main__content").style.marginLeft = "250px";
}

const closeNav = () => {
  document.getElementById("navbar__list").style.width = "0";
  document.getElementById("main__content").style.marginLeft= "0";
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (var i = 0; i < sections.length; i++) {

	li = document.createElement('li');
	a = document.createElement('a');

	sections[i].classList.add('your-active-class');

	li.classList.add('navbar__list__item');

	// li.appendChild(document.createTextNode(sections[i]));
	ul.appendChild(li);
	li.appendChild(a);

	// a.textContent = sections[i].getAttribute('data-nav');
	a.innerHTML = sections[i].getAttribute('data-nav');

	li.setAttribute("style","padding: 20px;");

	a.setAttribute("href", "#section"+(i+1));

	a.setAttribute("style","text-decoration:none; color:#FFF;");

}


// Add class 'active' to section when near top of viewport
// Styling has been added for active states.

var activeclass = document.querySelectorAll('#navbar__list li a');
   for (var i = 0; i < activeclass.length; i++) {
    activeclass[i].addEventListener('click', activateClassFunc);
}

// Scroll to anchor ID using scrollTO event

// scrolling effect for sections and scroll to top
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	scrollSectionFunc();
	scrollToTopFunc();
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Back top top

var btnBackToTop = document.createElement("button");
btnBackToTop.innerHTML = '<i class="fa fa-arrow-up" aria-hidden="true"></i>';
btnBackToTop.classList.add("btn__top");
document.querySelector("main").appendChild(btnBackToTop);

// back to top button click trigger to call backToTopFunc
btnBackToTop.addEventListener("click", backToTopFunc);


// back to top button click remove active class from list items
btnBackToTop.addEventListener("click", (e) => {
	e.preventDefault();
	 for (var i = 0; i < activeclass.length; i++) {
        activeclass[i].classList.remove('active');
    }
});



// navigation toggle for mobile 
var sidebarMenuOpenBtn = document.createElement("button");

var sidebarMenuCloseBtn = document.createElement("button");

sidebarMenuOpenBtn.classList.add("openbtn");
sidebarMenuOpenBtn.innerHTML = "☰";
var navbar__menu = document.querySelector(".navbar__menu");
navbar__menu.appendChild(sidebarMenuOpenBtn);

sidebarMenuOpenBtn.addEventListener("click", (e) => {
	e.preventDefault();
	openNav();
});

var sidebarMenuCloseBtn = document.createElement("button");
sidebarMenuCloseBtn.classList.add("closebtn");
sidebarMenuCloseBtn.innerHTML = "x";

ul.appendChild(sidebarMenuCloseBtn);

sidebarMenuCloseBtn.addEventListener("click", (e) => {
	e.preventDefault();
	closeNav();
});



