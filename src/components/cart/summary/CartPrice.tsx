import "@/css/CartPrice.css";
import { CartProps } from "@/types/defaults";
import {
	priceFormatter,
	calculateDiscount,
} from "@/utils/helpers/action.helpers";
import { Discount } from "./PromoCodeForm";
import { useEffect } from "react";

interface CartPriceProps {
	activeCartData: CartProps[];
	discount: Discount | null;
	isExpressShipping: boolean;
	handleSubTotalChange: (value: number) => void;
}

export const CartPrice = ({
	activeCartData,
	discount,
	isExpressShipping,
	handleSubTotalChange,
}: CartPriceProps) => {
	const subtotal = activeCartData.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const formattedSubtotal = priceFormatter.format(subtotal);

	let hosting;
	if (isExpressShipping) {
		hosting = subtotal * 0.2 + 100;
	} else {
		hosting = subtotal * 0.2;
	}

	const formattedHosting = priceFormatter.format(hosting);

	let formattedDiscount = "-";
	let formattedTotal = "-";

	if (discount) {
		const discountAmount = calculateDiscount(
			subtotal,
			discount.type,
			discount.amount
		);

		if (discountAmount !== null) {
			const total = subtotal + hosting - discountAmount;
			formattedDiscount = priceFormatter.format(discountAmount);
			formattedTotal = priceFormatter.format(total);
		}
	} else {
		formattedTotal = priceFormatter.format(subtotal + hosting);
	}

	useEffect(() => {
		handleSubTotalChange(subtotal);
	}, [handleSubTotalChange, subtotal]);

	return (
		<div className="cart-price-container">
			<div className="cart-price-ul">
				<ul>
					<div id="subtotal" className="cart-price-li">
						<p>Cart Subtotal:</p>
						<p className="subTotal">{formattedSubtotal}</p>
					</div>
					<div id="hosting" className="cart-price-li">
						<p>Hosting + Shipping:</p>
						<p className="Hosting">{formattedHosting}</p>
					</div>
					<div id="discount" className="cart-price-li">
						<p>Discount:</p>
						<p className={`discount${discount ? " discount-applied" : ""}`}>
							{formattedDiscount}
						</p>
					</div>
					<div id="total" className="cart-price-li">
						<p>Cart Total:</p>
						<p className="cartTotal">{formattedTotal}</p>
					</div>
				</ul>
			</div>
		</div>
	);
};
