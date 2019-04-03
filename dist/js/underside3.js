document.addEventListener('DOMContentLoaded',()=>{

	let formElement = document.querySelector('.form');
	let guestBookElement = document.querySelector('.guestBook');
	let guestBookArray = [];
	if(localStorage.getItem('guestBookData')){
		guestBookArray = JSON.parse(localStorage.getItem('guestBookData'));

		console.log(guestBookArray);
	}

	formElement.addEventListener('submit',(event)=>{

		guestBookArray.push({name:event.target.name.value, email:event.target.email.value, message:event.target.message.value});
	
		let guestBookArrayStringified = JSON.stringify(guestBookArray);

		localStorage.setItem('guestBookData',guestBookArrayStringified);
	})

	guestBookArray.forEach((guestBookCredentials,index)=>{
		console.log(guestBookCredentials);
		let guestNameElement = document.createElement('h3');
		guestBookElement.appendChild(guestNameElement);
		guestNameElement.innerHTML = guestBookArray[index].name;

		let guestEmailElement = document.createElement('h4');
		guestBookElement.appendChild(guestEmailElement);
		guestEmailElement.innerHTML = guestBookArray[index].email;

		let guestMessageElement = document.createElement('p');
		guestBookElement.appendChild(guestMessageElement);
		guestMessageElement.innerHTML = guestBookArray[index].message;
	})





}); // DOMContentLoaded Slutter