import { Divider } from "@/components/common/Divider";
import "@/css/Shipping.css";
import { ShippingMethod } from "@/components/cart/shipping/ShippingMethod";
import { ShippingForm } from "@/components/cart/shipping/ShippingForm";
import { Button } from "@/components/common/Button";
import { DisplayProps } from "@/types/defaults";

interface ShippingDisplayProps extends DisplayProps {
	handleExpressShippingChange: (value: boolean) => void;
	cartSubtotal: number;
}

export const ShippingDisplay: React.FC<ShippingDisplayProps> = ({
	handlePhaseTransition,
	handleExpressShippingChange,
	cartSubtotal,
}) => {
	return (
		<div className="screen-style">
			<ShippingForm />
			<Divider />
			<ShippingMethod
				handleExpressShippingChange={handleExpressShippingChange}
				cartSubtotal={cartSubtotal}
			/>
			<Button
				onClick={() => handlePhaseTransition("prev")}
				text={"Back to Cart"}
				className={"btn-secondary checkout"}
			/>
		</div>
	);
};
