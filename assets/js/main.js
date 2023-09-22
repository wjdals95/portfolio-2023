(() => {
	const iconMenu = document.querySelector(".icon-menu");
	const reponsiveSideBar = document.querySelector(".responsive-sidebar-menu");
	const reponsiveSideBarOverlay = document.querySelector(
		".responsive-sidebar-menu .sidebar-overlay"
	);
	const home = document.querySelector("#home");
	const about = document.querySelector("#about");
	const resume = document.querySelector("#resume");
	const mySkills = document.querySelector("#myskills");
	const portfolio = document.querySelector("#portfolio");
	const contact = document.querySelector("#contact");
	const section = [home, about, resume, mySkills, portfolio, contact];
	const sidebarNav = document.querySelectorAll(".nav-click");
	const responsiveSidebarNav = document.querySelectorAll(".respon-nav-click");

	// Nav Scroll Evnet
	function navClick() {
		for (let i = 0; i < sidebarNav.length; i++) {
			sidebarNav[i].addEventListener("click", (e) => {
				window.scroll({
					top: section[i].offsetTop,
					behavior: "smooth",
				});
			});
		}

		for (let i = 0; i < responsiveSidebarNav.length; i++) {
			responsiveSidebarNav[i].addEventListener("click", (e) => {
				window.scroll({
					top: section[i].offsetTop,
					behavior: "smooth",
				});
			});

		}
	}

	function navScroll() {
		let y = window.pageYOffset;
		for (let i = 0; i < sidebarNav.length; i++) {
			let sectionOffsetTop = section[i].offsetTop;
			let sectionOffsetHeight = section[i].offsetHeight;

			if (y >= sectionOffsetTop && y < sectionOffsetTop + sectionOffsetHeight) {
				sidebarNav[i].classList.add("active");
			} else {
				sidebarNav[i].classList.remove("active");
			}
		}
		for (let i = 0; i < responsiveSidebarNav.length; i++) {
			let sectionOffsetTop = section[i].offsetTop;
			let sectionOffsetHeight = section[i].offsetHeight;

			if (y >= sectionOffsetTop && y < sectionOffsetTop + sectionOffsetHeight) {
				responsiveSidebarNav[i].classList.add("active");
			} else {
				responsiveSidebarNav[i].classList.remove("active");
			}
		}
	}

	// ICON Toggle Event
	function iconClick() {
		iconMenu.addEventListener("click", () => {
			reponsiveSideBar.classList.add("active");
		});
		reponsiveSideBarOverlay.addEventListener("click", () => {
			reponsiveSideBar.classList.remove("active");
		});
	}

	window.addEventListener("click", (e) => {
		e.preventDefault();
		navClick();
		iconClick();
	});

	window.addEventListener("scroll", () => {
		setTimeout(navScroll, 500);
	});
})();
