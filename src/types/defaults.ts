export interface DisplayProps {
	handlePhaseTransition: (direction: "prev" | "next") => void;
}

export interface CartProps {
	sku: string;
	type: string;
	title: string;
	img: string;
	imgAlt: string;
	pid2first: string;
	pid2second: string;
	price: number;
	totalPrice?: number;
}
