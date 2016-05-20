

// Cache Dom

var navTrigger = $('.nav__trigger');
var nav = $('.nav');


// Function

function toggleMenu(event) {

	event.preventDefault();
	nav.toggleClass('nav--open');
}

// Bind Function

navTrigger.on('click', toggleMenu);