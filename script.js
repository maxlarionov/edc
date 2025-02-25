// document.addEventListener("DOMContentLoaded", function () {
// 	const button = document.getElementById("toggleButton-uah");
// 	const content = document.getElementById("details-uah");
// 	const icon = document.getElementById("toggleIcon-uah");

// 	button.addEventListener("click", function () {
// 		const isHidden = content.classList.contains("hidden");

// 		content.classList.toggle("hidden");
// 		icon.src = isHidden ? "images/arrow-down.png" : "images/arrow-right.png"; // Міняємо іконку
// 	});
// });

// document.addEventListener("DOMContentLoaded", function () {
// 	const button = document.getElementById("toggleButton-usd");
// 	const content = document.getElementById("details-usd");
// 	const icon = document.getElementById("toggleIcon-usd");

// 	button.addEventListener("click", function () {
// 		const isHidden = content.classList.contains("hidden");

// 		content.classList.toggle("hidden");
// 		icon.src = isHidden ? "images/arrow-down.png" : "images/arrow-right.png"; // Міняємо іконку
// 	});
// });
// document.addEventListener("DOMContentLoaded", function () {
// 	const button = document.getElementById("toggleButton-eur");
// 	const content = document.getElementById("details-eur");
// 	const icon = document.getElementById("toggleIcon-eur");

// 	button.addEventListener("click", function () {
// 		const isHidden = content.classList.contains("hidden");

// 		content.classList.toggle("hidden");
// 		icon.src = isHidden ? "images/arrow-down.png" : "images/arrow-right.png"; // Міняємо іконку
// 	});
// });

// document.addEventListener("DOMContentLoaded", function () {
// 	const accordions = document.querySelectorAll(".accordion");

// 	accordions.forEach((accordion, index) => {
// 		const button = accordion.querySelector(".toggleButton");
// 		const content = accordion.querySelector(".content");
// 		const icon = accordion.querySelector(".toggleIcon");

// 		// Початково відкритий перший блок
// 		if (index === 0) {
// 			accordion.classList.add("active");
// 			content.style.maxHeight = content.scrollHeight + "px";
// 			content.style.opacity = "1";
// 			icon.src = "arrow-down.svg";
// 		} else {
// 			content.style.maxHeight = "0";
// 			content.style.opacity = "0";
// 			icon.src = "arrow-right.svg";
// 		}

// 		button.addEventListener("click", function () {
// 			const isActive = accordion.classList.contains("active");

// 			// Закриваємо всі блоки
// 			accordions.forEach((acc) => {
// 				const accContent = acc.querySelector(".content");
// 				const accIcon = acc.querySelector(".toggleIcon");

// 				acc.classList.remove("active");
// 				accContent.style.opacity = "0";
// 				accContent.style.maxHeight = "0";
// 				accIcon.src = "arrow-right.svg";
// 			});

// 			// Якщо блок був закритий, відкриваємо його
// 			if (!isActive) {
// 				accordion.classList.add("active");

// 				// Невелика затримка перед відкриттям
// 				setTimeout(() => {
// 					content.style.maxHeight = content.scrollHeight + "px";
// 					content.style.opacity = "1";
// 				}, 10);

// 				icon.src = "arrow-down.svg";
// 			}
// 		});
// 	});
// });

document.querySelectorAll(".nav-link").forEach(link => {
	link.addEventListener("click", function (event) {
		event.preventDefault(); // Відміна стандартної поведінки (зміна URL)

		const targetId = this.getAttribute("data-target");
		const targetSection = document.getElementById(targetId);

		if (targetSection) {
			window.scrollTo({
				top: targetSection.offsetTop,
				behavior: "smooth"
			});
		}
	});
});