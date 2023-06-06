import "@/css/Summary.css";
import { PromoCodeForm } from "./PromoCodeForm";
import { CartPrice } from "./CartPrice";
import { Divider } from "@/components/default/Divider";
import { CartItemsCounter } from "./CartItemsCounter";
import { CartItemsDisplay } from "./CartItemsDisplay";
import { BillingAddress } from "@/components/cart/summary/BillingAddress";
import { ShipMethod } from "./ShipMethod";
import { OrderDetails } from "./OrderDetails";

export const SummaryDisplay = () => {
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
			<Divider />
			<ShipMethod />
			<Divider />
			<OrderDetails
				title={"Shipping"}
				detail={"Standard"}
				description={"Delivery in 4-6 Business Weeks"}
				linkUrl={"https://www.google.com/"}
				linkText={"View Shipping Details"}
			/>
			<Divider />
			<OrderDetails
				title={"Payment"}
				image={"src/assets/masterCard.png"}
				detail={"MasterCard"}
				description={"Payment Total"}
				linkUrl={"https://www.google.com/"}
				linkText={"View Shipping Details"}
				paymentTotal={1919.98}
			/>
			<button className="checkout-btn">Checkout</button>
		</div>
	);
};
