export interface DisplayProps {
	handlePhaseTransition: (direction: "prev" | "next") => void;
}

export interface CartProps {
	sku: string;
	quantity: number;
	type: string;
	title: string;
	img: string;
	imgAlt: string;
	pid2first: string;
	pid2second: string;
	price: number;
	totalPrice?: number;
}

export type PhoneInputItem = {
	id: string;
	size: number;
	maxLength: number;
	name: string;
	value: string;
	ref: React.RefObject<HTMLInputElement>;
	nextRef?: React.RefObject<HTMLInputElement>;
};

export type PhoneInputs = {
	cellPhone: PhoneInputItem[];
	otherPhone: PhoneInputItem[];
	[key: string]: PhoneInputItem[];
};
