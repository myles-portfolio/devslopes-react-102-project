import React from "react";
import "@/css/Tracker.css";

interface TrackerProps {
	currentCheckoutPhase: string;
}

export const Tracker: React.FC<TrackerProps> = ({ currentCheckoutPhase }) => {
	const isPhaseComplete = (phase: string): boolean => {
		const phaseOrder = ["cartReview", "shipping", "payment", "confirmation"];
		const currentPhaseIndex = phaseOrder.indexOf(currentCheckoutPhase);
		const phaseIndex = phaseOrder.indexOf(phase);

		return phaseIndex <= currentPhaseIndex;
	};

	const getCircleClassName = (phase: string) => {
		return `tracker-circle ${isPhaseComplete(phase) ? "complete" : ""}`;
	};

	const getIconClassName = (phase: string) => {
		let iconClass = "";

		if (isPhaseComplete(phase)) {
			switch (phase) {
				case "cartReview":
					iconClass = "fa-solid fa-cart-shopping complete";
					break;
				case "shipping":
					iconClass = "fa-solid fa-truck complete";
					break;
				case "payment":
					iconClass = "fa-regular fa-credit-card complete";
					break;
				case "confirmation":
					iconClass = "fa-solid fa-check complete";
					break;
				default:
					iconClass = "";
					break;
			}
		} else {
			switch (phase) {
				case "cartReview":
					iconClass = "fa-solid fa-cart-shopping";
					break;
				case "shipping":
					iconClass = "fa-solid fa-truck";
					break;
				case "payment":
					iconClass = "fa-regular fa-credit-card";
					break;
				case "confirmation":
					iconClass = "fa-solid fa-check";
					break;
				default:
					iconClass = "";
					break;
			}
		}

		return `fa-solid ${iconClass}`;
	};

	const getLineClassName = (phase: string) => {
		return `tracker-line ${isPhaseComplete(phase) ? "complete" : ""}`;
	};

	return (
		<div className="tracker-container">
			<div id="cart" className={getCircleClassName("cartReview")}>
				<i id="cart-icon" className={getIconClassName("cartReview")}></i>
			</div>
			<div className={getLineClassName("shipping")}></div>
			<div id="shipping" className={getCircleClassName("shipping")}>
				<i id="shipping-icon" className={getIconClassName("shipping")}></i>
			</div>
			<div className={getLineClassName("payment")}></div>
			<div id="payment" className={getCircleClassName("payment")}>
				<i id="payment-icon" className={getIconClassName("payment")}></i>
			</div>
			<div className={getLineClassName("confirmation")}></div>
			<div id="confirmation" className={getCircleClassName("confirmation")}>
				<i
					id="confirmation-icon"
					className={getIconClassName("confirmation")}
				></i>
			</div>
		</div>
	);
};
