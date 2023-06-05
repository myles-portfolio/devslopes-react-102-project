import "@/css/Screen.css";
import { Alert } from "@/components/cart/Alert";
import { ProductItemsDisplay } from "@/components/cart/product/ProductItemsDisplay";
import { Summary } from "@/components/cart/summary/Summary";
import { Tracker } from "@/components/cart/Tracker";
import { ShippingDisplay } from "@/components/cart/shipping/ShippingDisplay";
import { Payment } from "../cart/payment/Payment";

export const Screen = () => {
	return (
		<section className="screen-container">
			<div className="screen-left">
				<Alert />
				<Tracker />
				<ProductItemsDisplay />
				<ShippingDisplay />
				<Payment />
			</div>
			<div className="screen-right">
				<Summary />
			</div>
		</section>
	);
};
