const menuButton = document.querySelectorAll('.menu-item');
const menuCheckbox = document.querySelector('.menu-checkbox');
const js30 = document.querySelector('.js-projects');
const js30btn = document.getElementById('js30-btn');
const projectCards = document.querySelectorAll('.js-project');
let grown = false;

for (let button of menuButton) {
	button.addEventListener('click', () => (menuCheckbox.checked = false));
}

js30btn.addEventListener('click', () => {
	if (!grown) {
		js30btn.textContent = 'Close';
		grown = true;
	} else {
		js30btn.textContent = 'Insert Coin';
		grown = false;
	}
	js30.classList.toggle('grow');
	for (let project of projectCards) {
		project.classList.toggle('hide');
		project.classList.toggle('project-fade-in');
	}
});
