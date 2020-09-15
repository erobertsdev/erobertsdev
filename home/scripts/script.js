const menuButton = document.querySelectorAll('.menu-item'),
	menuCheckbox = document.querySelector('.menu-checkbox'),
	designCard = document.getElementById('design');

const projectRequest = {
	new: false,
	designCount: 0
};

for (let button of menuButton) {
	button.addEventListener('click', () => (menuCheckbox.checked = false));
}
