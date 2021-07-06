const mainNav = document.querySelector('.main-nav');
const mainNavButton = document.querySelector('.main-nav__button');
const buttonBurger = document.querySelector('.button-burger');

mainNavButton.onclick = function() {
	buttonBurger.classList.toggle('button-burger--open');
	mainNav.classList.toggle('main-nav--closed');
}
