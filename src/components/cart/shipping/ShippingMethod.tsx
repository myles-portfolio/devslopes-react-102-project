import "@/css/Shipping.css";
import "@/css/Form.css";
import { SectionHeader } from "@/components/common/SectionHeader";

interface ShippingMethodProps {
	handleExpressShippingChange: (value: boolean) => void;
	setShippingCompleted: (value: boolean) => void;
	cartSubtotal: number;
}

export const ShippingMethod = ({
	handleExpressShippingChange,
	cartSubtotal,
	setShippingCompleted,
}: ShippingMethodProps) => {
	const handleShippingMethodChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		//I need to confirm that either standard or express has been selected, and if so set setShippingCompleted to true
		let isExpressShipping = false;
		const { value } = event.target;
		if (value === "express") {
			isExpressShipping = true;
		} else if (value !== "express" || cartSubtotal < 300) {
			isExpressShipping = false;
		}

		handleExpressShippingChange(isExpressShipping);
		setShippingCompleted(true);
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
