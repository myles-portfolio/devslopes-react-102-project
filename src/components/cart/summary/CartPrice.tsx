import "@/css/CartPrice.css";
import { CartProps } from "@/types/defaults";
import {
	priceFormatter,
	calculateDiscount,
} from "@/utils/helpers/action.helpers";
import { Discount } from "./PromoCodeForm";
import { useEffect, useRef } from "react";

interface CartPriceProps {
	activeCartData: CartProps[];
	discount: Discount | null;
	isExpressShipping: boolean;
	handleSubTotalChange: (value: number) => void;
	setCartTotal: (value: number) => void;
}

export const CartPrice = ({
	activeCartData,
	discount,
	isExpressShipping,
	handleSubTotalChange,
	setCartTotal,
}: CartPriceProps) => {
	const subtotal = activeCartData.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const formattedSubtotal = priceFormatter.format(subtotal);

	let hosting: number;
	if (isExpressShipping) {
		hosting = subtotal * 0.2 + 100;
	} else {
		hosting = subtotal * 0.2;
	}

	const formattedHosting = priceFormatter.format(hosting);

	const formattedDiscountRef = useRef<string>("-");
	const formattedTotalRef = useRef<string>("-");

	useEffect(() => {
		handleSubTotalChange(subtotal);

		let newTotal;
		if (discount) {
			const discountAmount = calculateDiscount(
				subtotal,
				discount.type,
				discount.amount
			);

			if (discountAmount !== null) {
				newTotal = subtotal + hosting - discountAmount;
				formattedDiscountRef.current = priceFormatter.format(discountAmount);
			}
		} else {
			newTotal = subtotal + hosting;
		}

		if (newTotal !== undefined) {
			setCartTotal(newTotal);
			formattedTotalRef.current = priceFormatter.format(newTotal);
		}
	}, [handleSubTotalChange, setCartTotal, subtotal, discount, hosting]);

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
							{formattedDiscountRef.current}
						</p>
					</div>
					<div id="total" className="cart-price-li">
						<p>Cart Total:</p>
						<p className="cartTotal">{formattedTotalRef.current}</p>
					</div>
				</ul>
			</div>
		</div>
	);
};
