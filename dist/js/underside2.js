document.addEventListener('DOMContentLoaded',()=>{

	fetch("data/medarbejdere.json")
	.then((promise)=>{
		return promise.json();
	})
	.then((medarbejderData)=>{
		console.log(medarbejderData);

		let employeeFotoElement = document.querySelector('.employeeFoto');
		let employeeNameElement = document.querySelector('.employeeName');
		let employeeJobTitleElement = document.querySelector('.employeeJobTitle');
		let employeeInfoElement = document.querySelector('.employeeInfo');

		
	})



});  // DOMContentLoaded Slutter