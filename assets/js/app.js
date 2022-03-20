// let lang = document.querySelectorAll('.header__choose')
// let currentLocation = location.href;
// let menu = document.querySelectorAll('.menu__link');
// let menuLength = menu.length;

// Для ондностроничной страницы
// menu.forEach(c => {

// 	c.addEventListener('click', function () {

// 		menu.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')

// 	})

// })

// lang.forEach(c => {

// 	c.addEventListener('click', function () {
// 		lang.forEach(nav => nav.classList.remove('active'));
// 		this.classList.add('active')
// 	})

// })
// let catalogSection = document.querySelector(".section-catalog");

// let removeChildren = function(item) {
// 	while(item.firstChild) {
// 		item.removeChild(item.firstChild);
// 	}
// }

// let pushChild = function(item, children) {
// 	removeChildren(item)
// 	for (let i = 0; i < children.length; i++) {
// 		item.appendChild(children[i]);
// 	}
// }

// let catalogRow = catalogSection.querySelector('.pizza__row');
// let catalogItem = catalogSection.querySelectorAll('.pizza__column');
// let catalogNav = catalogSection.querySelector('.menu-catalog__nav');

// catalogNav.addEventListener('click', function(e) {
// 	let target = e.target;
// 	let catalogBtn = target.closest('.menu-catalog__item')

// 	if(catalogBtn === null || catalogBtn.classList.contains('.menu-catalog__item.active')) {
// 		return;
// 	}

// 	let btnValue = catalogBtn.getAttribute('data-filter')

// 	if(btnValue === 'all') {
// 		pushChild(catalogRow, catalogItem);
// 		return;
// 	}

// 	let filterValue = [];
// 	for (let i = 0; i < catalogItem.length; i++) {
// 		const curent = catalogItem[i];
// 		if(curent.getAttribute('data-category') == btnValue) {
// 			filterValue.push(curent);
// 		}
// 	}

// 	pushChild(catalogRow, filterValue)

// })







let catalogRow = document.querySelector('.catalog-row');
const filter = document.querySelector('.filter__select');
const products = document.querySelectorAll('.catalog-column');

filter.addEventListener('change', sort)

function sort(e) {
	const sortBy = e.target.value;

	if (sortBy === 'default') {
		pushChild(catalogRow, products);
		return
	}

	let filterValue = [];

	const filterName = [...products].map((e) => {
		let item = e;
		filterValue.push(item);
	});

	if (sortBy === 'price') {
		const sorting = filterValue.sort((a, b) => {
			const first = (a.querySelector('.catalog-price').textContent).replace(/\s/g, '');
			const second = (b.querySelector('.catalog-price').textContent).replace(/\s/g, '');

			return first - second;
		})


		pushChild(catalogRow, sorting);
	} else if (sortBy === 'rating') {
		const sorting = filterValue.sort((a, b) => {
			const first = a.querySelector('.catalog-rating-item').textContent;
			const second = b.querySelector('.catalog-rating-item').textContent;


			return first - second;
		})
		pushChild(catalogRow, sorting);
	}

}

function removeChild(item) {
	while (item.firstChild) {
		item.removeChild(item.firstChild);
	}
}

function pushChild(item, children) {
	removeChild(item);
	for (let i = 0; i < children.length; i++) {
		item.appendChild(children[i]);
	}
}


const prices = document.querySelectorAll('.catalog-price');

prices.forEach(price => {
	let priceText = +(price.innerText);
	let priceLocal = priceText.toLocaleString('ru-RU')
	price.innerText = priceLocal;
})
const headerHeight = document.querySelector('.header');
const body = document.querySelector('body');

body.addEventListener('click', function (e) {

	let target = e.target;
	if (!target.hasAttribute("data-scroll")) {
		return;
	}

	let scrollToItemClass = target.closest('[data-scroll]').getAttribute('data-scroll');

	let scrollToItem = document.querySelector('.' + scrollToItemClass)

	if (scrollToItem) {
		scrollToSection(scrollToItem);
	}
})

let scrollToSection = function (item) {
	let targetTop = item.getBoundingClientRect().top;
	let scrollTop = window.pageYOffset;
	let summTop = scrollTop + targetTop

	window.scrollTo({
		top: summTop,
		behavior: "smooth"
	});
}