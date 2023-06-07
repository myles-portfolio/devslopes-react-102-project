import { SectionHeader } from "@/components/common/SectionHeader";

export const ShipMethod = () => {
	return (
		<div className="ba-container">
			<SectionHeader headerText={"Shipping Method"} />
			<div className="ba-info method">
				<div>STANDARD</div>
				<div>Delivery in 4-6 Business Weeks</div>
			</div>
		</div>
	);
};
