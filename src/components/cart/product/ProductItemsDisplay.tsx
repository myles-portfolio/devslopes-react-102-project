import "@/css/Product.css";
import { ProductItem } from "@/components/cart/product/ProductItem";
import { CartProps } from "@/types/defaults";
import { EmptyCart } from "@/components/cart/product/EmptyCart";

interface ProductItemsDisplayProps {
	activeCartData: CartProps[];
	handleItemRemoval: (item: CartProps) => void;
	activeCart: CartProps[];
	setActiveCart: (cart: CartProps[]) => void;
}

const calculateTotalPrice = (price: number) => {
	return price * 1.2;
};

export const ProductItemsDisplay = ({
	activeCartData,
	handleItemRemoval,
	setActiveCart,
	activeCart,
}: ProductItemsDisplayProps) => {
	return (
		<div className="screen-style">
			<div className="product-header">
				<h3>Product</h3>
				<h3>Price</h3>
				<h3>Quantity</h3>
				<h3>Total Price</h3>
			</div>
			<div className="product-list">
				{activeCartData.length === 0 ? (
					<EmptyCart />
				) : (
					activeCartData.map((item: CartProps) => (
						<ProductItem
							key={item.sku}
							item={{ ...item, totalPrice: calculateTotalPrice(item.price) }}
							handleItemRemoval={() => handleItemRemoval(item)}
							activeCart={activeCart}
							setActiveCart={setActiveCart}
						/>
					))
				)}
			</div>
		</div>
	);
};
