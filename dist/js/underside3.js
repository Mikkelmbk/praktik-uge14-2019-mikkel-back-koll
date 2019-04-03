document.addEventListener('DOMContentLoaded',()=>{

	// console.log(localStorage.getItem('guestBookData'));

	let formElement = document.querySelector('.form');
	let guestBookElement = document.querySelector('.guestBook');
	let guestBookArray = [];
	if(localStorage.getItem('guestBookData')){
		guestBookArray = JSON.parse(localStorage.getItem('guestBookData'));

		console.log(guestBookArray[0].name);
	}

	formElement.addEventListener('submit',(event)=>{
		event.preventDefault();

		guestBookArray.push({name:event.target.name.value, email:event.target.email.value, message:event.target.message.value});
	


		

		let guestBookArrayStringified = JSON.stringify(guestBookArray);

		localStorage.setItem('guestBookData',guestBookArrayStringified);
	})

	// setTimeout(()=>{

	// 	let pTestElement1 = document.createElement('p');
	// 	let pTestElement2 = document.createElement('p');
	// 	let pTestElement3 = document.createElement('p');

	// 	guestBookElement.appendChild(pTestElement1);
	// 	guestBookElement.appendChild(pTestElement2);
	// 	guestBookElement.appendChild(pTestElement3);



	// },1000)




}); // DOMContentLoaded Slutter