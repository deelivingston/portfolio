// selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

//attaching click listeners
let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();    // the button was trying to submit

	let emailVal = emailElement.value;
	let messageVal = messageElement.value;
});