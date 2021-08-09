// MODAL LOGIN

let loginLink = document.querySelector('.user-list__login');
let modalLogin = document.querySelector('.modal--login');
let modalClose = document.querySelector('.modal-close');
let login = document.querySelector('.login-user-field');
let password = document.querySelector('.password-user-field');
let loginForm = document.querySelector('.login-form');

let isStorageSupport = true;
let storage;

try {
  storage = localStorage.getItem('login');
} catch (error) {
  isStorageSupport = false;
}

loginLink.addEventListener('click', function(evt) {
  evt.preventDefault();
	modalLogin.classList.add('modal-show');

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalLogin.classList.remove('modal-show');
  modalLogin.classList.remove('modal-error');
});

loginForm.addEventListener('submit', function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    modalLogin.classList.remove('modal-error');
    modalLogin.offsetWidth = modalLogin.offsetWidth;
    modalLogin.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains('modal-show')) {
      evt.preventDefault();
      modalLogin.classList.remove('modal-show');
      modalLogin.classList.remove('modal-error');
    }
  }
});

// MODAL FORM

let form = document.querySelector('.form');
let modalFailure = document.querySelector('.modal--failure');
let modalSuccess = document.querySelector('.modal--success');
let modalButtons = document.querySelectorAll('.modal__button-close');

if (location.pathname.endsWith('form.html')) {
	let formTexts = form.querySelectorAll('.must-have-field');
	form.addEventListener('submit', function(evt) {
		formTexts.forEach(function(el) {
			if (!el.value) {
				evt.preventDefault();
				modalFailure.classList.add('modal-show');
				el.classList.add('required-style');
			} else {
				el.classList.remove('required-style');
			}

			el.addEventListener('change', function() {
				if (!el.value) {
					el.classList.add('required-style');
				} else {
					el.classList.remove('required-style');
				}
			});
		})
	});
}

modalButtons.forEach(function(el) {
	el.addEventListener('click', function(evt) {
		evt.preventDefault();
		modalFailure.classList.remove('modal-show');
		modalSuccess.classList.remove('modal-show');
	});
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalFailure.classList.contains('modal-show')) {
      evt.preventDefault();
			modalFailure.classList.remove('modal-show');
			modalSuccess.classList.remove('modal-show');
    }
  }
});
