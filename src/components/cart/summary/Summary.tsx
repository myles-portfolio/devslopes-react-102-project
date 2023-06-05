import "@/css/Summary.css";
import { PromoCodeForm } from "./PromoCodeForm";
import { CartPrice } from "./CartPrice";
import { Divider } from "@/components/default/Divider";
import { CartItemsCounter } from "./CartItemsCounter";
import { CartItemsDisplay } from "./CartItemsDisplay";
import { BillingAddress } from "@/components/cart/summary/BillingAddress";
import { ShipMethod } from "./ShipMethod";

export const Summary = () => {
	return (
		<div className="summary-container">
			<h3 className="summary-header">Summary</h3>
			<Divider />
			<PromoCodeForm />
			<CartItemsCounter />
			<Divider />
			<CartItemsDisplay />
			<Divider />
			<CartPrice />
			<Divider />
			<BillingAddress />
			<ShipMethod />
			<button className="checkout-btn">Checkout</button>
		</div>
	);
};
