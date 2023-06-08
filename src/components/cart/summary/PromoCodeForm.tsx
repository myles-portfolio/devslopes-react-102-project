import "@/css/PromoCode.css";
import { useState } from "react";
import { Input } from "@/components/common/Input";
import { PROMO_CODES } from "@/utils/constants/promocodes.constants";

export type Discount = {
	type: string;
	amount: number;
};

interface PromoCodeFormProps {
	setDiscount: (discount: Discount | null) => void;
}

export const PromoCodeForm = ({ setDiscount }: PromoCodeFormProps) => {
	const [promoCodeInput, setPromoCodeInput] = useState("");
	const [isMsgVisible, setIsMsgVisible] = useState(false);
	const [msgType, setMsgType] = useState("");
	const [isDiscountApplied, setIsDiscountApplied] = useState(false);

	const handlePromoCodeChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setPromoCodeInput(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const matchingPromoCode = PROMO_CODES.find(
			(promo) => promo.code === promoCodeInput
		);

		if (matchingPromoCode) {
			if (isDiscountApplied === false) {
				setDiscount(matchingPromoCode.discount);
				setMsgType("redeemed successfully");
				setIsMsgVisible(true);
				setIsDiscountApplied(true);
				setPromoCodeInput("");
				window.setTimeout(() => setIsMsgVisible(false), 2000);
			} else {
				setMsgType("already used");
				setIsMsgVisible(true);
				window.setTimeout(() => setIsMsgVisible(false), 2000);
			}
		} else {
			setMsgType("invalid");
			setIsMsgVisible(true);
			window.setTimeout(() => setIsMsgVisible(false), 2000);
		}
	};

	return (
		<div className="promo-container">
			<p className="summary-header">Do you have a promo code?</p>
			<form className="promo-form" onSubmit={handleSubmit}>
				<Input
					id="promo"
					type="text"
					value={promoCodeInput}
					placeholderText="Code"
					handleChange={handlePromoCodeChange}
				/>
				<button className="btn-secondary">Apply</button>
			</form>
			{isMsgVisible && <p className="promoError">Code is {msgType}.</p>}
		</div>
	);
};
