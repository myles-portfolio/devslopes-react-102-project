import { SectionHeader } from "@/components/default/SectionHeader";

export const BillingAddress = () => {
	return (
		<div className="ba-container">
			<SectionHeader headerText={"Billing & Shipping"} />
			<div className="ba-info">
				<div>Peter Griffin</div>
				<div>123 Spooner Street Apt. 42</div>
				<div>12345 Quahog, Rhode Island</div>
				<div>peter.griffin@gmail.com</div>
			</div>
		</div>
	);
};
