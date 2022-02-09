document.querySelector('.menu__burger').addEventListener('click', function () {
	document.querySelector('.menu__burger').classList.toggle('active');
	document.querySelector('.menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');

});
