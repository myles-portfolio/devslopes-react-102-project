export const handleClose = (id: string) => {
	const element: HTMLElement | null = document.getElementById(id);
	if (element) {
		element.remove();
	}
};

export const priceFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});
