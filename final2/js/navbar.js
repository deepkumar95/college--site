  var navButton = document.querySelector('.navigation-button');
	var navMenu = document.querySelector('.navigation-menu');
	var win = window;

	function openMenu(event) {
  	navButton.classList.toggle('active');
  	navMenu.classList.toggle('active');
    navMenu.classList.remove('d-none');


  	event.preventDefault();
  	event.stopImmediatePropagation();
}
  
function closeMenu(event) {
  if (navButton.classList.contains('active')) {
    navButton.classList.remove('active');
    navMenu.classList.remove('active');
    navMenu.classList.add('d-none');
    

  }
}
  navButton.addEventListener('click', openMenu, false);

win.addEventListener('click',closeMenu, false);
    