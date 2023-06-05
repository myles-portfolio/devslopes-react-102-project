import "@/css/Screen.css";
import { Alert } from "@/components/cart/Alert";
import { ProductTable } from "@/components/cart/ProductTable";
import { Summary } from "@/components/cart/Summary";

export const Screen = () => {
	return (
		<section className="screen-container">
			<div className="screen-left">
				<Alert />
				<ProductTable />
			</div>
			<div className="screen-right">
				<Summary />
			</div>
		</section>
	);
};
