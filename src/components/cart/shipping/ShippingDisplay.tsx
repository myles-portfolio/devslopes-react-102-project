import { Divider } from "@/components/default/Divider";
import "@/css/Shipping.css";
import { ShippingMethod } from "@/components/cart/shipping/ShippingMethod";
import { ShippingForm } from "@/components/cart/shipping/ShippingForm";
import { Button } from "@/components/default/Button";
import { DisplayProps } from "@/types/defaults";

export const ShippingDisplay: React.FC<DisplayProps> = ({
	handlePhaseTransition,
}) => {
	return (
		<div className="screen-style">
			<ShippingForm />
			<Divider />
			<ShippingMethod />
			<Button
				onClick={() => handlePhaseTransition("prev")}
				text={"Back to Cart"}
				className={"btn-secondary checkout"}
			/>
		</div>
	);
};
