document.addEventListener('DOMContentLoaded', () => {

	let mainElement = document.querySelector('.main');
	let galleryContainerElement = document.querySelector('.galleryContainer');
	let galleryDataElement = document.querySelector('.gallery-data');
	let dataUrlElements = galleryDataElement.querySelectorAll('div');

	

	if (dataUrlElements.length != 0) {

		galleryContainerElement.style.display = "flex";
		galleryContainerElement.style.flexDirection = "column";
		galleryContainerElement.style.alignItems = "center";

		

		let imageIndex = 0;
		if(localStorage.getItem('imageIndexReached')){
			imageIndex = JSON.parse(localStorage.getItem('imageIndexReached'));
		}
		let currentImageElement = galleryContainerElement.querySelector('#current-image');
		let dataArray = [];
		let nextSlideBtnElement = galleryContainerElement.querySelector('#btn-next-image');
		let prevSlideBtnElement = galleryContainerElement.querySelector('#btn-prev-image');
		let slideShowBtnElement = galleryContainerElement.querySelector('#btn-slideshow-image');
		let imageCountElement = galleryContainerElement.querySelector('.imageCount');
		let imageTitleElement = galleryContainerElement.querySelector('.imageTitle');
		let setIntervalByClick;

		
		dataUrlElements.forEach((dataUrlElement) => {
			dataArray.push({ url: dataUrlElement.dataset.url, title: dataUrlElement.dataset.title });
		});



		updateSource();
		imageCount();

		nextSlideBtnElement.addEventListener('click', () => {
			nextSlide();
			imageCount();
			updateSource();
			ifNotUndefinedCallStopIntervalByBtn();
		});

		prevSlideBtnElement.addEventListener('click', () => {
			imageIndex--;
			if (imageIndex < 0) {
				imageIndex = dataArray.length - 1;
			}
			ifNotUndefinedCallStopIntervalByBtn();
			imageCount();
			updateSource();
		});


		slideShowBtnElement.addEventListener('click', () => {
			if (typeof (setIntervalByClick) == "undefined") {
				setIntervalByClick = setInterval(() => {
					nextSlide();
					imageCount();
					updateSource();
				}, 2000);
				slideShowBtnElement.classList.toggle('slideshowBtnColorChange');
			}
			else{
				ifNotUndefinedCallStopIntervalByBtn();
				slideShowBtnElement.classList.toggle('slideshowBtnColorChange');
			}
		});

		function updateSource() {
			if (dataArray.length != 0) {
				currentImageElement.src = dataArray[imageIndex].url;
				let imageIndexStringified = JSON.stringify(imageIndex);
				localStorage.setItem('imageIndexReached',imageIndexStringified);
			}
		};

		function imageCount() {
			imageCountElement.innerHTML = imageIndex + 1 + "/" + dataArray.length;
			imageTitleElement.innerHTML = dataArray[imageIndex].title;
		};

		function nextSlide() {
			imageIndex++;
			if (imageIndex >= dataArray.length) {
				imageIndex = 0;
			};
		};

		function ifNotUndefinedCallStopIntervalByBtn() {
			if (setIntervalByClick !== undefined) {
				stopIntervalByBtn(setIntervalByClick);
			}
		}

		function stopIntervalByBtn(intervalToBeCleared) {
			clearInterval(intervalToBeCleared);
			setIntervalByClick = undefined;
		}
	}

	else{
		mainElement.innerHTML = "Der er Desværre ingen Billeder at vise";
	}





}); // DOMContentLoaded Slutter