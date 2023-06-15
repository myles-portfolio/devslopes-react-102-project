import "@/css/Form.css";
import "@/css/Payment.css";
import { Divider } from "@/components/common/Divider";
import { MONTHS } from "@/utils/constants/date.constants";
import moment from "moment";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/common/Button";
import { DisplayProps } from "@/types/defaults";
import { Discount, PromoCodeForm } from "./summary/PromoCodeForm";

interface PaymentDisplayProps extends DisplayProps {
	setDiscount: (discount: Discount | null) => void;
}

const years = () => {
	const years = [];
	const dateStart = moment();
	const dateEnd = moment().add(25, "y");
	while (dateEnd.diff(dateStart, "years") >= 0) {
		years.push(dateStart.format("YYYY"));
		dateStart.add(1, "year");
	}
	return years;
};

export const PaymentDisplay: React.FC<PaymentDisplayProps> = ({
	handlePhaseTransition,
	setDiscount,
}) => {
	return (
		<div className="screen-style">
			<SectionHeader headerText={"Payment Information"} />
			<Divider />
			<div className="payment-container">
				<div className="left">
					<form className="payment-form">
						<div className="form-row">
							<label className="leading-label" htmlFor="cardholder-name">
								Name on Card:
							</label>
							<input type="text" id="cardholder-name" name="cardholder-name" />
						</div>
						<div className="form-row">
							<label className="leading-label" htmlFor="card-number">
								Card Number:
							</label>
							<input type="number" id="card-number" name="card-number" />
						</div>
						<div className="form-row multi-col">
							<div className="form-col">
								<label htmlFor="month">Month:</label>
								<select id="month" name="month">
									{MONTHS.map((month) => (
										<option key={month} value={month}>
											{month}
										</option>
									))}
								</select>
							</div>
							<div className="form-col">
								<label htmlFor="year">Year:</label>
								<select id="year" name="year">
									{years().map((year) => (
										<option key={year} value={year}>
											{year}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className="form-row">
							<label className="leading-label" htmlFor="cvc-cvv">
								CVV/CVC:
							</label>
							<input type="number" id="cvc-cvv" name="cvc-cvv" />
							<i className="fa-regular fa-circle-question"></i>
						</div>
					</form>
				</div>
				<div className="right">
					<PromoCodeForm setDiscount={setDiscount} />
				</div>
			</div>
			<Button
				onClick={() => handlePhaseTransition("prev")}
				text={"Back to Delivery"}
				className={"btn-secondary checkout"}
			/>
		</div>
	);
};
