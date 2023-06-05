import moment from "moment";

export const cardNumberValidation = (cardNumber: string): string => {
	const regexPattern: { [key: string]: RegExp } = {
		MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
		VISA: /^4[0-9]{2,}$/,
		AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
		DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
	};
	for (const card in regexPattern) {
		if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) {
			if (cardNumber) {
				return /^[1-6]{1}[0-9]{14,15}$/i.test(
					cardNumber.replace(/[^\d]/g, "").trim()
				)
					? ""
					: "Enter a valid Card Number.";
			}
		}
	}
	return "Enter a valid Card Number.";
};

export const cardExpiryValidation = (value: string): string | undefined => {
	if (value) {
		if (/^(0[1-9]|1[0-2])\/[0-9]{2}$/i.test(value.trim())) {
			const today = new Date();
			const currentDate = moment(today);
			const visaValue = value.split("/");
			const visaDate = moment(`20${visaValue[1]}-${visaValue[0]}`);
			return currentDate < visaDate ? undefined : "Please enter a valid Date.";
		} else {
			return "Invalid Date Format. Please use MM/YY.";
		}
	}
};

export const cardHolderNameValidation = (value: string): string | undefined => {
	if (value) {
		if (/^[a-zA-Z]*$/i.test(value)) {
			return undefined;
		} else {
			return "Alphabetical letters only.";
		}
	} else {
		return undefined;
	}
};

export const securityCodeValidation = (
	min: number,
	value: string
): string | undefined =>
	value && value.length < min ? "Must be 3 characters or more." : undefined;
