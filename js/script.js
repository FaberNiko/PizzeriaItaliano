const navMobile = document.querySelector(".nav-mobile");
const allNavItems = document.querySelectorAll(".nav-mobile__item");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			navMobile.classList.remove("nav-mobile--active");
			navBtn.classList.remove("is-active");
		});
	});
};

navBtn.addEventListener("click", handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
