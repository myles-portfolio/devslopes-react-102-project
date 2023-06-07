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

export const calculateDiscount = (
	price: number,
	type: string,
	amount: number
) => {
	switch (type) {
		case "fixed":
			return amount;
		case "percentage":
			return price * amount;
		default:
			return null;
	}
};
