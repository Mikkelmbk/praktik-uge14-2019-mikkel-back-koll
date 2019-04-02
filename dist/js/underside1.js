document.addEventListener('DOMContentLoaded',()=>{

	let galleryContainerElement = document.querySelector('.galleryContainer');
	let galleryDataElement = document.querySelector('.gallery-data');
	let dataUrlElements = galleryDataElement.querySelectorAll('div');

	if(dataUrlElements.length != 0){

		galleryContainerElement.style.display = "flex";
		galleryContainerElement.style.flexDirection = "column";

		let imageIndex = 0;
		let currentImageElement = galleryContainerElement.querySelector('#current-image');
		let dataArray = [];
		let nextSlideBtnElement = galleryContainerElement.querySelector('#btn-next-image');
		let prevSlideBtnElement = galleryContainerElement.querySelector('#btn-prev-image');

		dataUrlElements.forEach((dataUrlElement)=>{
			dataArray.push(dataUrlElement.dataset.url);
		})

		updateSource();

		nextSlideBtnElement.addEventListener('click',()=>{
			imageIndex++;
			if(imageIndex >= dataArray.length){
				imageIndex = 0;
			}
			updateSource();
		});

		prevSlideBtnElement.addEventListener('click',()=>{
			imageIndex--;
			if(imageIndex < 0){
				imageIndex = dataArray.length -1;
			}
			updateSource();
		})



		function updateSource(){
			if(dataArray.length != 0){
				currentImageElement.src = dataArray[imageIndex];
				}
		}

	}


}); // DOMContentLoaded Slutter