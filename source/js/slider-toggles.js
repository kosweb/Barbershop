const advantagesItems = document.querySelectorAll('.advantages__item');
const advantagesToggles = document.querySelectorAll('.advantages__toggles .slider__toggle');

advantagesToggles.forEach(function(el, i) {
	el.onclick = function() {
		for (let advantagesItem of advantagesItems) {
			advantagesItem.classList.remove('slider__item--show')
		};
		advantagesItems[i].classList.add('slider__item--show');
	};
});
