import "@/css/Tracker.css";

export const Tracker = () => {
	return (
		<div className="alert-container">
			<div className="alert-icon">
				<i className="fa-solid fa-triangle-exclamation"></i>
			</div>
			<div className="alert-text">
				<p>1 out of stock item removed:</p>
				<p>Registration Form, Simple, Single-Modal</p>
			</div>
			<i className="fa-solid fa-xmark"></i>
		</div>
	);
};
