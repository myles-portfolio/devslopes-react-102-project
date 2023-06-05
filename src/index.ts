const navButton = document.querySelector<HTMLButtonElement>(
	"button[aria-expanded]"
);

function toggleNav(event: MouseEvent) {
	const target = event.target as HTMLButtonElement;
	const expanded = target.getAttribute("aria-expanded") === "true" || false;
	navButton?.setAttribute("aria-expanded", String(!expanded));
}

if (navButton) {
	navButton.addEventListener("click", toggleNav);
} else {
	console.warn("Nav button not found in the DOM.");
}
