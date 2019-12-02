const menuButton = document.querySelectorAll('.menu-item');
const menuCheckbox = document.querySelector('.menu-checkbox');

for (let button of menuButton) {
	button.addEventListener('click', () => (menuCheckbox.checked = false));
}
