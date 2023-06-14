import "@/css/Shipping.css";
import "@/css/Form.css";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useEffect, useState } from "react";

interface ShippingMethodProps {
	handleExpressShippingChange: (value: boolean) => void;
	setShippingCompleted: (value: boolean) => void;
	cartSubtotal: number;
	methodValue: string;
	handleMethodChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
}

export const ShippingMethod = ({
	handleExpressShippingChange,
	cartSubtotal,
	setShippingCompleted,
	handleMethodChange,
	methodValue,
}: ShippingMethodProps) => {
	const [selectedMethod, setSelectedMethod] = useState(methodValue);

	useEffect(() => {
		setSelectedMethod(methodValue);
	}, [methodValue]);

	const handleShippingMethodChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target;
		setSelectedMethod(value);
		handleMethodChange(event);

		let isExpressShipping = false;
		if (value === "express") {
			isExpressShipping = true;
		} else if (value !== "express" || cartSubtotal < 300) {
			isExpressShipping = false;
		}

		handleExpressShippingChange(isExpressShipping);
		setShippingCompleted(true);
		handleMethodChange(event);
	};

	return (
		<div>
			<SectionHeader headerText={"Shipping Method*"} />
			<form className="shipping-form">
				<div className="form-row method">
					<label className="leading-label">
						<input
							type="radio"
							name="shippingMethod"
							value="standard"
							checked={selectedMethod === "standard"}
							onChange={handleShippingMethodChange}
						/>
						STANDARD
					</label>
					<p>
						Delivery in 4-6 Business Weeks - <strong>Free</strong> ($300 min.)
					</p>
				</div>
				<div className="form-row method">
					<label className="leading-label">
						<input
							type="radio"
							name="shippingMethod"
							value="express"
							checked={selectedMethod === "express"}
							onChange={handleShippingMethodChange}
						/>
						EXPRESS
					</label>
					<p>
						Delivery in 1-3 Business Weeks - <strong>$100</strong>
					</p>
					<a href="#">View Shipping Details</a>
				</div>
			</form>
		</div>
	);
};
