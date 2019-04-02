document.addEventListener('DOMContentLoaded',()=>{

	let galleryContainerElement = document.querySelector('.galleryContainer');
	let galleryDataElement = document.querySelector('.gallery-data');
	let dataUrlElements = galleryDataElement.querySelectorAll('div');

	if(dataUrlElements.length != 0){

		galleryContainerElement.style.display = "flex";
		galleryContainerElement.style.flexDirection = "column";
		galleryContainerElement.style.alignItems = "center";

		let imageIndex = 0;
		let currentImageElement = galleryContainerElement.querySelector('#current-image');
		let dataArray = [];
		let nextSlideBtnElement = galleryContainerElement.querySelector('#btn-next-image');
		let prevSlideBtnElement = galleryContainerElement.querySelector('#btn-prev-image');
		let imageCountElement = galleryContainerElement.querySelector('.imageCount');
		let imageTitleElement = galleryContainerElement.querySelector('.imageTitle');



		
		dataUrlElements.forEach((dataUrlElement)=>{
	
			dataArray.push({url:dataUrlElement.dataset.url, title:dataUrlElement.dataset.title});

		})



		updateSource();
		imageCount();

		nextSlideBtnElement.addEventListener('click',()=>{
			imageIndex++;
			if(imageIndex >= dataArray.length){
				imageIndex = 0;
			}
			imageCount();
			updateSource();
		});

		prevSlideBtnElement.addEventListener('click',()=>{
			imageIndex--;
			if(imageIndex < 0){
				imageIndex = dataArray.length -1;
			}
			imageCount();
			updateSource();
		})



		function updateSource(){
			if(dataArray.length != 0){
				currentImageElement.src = dataArray[imageIndex].url;
				}
		}

		function imageCount(){
			imageCountElement.innerHTML = imageIndex+1 + "/" + dataArray.length;
			imageTitleElement.innerHTML = dataArray[imageIndex].title;
		}
	}



}); // DOMContentLoaded Slutter