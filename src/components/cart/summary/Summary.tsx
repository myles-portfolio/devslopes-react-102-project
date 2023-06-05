import "@/css/Summary.css";
import { PromoCodeForm } from "./PromoCodeForm";
import { CartPrice } from "./CartPrice";
import { Divider } from "@/components/default/Divider";

export const Summary = () => {
	return (
		<div className="summary-container">
			<h3 className="summary-header">Summary</h3>
			<Divider />
			<PromoCodeForm />
			<Divider />
			<CartPrice />
			<Divider />
			<button className="checkout-btn">Checkout</button>
		</div>
	);
};
