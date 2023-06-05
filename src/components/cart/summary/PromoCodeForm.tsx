import "@/css/PromoCode.css";

export const PromoCodeForm = () => {
	return (
		<div className="promo-container">
			<p className="summary-header">Do you have a promo code?</p>
			<form className="promo-form" action="">
				<input
					className="promo-input"
					name="promo"
					id="promo"
					type="text"
					placeholder="Code"
				/>
				<button className="btn-secondary">Apply</button>
			</form>
		</div>
	);
};
