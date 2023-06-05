import "@/css/Shipping.css";
import { Divider } from "@/components/default/Divider";
import {
	countries,
	states,
	cities,
} from "@/utils/constants/location.constants";

export const ShippingForm = () => {
	return (
		<div>
			<h3 className="shipping-header">Shipping Information</h3>
			<Divider />
			<form className="shipping-form">
				<div className="form-row">
					<label className="leading-label" htmlFor="first-name">
						First Name:
					</label>
					<input type="text" id="first-name" name="first-name" />
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="last-name">
						Last Name:
					</label>
					<input type="text" id="last-name" name="last-name" />
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="billing-address">
						Billing Address:
					</label>
					<input type="text" id="billing-address" name="billing-address" />
				</div>
				<div className="form-row multi-col">
					<div className="form-col">
						<label className="leading-label" htmlFor="postal-code">
							Postal Code:
						</label>
						<input type="text" id="postal-code" name="postal-code" />
					</div>
					<div className="form-col">
						<label htmlFor="country">Country:</label>
						<select id="country" name="country">
							{countries.map((country) => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select>
					</div>
					<div className="form-col">
						<label htmlFor="city">City:</label>
						<select id="city" name="city">
							{cities.map((city) => (
								<option key={city} value={city}>
									{city}
								</option>
							))}
						</select>
					</div>
					<div className="form-col">
						<label htmlFor="state">State:</label>
						<select id="state" name="state">
							{states.map((state) => (
								<option key={state} value={state}>
									{state}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="cell-phone">
						Cell Phone:
					</label>
					<input type="tel" id="cell-phone" name="cell-phone" />
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="other-phone">
						Other Phone:
					</label>
					<input type="tel" id="other-phone" name="other-phone" />
				</div>
			</form>
		</div>
	);
};
