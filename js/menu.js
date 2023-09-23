let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mob-menu-ul');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('btn-active');
	menu.classList.toggle('menu-active');
})