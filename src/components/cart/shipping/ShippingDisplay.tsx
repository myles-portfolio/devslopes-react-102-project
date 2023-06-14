import { Divider } from "@/components/common/Divider";
import "@/css/Shipping.css";
import { ShippingMethod } from "@/components/cart/shipping/ShippingMethod";
import { ShippingForm } from "@/components/cart/shipping/ShippingForm";
import { Button } from "@/components/common/Button";
import { DisplayProps } from "@/types/defaults";

interface ShippingDisplayProps extends DisplayProps {
	handleExpressShippingChange: (value: boolean) => void;
	setFirstNameCompleted: (value: boolean) => void;
	setLastNameCompleted: (value: boolean) => void;
	setAddressCompleted: (value: boolean) => void;
	setPostalCodeCompleted: (value: boolean) => void;
	setCountryCompleted: (value: boolean) => void;
	setCityCompleted: (value: boolean) => void;
	setStateCompleted: (value: boolean) => void;
	setCellPhoneCompleted: (value: boolean) => void;
	setOtherPhoneCompleted: (value: boolean) => void;
	setShippingCompleted: (value: boolean) => void;
	cartSubtotal: number;
	isMsgVisible: boolean;
	formErrors: string;
}

export const ShippingDisplay: React.FC<ShippingDisplayProps> = ({
	handlePhaseTransition,
	handleExpressShippingChange,
	cartSubtotal,
	setFirstNameCompleted,
	setLastNameCompleted,
	setAddressCompleted,
	setPostalCodeCompleted,
	setCountryCompleted,
	setCityCompleted,
	setStateCompleted,
	setCellPhoneCompleted,
	setOtherPhoneCompleted,
	setShippingCompleted,
	isMsgVisible,
	formErrors,
}) => {
	return (
		<div className="screen-style">
			<ShippingForm
				setFirstNameCompleted={setFirstNameCompleted}
				setLastNameCompleted={setLastNameCompleted}
				setAddressCompleted={setAddressCompleted}
				setPostalCodeCompleted={setPostalCodeCompleted}
				setCountryCompleted={setCountryCompleted}
				setCityCompleted={setCityCompleted}
				setStateCompleted={setStateCompleted}
				setCellPhoneCompleted={setCellPhoneCompleted}
				setOtherPhoneCompleted={setOtherPhoneCompleted}
				isMsgVisible={isMsgVisible}
				formErrors={formErrors}
			/>
			<Divider />
			<ShippingMethod
				handleExpressShippingChange={handleExpressShippingChange}
				cartSubtotal={cartSubtotal}
				setShippingCompleted={setShippingCompleted}
			/>
			<Button
				onClick={() => handlePhaseTransition("prev")}
				text={"Back to Cart"}
				className={"btn-secondary checkout"}
			/>
		</div>
	);
};
