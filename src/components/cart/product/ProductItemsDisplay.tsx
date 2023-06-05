import "@/css/Product.css";
import { ProductItem } from "./ProductItem";

export const ProductItemsDisplay = () => {
	return (
		<div className="screen-style">
			<div className="product-header">
				<h3>Product</h3>
				<h3>Price</h3>
				<h3>Quantity</h3>
				<h3>Total Price</h3>
			</div>
			<div className="product-list">
				<ProductItem />
				<ProductItem />
			</div>
		</div>
	);
};
