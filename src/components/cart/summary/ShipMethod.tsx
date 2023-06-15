import { SectionHeader } from "@/components/common/SectionHeader";

interface ShipMethodProps {
	shippingMethodValue: string;
}

export const ShipMethod = ({ shippingMethodValue }: ShipMethodProps) => {
	return (
		<div className="ba-container">
			<SectionHeader headerText={"Shipping Method"} />
			<div className="ba-info method">
				<div>{shippingMethodValue.toUpperCase()}</div>
				<div>
					{shippingMethodValue === "express"
						? `Delivery in 1-3 Business Weeks`
						: `Delivery in 4-6 Business Weeks`}
				</div>
			</div>
		</div>
	);
};
