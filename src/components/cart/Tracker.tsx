import "@/css/Tracker.css";

export const Tracker = () => {
	return (
		<div className="tracker-container">
			<div id="cart" className="tracker-circle">
				<i className="fa-solid fa-cart-shopping"></i>
			</div>
			<div className="tracker-line"></div>
			<div id="billing" className="tracker-circle">
				<i className="fa-solid fa-truck"></i>
			</div>
			<div className="tracker-line"></div>
			<div id="payment" className="tracker-circle">
				<i className="fa-regular fa-credit-card"></i>
			</div>
			<div className="tracker-line"></div>
			<div id="confirmation" className="tracker-circle">
				<i className="fa-solid fa-check"></i>
			</div>
		</div>
	);
};
