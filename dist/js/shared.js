document.addEventListener('DOMContentLoaded',()=>{

	fetch("partials/Nav_and_footer_partialfile.html")
	.then((promise)=>{
		return promise.text();
	})
	.then((data)=>{

		let headerElement = document.querySelector('.header');

		let partialDataContainer = document.createElement('div');

		partialDataContainer.innerHTML = data;

		headerElement.innerHTML = partialDataContainer.querySelector('.partialHeader').innerHTML;

		let footerElement = document.querySelector('.footer');

		footerElement.innerHTML = partialDataContainer.querySelector('.partialFooter').innerHTML;

	})

	let changeThemeByBtnElement = document.querySelector('.main__changeThemeBtn');

	let themeChangerLinkElement = document.querySelector('#themeChanger');

	changeThemeByBtnElement.addEventListener('click',()=>{
		if(themeChangerLinkElement.dataset.theme == "light"){
			themeChangerLinkElement.href = "css/lightTheme.css";
			themeChangerLinkElement.dataset.theme = "dark";
		}
		else if(themeChangerLinkElement.dataset.theme == "dark"){
			themeChangerLinkElement.href = "css/darkTheme.css";
			themeChangerLinkElement.dataset.theme = "light";
		}

	})



}); // DOMContentLoaded Slutter