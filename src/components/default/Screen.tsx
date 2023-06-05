import "@/css/Screen.css";
import { Alert } from "@/components/cart/Alert";
import { ProductItemsDisplay } from "@/components/cart/product/ProductItemsDisplay";
import { Summary } from "@/components/cart/summary/Summary";
import { Tracker } from "@/components/cart/Tracker";
import { ShippingDisplay } from "@/components/cart/shipping/ShippingDisplay";
import { Payment } from "@/components/cart/Payment";
import { Confirmation } from "@/components/cart/Confirmation";

export const Screen = () => {
	return (
		<section className="screen-container">
			<div className="screen-left">
				<Alert />
				<Tracker />
				<ProductItemsDisplay />
				<ShippingDisplay />
				<Payment />
				<Confirmation />
			</div>
			<div className="screen-right">
				<Summary />
			</div>
		</section>
	);
};
