import { Divider } from "@/components/default/Divider";
import "@/css/Shipping.css";
import { ShippingMethod } from "./ShippingMethod";
import { ShippingForm } from "./ShippingForm";

export const ShippingDisplay = () => {
	return (
		<div className="shipping-container">
			<ShippingForm />
			<Divider />
			<ShippingMethod />
		</div>
	);
};
