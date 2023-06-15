import { SectionHeader } from "@/components/common/SectionHeader";

interface BillingAddressProps {
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
}

export const BillingAddress = ({ formValues }: BillingAddressProps) => {
	return (
		<div className="ba-container">
			<SectionHeader headerText={"Billing & Shipping"} />
			<div className="ba-info">
				<div>
					{formValues.firstName} {formValues.lastName}
				</div>
				<div>{formValues.address}</div>
				<div>
					{formValues.postalCode} {formValues.city}, {formValues.state}
				</div>
				<div>peter.griffin@gmail.com</div>
			</div>
		</div>
	);
};
