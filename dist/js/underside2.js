document.addEventListener('DOMContentLoaded', () => {


	fetch("data/medarbejdere.json")
		.then((promise) => {
			return promise.json();
		})
		.then((employeeInformations) => {

			console.log(employeeInformations.length);
			if (employeeInformations.length > 0) {

				let divProductsElement = document.querySelector('#products');
				let divHtmlTemplateElement = document.querySelector('#html-template .product');
				let divProductElement;

				employeeInformations.forEach((employeeInformation) => {

					divProductElement = divHtmlTemplateElement.cloneNode(true);
					divProductsElement.appendChild(divProductElement);

					divProductElement.querySelector('.employeeFoto').src = employeeInformation.employeeFoto;
					divProductElement.querySelector('.employeeName').innerHTML = employeeInformation.employeeName;
					divProductElement.querySelector('.employeeJobTitle').innerHTML = employeeInformation.employeeJobTitle;
					divProductElement.querySelector('.employeeInfo').innerHTML = employeeInformation.employeeInfo;

					console.log(divProductElement);


				});
			}
			else{
				let mainElement = document.querySelector('.main');

				let emptySiteTextElement = document.createElement('p');

				mainElement.appendChild(emptySiteTextElement);

				emptySiteTextElement.innerHTML = "Medarbejder side kommer snart";

				// mainElement.innerHTML = "Medarbejder side kommer snart";

			}


		})



});  // DOMContentLoaded Slutter