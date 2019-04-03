document.addEventListener('DOMContentLoaded', () => {

	let divProductsElement = document.querySelector('#products');
	let divHtmlTemplateElement = document.querySelector('#html-template .product');
	let divProductElement;

	fetch("data/medarbejdere.json")
		.then((promise) => {
			return promise.json();
		})
		.then((employeeInformations) => {

			employeeInformations.forEach((employeeInformation) => {

				divProductElement = divHtmlTemplateElement.cloneNode(true);
				divProductsElement.appendChild(divProductElement);

				divProductElement.querySelector('.employeeFoto').src = employeeInformation.employeeFoto;
				divProductElement.querySelector('.employeeName').innerHTML = employeeInformation.employeeName;
				divProductElement.querySelector('.employeeJobTitle').innerHTML = employeeInformation.employeeJobTitle;
				divProductElement.querySelector('.employeeInfo').innerHTML = employeeInformation.employeeInfo;

				console.log(divProductElement);


			});



		})



});  // DOMContentLoaded Slutter