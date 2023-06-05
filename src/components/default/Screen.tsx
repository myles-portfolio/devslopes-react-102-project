import "@/css/Screen.css";
import { Alert } from "@/components/cart/Alert";
import { ProductItemsDisplay } from "@/components/cart/product/ProductItemsDisplay";
import { Summary } from "@/components/cart/summary/Summary";
import { Tracker } from "../cart/Tracker";

export const Screen = () => {
	return (
		<section className="screen-container">
			<div className="screen-left">
				<Alert />
				<Tracker />
				<ProductItemsDisplay />
			</div>
			<div className="screen-right">
				<Summary />
			</div>
		</section>
	);
};
