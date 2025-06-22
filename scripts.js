// Active nav item based on page position
const activeLink = () => {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll("#nav-links a");
	let index = sections.length;

	while (--index && window.scrollY + 250 < sections[index].offsetTop) {}

	navLinks.forEach((link) => link.classList.remove("active"));
	navLinks[index].classList.add("active");
};
activeLink();
window.addEventListener("scroll", activeLink);

// Interactive word toggle
const interactive = document.querySelector("#interactive");

interactive.addEventListener("click", () => {
	interactive.classList.toggle("toggle-interactive");
});

// Responsive and accessible img toggles
const responsive = document.querySelector("#responsive");
const responsiveImg = document.querySelector("#responsive-img");
const accessible = document.querySelector("#accessible");
const accessibleImg = document.querySelector("#accessible-img");
const toggleImg = (e) => {
	const targetImg = e.target.id;
	switch (targetImg) {
		case "responsive":
			responsiveImg.classList.toggle("toggle-img");
			break;
		case "responsive-img":
			responsiveImg.classList.remove("toggle-img");
			break;
		case "accessible":
			accessibleImg.classList.toggle("toggle-img");
			break;
		case "accessible-img":
			accessibleImg.classList.remove("toggle-img");
			break;
	}
};
responsive.addEventListener("click", toggleImg);
responsiveImg.addEventListener("click", toggleImg);
accessible.addEventListener("click", toggleImg);
accessibleImg.addEventListener("click", toggleImg);

// Cursor circle
const moveCircle = (e) => {
	const circle = document.querySelector("#cursor-circle");
	const posY = e.pageY;
	const posX = e.pageX;

	circle.style.top = `${posY - 20}px`;
	circle.style.left = `${posX - 20}px`;
};
window.addEventListener("mousemove", moveCircle);
