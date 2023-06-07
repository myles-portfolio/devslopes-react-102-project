import "@/css/CartPrice.css";
import { CartProps } from "@/types/defaults";
import { priceFormatter } from "@/utils/helpers/action.helpers";

interface CartPriceProps {
	activeCartData: CartProps[];
}

export const CartPrice = ({ activeCartData }: CartPriceProps) => {
	const subtotal = activeCartData.reduce((sum, item) => sum + item.price, 0);
	const formattedSubtotal = priceFormatter.format(subtotal);

	const hosting = subtotal * 0.2;
	const formattedHosting = priceFormatter.format(hosting);

	return (
		<div className="cart-price-container">
			<div className="cart-price-ul">
				<ul>
					<div id="subtotal" className="cart-price-li">
						<p>Cart Subtotal:</p>
						<p className="subTotal">{formattedSubtotal}</p>
					</div>
					<div id="hosting" className="cart-price-li">
						<p>Hosting:</p>
						<p className="Hosting">{formattedHosting}</p>
					</div>
					<div id="discount" className="cart-price-li">
						<p>Discount:</p>
						<p className="discount">-</p>
					</div>
					<div id="total" className="cart-price-li">
						<p>Cart Total:</p>
						<p className="cartTotal">$1919.98</p>
					</div>
				</ul>
			</div>
		</div>
	);
};
