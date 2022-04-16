let all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

let copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {
	copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThing) {
	if (buttonThing.value === "red") {
		buttonsRed();
	} else if (buttonThing.value === "green") {
		buttonsGreen();
	} else if (buttonThing.value === "reset") {
		buttonsColorReset();
	} else if (buttonThing.value === "random") {
		randomColors();
	}
}

function buttonsRed() {
	for (let i = 0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add("btn-danger");
	}
}

function buttonsGreen() {
	for (let i = 0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add("btn-success");
	}
}

function buttonsColorReset() {
	for (let i = 0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(copyAllButtons[i]);
	}
}

function randomColors() {
	let choices = [
		"btn-primary",
		"btn-danger",
		"btn-success",
		"btn-warning",
		"btn-dark",
		"btn-info",
		"btn-secondary",
	];
	for (let i = 0; i < all_buttons.length; i++) {
		let randomNumber = Math.floor(Math.random() * 6);
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(choices[randomNumber]);
	}
}
