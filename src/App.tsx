import { useState } from "react";
import "@/css/App.css";
import { LogIn } from "@/components/authentication/LogIn";
import { SignUp } from "@/components/authentication/SignUp";
import { Header } from "@/components/common/Header";
import { Alert } from "@/components/cart/Alert";
import { ConfirmationDisplay } from "@/components/cart/ConfirmationDisplay";
import { PaymentDisplay } from "@/components/cart/PaymentDisplay";
import { Tracker } from "@/components/cart/Tracker";
import { ProductItemsDisplay } from "@/components/cart/product/ProductItemsDisplay";
import { ShippingDisplay } from "@/components/cart/shipping/ShippingDisplay";
import { BillingAddress } from "@/components/cart/summary/BillingAddress";

import { OrderDetails } from "./components/cart/summary/OrderDetails";
import {
	Discount,
	PromoCodeForm,
} from "./components/cart/summary/PromoCodeForm";
import { ShipMethod } from "./components/cart/summary/ShipMethod";
import { Divider } from "./components/common/Divider";
import { Button } from "./components/common/Button";
import { activeCartData, deletedCartData } from "@/utils/cart";
import { CartPrice } from "@/components/cart/summary/CartPrice";
import { CartItemsCounter } from "@/components/cart/summary/CartItemsCounter";
import { CartItemsDisplay } from "./components/cart/summary/CartItemsDisplay";
import { CartProps } from "@/types/defaults";

function App() {
	const [displayedForm, setDisplayedForm] = useState("login");
	const [currentCheckoutPhase, setCurrentCheckoutPhase] =
		useState("cartReview");
	const [activeCart, setActiveCart] = useState<CartProps[]>(activeCartData);
	const [discount, setDiscount] = useState<Discount | null>(null);

	console.log("Discount:", discount);

	const handleItemRemoval = (item: CartProps) => {
		const updatedActiveCart = activeCart.filter(
			(cartItem) => cartItem.sku !== item.sku
		);
		setActiveCart(updatedActiveCart);
		deletedCartData.push(item);
	};

	const toggleForm = (formName: string) => {
		setDisplayedForm(formName);
	};

	const renderDisplayContent = () => {
		switch (currentCheckoutPhase) {
			case "cartReview":
				return (
					<>
						<Alert />
						<Tracker currentCheckoutPhase={currentCheckoutPhase} />
						<ProductItemsDisplay
							activeCartData={activeCart}
							handleItemRemoval={handleItemRemoval}
						/>
					</>
				);
			case "shipping":
				return (
					<>
						<Tracker currentCheckoutPhase={currentCheckoutPhase} />
						<ShippingDisplay handlePhaseTransition={handlePhaseTransition} />
					</>
				);
			case "payment":
				return (
					<>
						<Tracker currentCheckoutPhase={currentCheckoutPhase} />
						<PaymentDisplay handlePhaseTransition={handlePhaseTransition} />
					</>
				);
			case "confirmation":
				return (
					<>
						<Tracker currentCheckoutPhase={currentCheckoutPhase} />
						<ConfirmationDisplay />
					</>
				);
			default:
				return null;
		}
	};

	const renderSummaryContent = () => {
		switch (currentCheckoutPhase) {
			case "cartReview":
				return (
					<>
						<Divider />
						<PromoCodeForm setDiscount={setDiscount} />
						<Divider />
						<CartPrice activeCartData={activeCart} />
						<Divider />
					</>
				);
			case "shipping":
				return (
					<>
						<Divider />
						<CartItemsCounter />
						<Divider />
						<CartItemsDisplay />
						<Divider />
						<CartPrice activeCartData={activeCart} />
						<Divider />
					</>
				);
			case "payment":
				return (
					<>
						<Divider />
						<CartItemsCounter />
						<Divider />
						<CartItemsDisplay />
						<Divider />
						<CartPrice activeCartData={activeCart} />
						<Divider />
						<BillingAddress />
						<ShipMethod />
					</>
				);
			case "confirmation":
				return (
					<>
						<Divider />
						<CartItemsDisplay />
						<Divider />
						<OrderDetails
							title={"Shipping"}
							detail={"Standard"}
							description={"Delivery in 4-6 Business Weeks"}
							linkUrl={"https://www.google.com/"}
							linkText={"View Shipping Details"}
						/>
						<Divider />
						<OrderDetails
							title={"Payment"}
							image={"src/assets/masterCard.png"}
							detail={"MasterCard"}
							description={"Payment Total"}
							linkUrl={"https://www.google.com/"}
							linkText={"View Shipping Details"}
							paymentTotal={1919.98}
						/>
					</>
				);
			default:
				return null;
		}
	};

	const handlePhaseTransition = (direction: "prev" | "next") => {
		switch (currentCheckoutPhase) {
			case "cartReview":
				if (direction === "next") {
					setCurrentCheckoutPhase("shipping");
				}
				break;
			case "shipping":
				if (direction === "prev") {
					setCurrentCheckoutPhase("cartReview");
				} else if (direction === "next") {
					setCurrentCheckoutPhase("payment");
				}
				break;
			case "payment":
				if (direction === "prev") {
					setCurrentCheckoutPhase("shipping");
				} else if (direction === "next") {
					setCurrentCheckoutPhase("confirmation");
				}
				break;
			case "confirmation":
				if (direction === "prev") {
					setCurrentCheckoutPhase("payment");
				}
				break;
			default:
				break;
		}
	};

	const renderCheckoutButton = () => {
		switch (currentCheckoutPhase) {
			case "cartReview":
				return (
					<Button
						onClick={() => handlePhaseTransition("next")}
						text={"Checkout"}
						className={"btn-primary checkout"}
					/>
				);
			case "shipping":
				return (
					<>
						<Button
							onClick={() => handlePhaseTransition("next")}
							text={"Next"}
							className={"btn-primary checkout"}
						/>
					</>
				);
			case "payment":
				return (
					<>
						<Button
							onClick={() => handlePhaseTransition("next")}
							text={"Payment"}
							className={"btn-primary checkout"}
						/>
					</>
				);
			case "confirmation":
				return null;
			default:
				return null;
		}
	};

	return (
		<main className="app">
			<Header />
			<div className="user-auth">
				{displayedForm === "login" ? (
					<LogIn onFormSwitch={toggleForm} />
				) : (
					<SignUp onFormSwitch={toggleForm} />
				)}
			</div>
			<section className="display-container">
				<div className="display-left">{renderDisplayContent()}</div>
				<div className="display-right">
					<h3 className="summary-header">Summary</h3>
					{renderSummaryContent()}
					{renderCheckoutButton()}
				</div>
			</section>
		</main>
	);
}

export default App;
