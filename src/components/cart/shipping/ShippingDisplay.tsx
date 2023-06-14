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
	formValues: {
		firstName: string;
		lastName: string;
		address: string;
		postalCode: string;
		country: string;
		city: string;
		state: string;
		cell1: string;
		cell2: string;
		cell3: string;
		other1: string;
		other2: string;
		other3: string;
	};
	handleFormChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	methodValue: string;
	handleMethodChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
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
	formValues,
	methodValue,
	handleFormChange,
	handleMethodChange,
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
				formValues={formValues}
				handleFormChange={handleFormChange}
			/>
			<Divider />
			<ShippingMethod
				handleExpressShippingChange={handleExpressShippingChange}
				cartSubtotal={cartSubtotal}
				setShippingCompleted={setShippingCompleted}
				methodValue={methodValue}
				handleMethodChange={handleMethodChange}
			/>
			<Button
				onClick={() => handlePhaseTransition("prev")}
				text={"Back to Cart"}
				className={"btn-secondary checkout"}
			/>
		</div>
	);
};
