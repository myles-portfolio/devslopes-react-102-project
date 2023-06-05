import "@/css/CartPrice.css";

export const CartPrice = () => {
	return (
		<div className="cart-price-container">
			<div className="cart-price-ul">
				<ul>
					<div id="subtotal" className="cart-price-li">
						<p>Cart Subtotal:</p>
						<p>$1599.99</p>
					</div>
					<div id="hosting" className="cart-price-li">
						<p>Hosting:</p>
						<p>$319.99</p>
					</div>
					<div id="discount" className="cart-price-li">
						<p>Discount:</p>
						<p>-</p>
					</div>
					<div id="total" className="cart-price-li">
						<p>Cart Total:</p>
						<p>$1919.98</p>
					</div>
				</ul>
			</div>
		</div>
	);
};
