const advantagesItems = document.querySelectorAll('.advantages__item');
const advantagesToggles = document.querySelectorAll('.advantages__toggles .slider__toggle');
const reviewsItems = document.querySelectorAll('.reviews__item');
const reviewsToggles = document.querySelectorAll('.reviews__toggles .slider__toggle');

advantagesToggles.forEach(function(el, i) {
	el.onclick = function() {
		for (let advantagesToggle of advantagesToggles) {
			advantagesToggle.classList.remove('slider__toggle--active')
		};
		el.classList.add('slider__toggle--active');

		for (let advantagesItem of advantagesItems) {
			advantagesItem.classList.remove('slider__item--show')
		};
		advantagesItems[i].classList.add('slider__item--show');
	};
});

reviewsToggles.forEach(function(el, i) {
	el.onclick = function() {
		for (let reviewsToggle of reviewsToggles) {
			reviewsToggle.classList.remove('slider__toggle--active')
		};
		el.classList.add('slider__toggle--active');

		for (let reviewsItem of reviewsItems) {
			reviewsItem.classList.remove('slider__item--show')
		};
		reviewsItems[i].classList.add('slider__item--show');
	};
});
