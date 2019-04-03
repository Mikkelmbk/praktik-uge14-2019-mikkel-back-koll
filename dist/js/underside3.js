document.addEventListener('DOMContentLoaded', () => {

	let emptyGuestBook = true;
	let formElement = document.querySelector('.form');
	let guestBookElement = document.querySelector('.guestBook');
	let guestBookArray = [];
	if (localStorage.getItem('guestBookData')) {
		guestBookArray = JSON.parse(localStorage.getItem('guestBookData'));
		emptyGuestBook = false;
	}
	let validateRequirements = 0;

	if(emptyGuestBook == true){


		let emptyGuestBookText = document.createElement('h3');

		guestBookElement.appendChild(emptyGuestBookText);

		emptyGuestBookText.innerHTML = "Gæstebogen er tom. Vær den første til at skrive!"
	}


	formElement.addEventListener('submit', (event) => {

		validateCounter(event);

	})
	function confirmValidation(event) {

		if (validateRequirements == 3) {
			emptyGuestBook = false;

			guestBookArray.push({ name: event.target.name.value, email: event.target.email.value, message: event.target.message.value });

			let guestBookArrayStringified = JSON.stringify(guestBookArray);

			localStorage.setItem('guestBookData', guestBookArrayStringified);
		}
		else{
			event.preventDefault();
		}
	}



	guestBookArray.forEach((guestBookCredentials, index) => {

		let guestBookboxElement = document.createElement('div');
		guestBookboxElement.classList.add('guestBookSeperator');
		guestBookElement.appendChild(guestBookboxElement);

		let guestNameElement = document.createElement('h3');
		guestBookboxElement.appendChild(guestNameElement);
		guestNameElement.innerHTML = guestBookArray[index].name;

		let guestEmailElement = document.createElement('h4');
		guestBookboxElement.appendChild(guestEmailElement);
		guestEmailElement.innerHTML = guestBookArray[index].email;

		let guestMessageElement = document.createElement('p');
		guestBookboxElement.appendChild(guestMessageElement);
		guestMessageElement.innerHTML = guestBookArray[index].message;
	})



	function validateCounter(event) {
		if (event.target.name.value != "" && isNaN(event.target.name.value)) {
			validateRequirements++;
		}
		else{
			event.target.name.style.backgroundColor = "red";
		}
		
		if (event.target.email.value != "" && validateEmail(event.target.email.value)) {
			validateRequirements++;
		
		}
		else{
			event.target.email.style.backgroundColor = "red";
		}
		if (event.target.message.value != "") {
			validateRequirements++;
		
		}
		else{
			event.target.message.style.backgroundColor = "red";
		}

		confirmValidation(event);
		validateRequirements = 0;
	}

	function validateEmail(email) {
		let re = /(.+)@(.+){2,}\.(.+){2,}$/; return re.test(String(email).toLowerCase());
	}
}); // DOMContentLoaded Slutter