"use strict";
const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	header = document.querySelector('.header'),
	body = document.querySelector('body');

window.addEventListener('load', () => {


	//Бургер
	if (burger) {
		body.addEventListener('click', burgerToggle)
		function burgerToggle(e) {
			// alert("Click") // Для проверки вызова функции кликом
			if (e.target.closest('.burger')) {
				burger.classList.toggle('active');
				menu.classList.toggle('active');
				header.classList.toggle('active');
				body.classList.toggle('lock');
				window.addEventListener('scroll', closeBurger)
			} else if (!e.target.closest('.burger')) {
				burger.classList.remove('active');
				menu.classList.remove('active');
				header.classList.remove('active');
				body.classList.remove('lock');
				window.removeEventListener('scroll', closeBurger)
			}
		}

		function closeBurger() {
			if (burger.classList.contains('active')) { //Необязательная дополнительная проверка
				burger.classList.remove('active');
				menu.classList.remove('active');
				header.classList.remove('active');
				body.classList.remove('lock');
				window.removeEventListener('scroll', closeBurger)
			}
		}
	}

	//=============================================================================
	// index.html
	//=============================================================================

	if (document.querySelector('body.main')) {

		// Слайдер
		if (document.querySelector('.swiper')) {
			const swiper = new Swiper('.swiper', {
				speed: 500,
				simulateTouch: true,
				slideToClickedSlide: true,
				slidesPerView: 1.2,
				breakpoints: {
					320: {
						slidesPerView: 1.173,
					}
				}
			});
			const btns = [document.querySelector('.hero__next'), document.querySelector('.left-arrow'), document.querySelector('.right-arrow')]
			btns.forEach(el => {
				el.addEventListener('click', () => {
					if (el.classList.contains('left-arrow')) {
						swiper.slidePrev(500, false);
					} else {
						swiper.slideNext(500, false);
					}
				})
			})
		}

		//Меняем текст в контактах... (.hero)
		if (document.querySelector('.hero__mail') && document.querySelector('.hero__tel')) {
			const mail = document.querySelector('.hero__mail'),
				tel = document.querySelector('.hero__tel');
			window.addEventListener('resize', changeHero)
			changeHero()
			function changeHero() {
				if (window.innerWidth <= 1024) {
					mail.innerHTML = 'info@hi-light.pl'
					tel.innerHTML = '+380935705222'
				} else if (window.innerWidth > 1024) {
					mail.innerHTML = 'E: info@gmail.com'
					tel.innerHTML = '+380983527547'
				}
			}
		}

		//Меняем текст в тайтле айтема... (.gallery)
		if (document.querySelector('.title-to-change')) {
			const titleToChange = document.querySelector('.title-to-change'),
				titlesToChange = document.querySelectorAll('.item-gallery__title3');
			window.addEventListener('resize', changeTitle)
			changeTitle()

			function changeTitle() {
				if (window.innerWidth > 1024) {
					titlesToChange[1].innerHTML = 'Residence by the lighthouse'
				} else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
					titlesToChange[0].innerHTML = 'Eyewear store interior'
					titlesToChange[1].innerHTML = 'Minimalist style home'
					titlesToChange[2].innerHTML = 'Residence by the lighthouse'
					titlesToChange[3].innerHTML = 'Eyewear store interior'
				} else if (window.innerWidth <= 768 && window.innerWidth > 569) {
					titlesToChange[0].innerHTML = 'Residence by the lighthouse'
					titlesToChange[1].innerHTML = 'Minimalist style home'
					titlesToChange[2].innerHTML = 'Eyewear storeinterior'
					titlesToChange[3].innerHTML = 'House on a Hillside'
				} else if (window.innerWidth <= 568) {
					titlesToChange[0].innerHTML = 'Residence by the lighthouse'
					titlesToChange[1].innerHTML = 'Eyewear store interior'
					titlesToChange[2].innerHTML = 'Minimalist style home'
					titlesToChange[3].innerHTML = 'Eyewear store interior'
				}
			}
		}

		//Меняем текст в тайтле contacts... (.contacts)
		if (document.querySelector('.contacts__title2')) {
			const contactsTitle = document.querySelector('.contacts__title2')

			window.addEventListener('resize', changeTitle)

			changeTitle()

			function changeTitle() {
				if (window.innerWidth > 1024) {
					contactsTitle.innerHTML = 'Drop us a line'
				} else if (window.innerWidth <= 1024) {
					contactsTitle.innerHTML = 'Get in touch'
				}
			}
		}
	}

	//=============================================================================
	// news.html
	//=============================================================================

	if (document.querySelector('body.news')) {
		// Меняем текст в тайтле hero (news.html)
		if (document.querySelector('.hero__title2')) {
			const heroTitle = document.querySelector('.hero__title2')
			window.addEventListener('resize', changeTitle)

			changeTitle()

			function changeTitle() {
				if (window.innerWidth <= 568) {
					heroTitle.innerHTML = 'Our news'
				} else if (window.innerWidth > 568) {
					heroTitle.innerHTML = 'Our latest news'
				}
			}
		}

		// Выпадашка Option
		if (document.querySelector('.hero__option')) {
			const heroOption = document.querySelector('.option-hero'),
				optionTitle = document.querySelector('.option-hero__title'),
				optionList = document.querySelector('.option-hero__list');

			body.addEventListener('click', showOptions)
			// В идеале - доработать... Первая ссылка кликается слишком "высоко"
			function showOptions(e) {
				if (!e.target.closest('.hero__option')) {
					heroOption.classList.remove('active')
					heroOption.style.height = null
					optionList.style.height = null
				} else if (e.target.closest('.option-hero').classList.contains('active')) {
					heroOption.classList.remove('active')
					heroOption.style.height = null
					optionList.style.height = null
				} else if (!e.target.closest('.option-hero').classList.contains('active')) {
					heroOption.classList.add('active')
					heroOption.style.height = heroOption.scrollHeight + optionList.scrollHeight + optionTitle.scrollHeight + 'px'
					optionList.style.height = optionList.scrollHeight + 'px'
				}

			}
		}
	}

	//=============================================================================
	// singleNews.html
	//=============================================================================
})