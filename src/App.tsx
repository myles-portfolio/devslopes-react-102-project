import { useEffect, useState, ChangeEvent } from "react";
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
import { activeCartData, deletedCartData } from "@/data/cart";
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
	const [expressShipping, setExpressShipping] = useState(false);
	const [cartSubtotal, setCartSubtotal] = useState(0);

	const [shippingFormComplete, setShippingFormComplete] = useState(false);
	const [firstNameCompleted, setFirstNameCompleted] = useState(false);
	const [lastNameCompleted, setLastNameCompleted] = useState(false);
	const [addressCompleted, setAddressCompleted] = useState(false);
	const [postalCodeCompleted, setPostalCodeCompleted] = useState(false);
	const [countryCompleted, setCountryCompleted] = useState(false);
	const [cityCompleted, setCityCompleted] = useState(false);
	const [stateCompleted, setStateCompleted] = useState(false);
	const [cellPhoneCompleted, setCellPhoneCompleted] = useState(false);
	const [otherPhoneCompleted, setOtherPhoneCompleted] = useState(false);
	const [shippingCompleted, setShippingCompleted] = useState(false);
	const [isMsgVisible, setIsMsgVisible] = useState(false);
	const [formErrors, setFormErrors] = useState("");
	const [shippingMethodValue, setShippingMethodValue] = useState("");
	const [shippingFormValues, setShippingFormValues] = useState({
		firstName: "",
		lastName: "",
		address: "",
		postalCode: "",
		country: "",
		city: "",
		state: "",
		cell1: "",
		cell2: "",
		cell3: "",
		other1: "",
		other2: "",
		other3: "",
	});

	const handleShippingFormChange = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = event.target;
		setShippingFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleShippingMethodChange = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { value } = event.target;
		setShippingMethodValue(value);
	};

	const formFields = [
		[firstNameCompleted, "First Name"],
		[lastNameCompleted, "Last Name"],
		[addressCompleted, "Address"],
		[postalCodeCompleted, "Postal Code"],
		[countryCompleted, "Country"],
		[cityCompleted, "City"],
		[stateCompleted, "State"],
		[cellPhoneCompleted, "Cell Phone"],
		[otherPhoneCompleted, "Other Phone"],
		[shippingCompleted, "Shipping Method"],
	];

	useEffect(() => {
		if (
			firstNameCompleted &&
			lastNameCompleted &&
			addressCompleted &&
			postalCodeCompleted &&
			countryCompleted &&
			cityCompleted &&
			stateCompleted &&
			cellPhoneCompleted &&
			otherPhoneCompleted &&
			shippingCompleted
		) {
			const isComplete = true;
			setShippingFormComplete(isComplete);
		}
	}, [
		firstNameCompleted,
		lastNameCompleted,
		addressCompleted,
		postalCodeCompleted,
		countryCompleted,
		cityCompleted,
		stateCompleted,
		cellPhoneCompleted,
		otherPhoneCompleted,
		shippingCompleted,
	]);

	const setFirstNameCompletedSetter = (val: boolean) => {
		setFirstNameCompleted(val);
	};
	const setLastNameCompletedSetter = (val: boolean) => {
		setLastNameCompleted(val);
	};
	const setAddressCompletedSetter = (val: boolean) => {
		setAddressCompleted(val);
	};
	const setPostalCodeCompletedSetter = (val: boolean) => {
		setPostalCodeCompleted(val);
	};
	const setCountryCompletedSetter = (val: boolean) => {
		setCountryCompleted(val);
	};
	const setCityCompletedSetter = (val: boolean) => {
		setCityCompleted(val);
	};
	const setStateCompletedSetter = (val: boolean) => {
		setStateCompleted(val);
	};
	const setCellPhoneCompletedSetter = (val: boolean) => {
		setCellPhoneCompleted(val);
	};
	const setOtherPhoneCompletedSetter = (val: boolean) => {
		setOtherPhoneCompleted(val);
	};
	const setShippingCompletedSetter = (val: boolean) => {
		setShippingCompleted(val);
	};

	const handleItemRemoval = (item: CartProps) => {
		const updatedActiveCart = activeCart.filter(
			(cartItem) => cartItem.sku !== item.sku
		);
		setActiveCart(updatedActiveCart);
		deletedCartData.push(item);
	};

	const handleExpressShippingChange = (isExpressShipping: boolean) => {
		setExpressShipping(isExpressShipping);
	};

	const handleSubTotalChange = (value: number) => {
		setCartSubtotal(value);
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
							activeCart={activeCart}
							setActiveCart={setActiveCart}
						/>
					</>
				);
			case "shipping":
				return (
					<>
						<Tracker currentCheckoutPhase={currentCheckoutPhase} />
						<ShippingDisplay
							handlePhaseTransition={handlePhaseTransition}
							handleExpressShippingChange={handleExpressShippingChange}
							cartSubtotal={cartSubtotal}
							setFirstNameCompleted={setFirstNameCompletedSetter}
							setLastNameCompleted={setLastNameCompletedSetter}
							setAddressCompleted={setAddressCompletedSetter}
							setPostalCodeCompleted={setPostalCodeCompletedSetter}
							setCountryCompleted={setCountryCompletedSetter}
							setCityCompleted={setCityCompletedSetter}
							setStateCompleted={setStateCompletedSetter}
							setCellPhoneCompleted={setCellPhoneCompletedSetter}
							setOtherPhoneCompleted={setOtherPhoneCompletedSetter}
							setShippingCompleted={setShippingCompletedSetter}
							isMsgVisible={isMsgVisible}
							formErrors={formErrors}
							formValues={shippingFormValues}
							handleFormChange={handleShippingFormChange}
							methodValue={shippingMethodValue}
							handleMethodChange={handleShippingMethodChange}
						/>
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
						<CartPrice
							activeCartData={activeCart}
							discount={discount}
							isExpressShipping={expressShipping}
							handleSubTotalChange={handleSubTotalChange}
						/>
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
						<CartPrice
							activeCartData={activeCart}
							discount={discount}
							isExpressShipping={expressShipping}
							handleSubTotalChange={handleSubTotalChange}
						/>
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
						<CartPrice
							activeCartData={activeCart}
							discount={discount}
							isExpressShipping={expressShipping}
							handleSubTotalChange={handleSubTotalChange}
						/>
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

	const checkFormCompletion = () => {
		const incompleteFields = formFields
			.filter(([completed]) => !completed)
			.map(([, fieldName]) => fieldName);

		if (incompleteFields.length > 0) {
			const errorMessage = `Please fill out the following fields: ${incompleteFields.join(
				", "
			)}`;
			setFormErrors(errorMessage);
		} else {
			setFormErrors("");
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
					if (shippingFormComplete) {
						setCurrentCheckoutPhase("payment");
						checkFormCompletion();
					} else {
						checkFormCompletion();
						setIsMsgVisible(true);
					}
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
				if (activeCart.length === 0) {
					return null;
				} else {
					return (
						<Button
							onClick={() => handlePhaseTransition("next")}
							text={"Checkout"}
							className={"btn-primary checkout"}
						/>
					);
				}
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
