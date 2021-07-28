if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
	const advantagesItems = document.querySelectorAll('.advantages__item');
	const advantagesToggles = document.querySelectorAll('.advantages__toggles .slider__toggle');
	const reviewsItems = document.querySelectorAll('.reviews__item');

	const reviewsToggles = document.querySelectorAll('.reviews__toggles .slider__toggle');
	const reviewsPrev = document.querySelector('.reviews__prev');
	const reviewsNext = document.querySelector('.reviews__next');

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

	reviewsNext.onclick = function() {
		if (reviewsItems[reviewsItems.length - 1].classList.contains('slider__item--show')) {
			reviewsItems[0].classList.add('slider__item--show');
			reviewsItems[reviewsItems.length - 1].classList.remove('slider__item--show');
			reviewsToggles[0].classList.add('slider__toggle--active');
			reviewsToggles[reviewsToggles.length - 1].classList.remove('slider__toggle--active');
		} else {
			const reviewItemShow = document.querySelector('.reviews__list .slider__item--show');
			const reviewToggleActive = document.querySelector('.reviews__toggles .slider__toggle--active');
			reviewItemShow.nextElementSibling.classList.add('slider__item--show');
			reviewItemShow.classList.remove('slider__item--show');
			reviewToggleActive.nextElementSibling.classList.add('slider__toggle--active');
			reviewToggleActive.classList.remove('slider__toggle--active');
		};
	};

	reviewsPrev.onclick = function() {
		if (reviewsItems[0].classList.contains('slider__item--show')) {
			reviewsItems[reviewsItems.length - 1].classList.add('slider__item--show');
			reviewsItems[0].classList.remove('slider__item--show');
			reviewsToggles[reviewsToggles.length - 1].classList.add('slider__toggle--active');
			reviewsToggles[0].classList.remove('slider__toggle--active');
		} else {
			const reviewItemShow = document.querySelector('.reviews__list .slider__item--show');
			const reviewToggleActive = document.querySelector('.reviews__toggles .slider__toggle--active');
			reviewItemShow.previousElementSibling.classList.add('slider__item--show');
			reviewItemShow.classList.remove('slider__item--show');
			reviewToggleActive.previousElementSibling.classList.add('slider__toggle--active');
			reviewToggleActive.classList.remove('slider__toggle--active');
		};
	};
}
