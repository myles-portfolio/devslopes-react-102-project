import { SectionHeader } from "@/components/default/SectionHeader";
import { Divider } from "@/components/default/Divider";
import "@/css/Confirmation.css";

export const Confirmation = () => {
	return (
		<div className="screen-style">
			<SectionHeader headerText={"Confirmation"} />
			<Divider />
			<div className="confirmation-container">
				<i className="fa-regular fa-circle-check"></i>
				<div>
					<h2>Congratulations!</h2>
					<h2>Your order is accepted.</h2>
				</div>
				<p style={{ textAlign: "center", maxWidth: "500px" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<button className="btn-tertiary confirm">Track Order</button>
				<button className="btn-secondary confirm">Back to Home Page</button>
			</div>
		</div>
	);
};
