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

// designCard.addEventListener('click', () => {
// 	switch (projectRequest.designCount) {
// 		case 0:
// 			designCard.innerHTML = `<h3 class="card-transition">STEP 1</h3>`;
// 			projectRequest.designCount++;
// 			break;
// 		case 1:
// 			designCard.innerHTML = `<h3 class="card-transition">STEP 2</h3>`;
// 			projectRequest.designCount++;
// 			break;
// 		case 2:
// 			designCard.innerHTML = `<h3 class="card-transition">STEP 3</h3>`;
// 			projectRequest.designCount++;
// 			break;
// 		case 3:
// 			designCard.innerHTML = `<h3 class="card-transition">STEP 4</h3>`;
// 			projectRequest.designCount++;
// 			break;
// 		case 4:
// 			designCard.innerHTML = `<h3 class="card-transition">STEP 5</h3>`;
// 			projectRequest.designCount++;
// 			break;
// 	}
// });
