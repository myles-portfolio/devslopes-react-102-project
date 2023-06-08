import { Divider } from "@/components/common/Divider";
import "@/css/Product.css";

export const EmptyCart = () => {
	return (
		<div id="product-item" className="product-row-container">
			<Divider />
			<div className="empty-cart">
				<h3>Your cart is empty.</h3>
			</div>
		</div>
	);
};
