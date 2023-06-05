import { Divider } from "@/components/default/Divider";
import "@/css/Shipping.css";
import { ShippingMethod } from "./ShippingMethod";
import { ShippingForm } from "./ShippingForm";

export const ShippingDisplay = () => {
	return (
		<div className="screen-style">
			<ShippingForm />
			<Divider />
			<ShippingMethod />
		</div>
	);
};
