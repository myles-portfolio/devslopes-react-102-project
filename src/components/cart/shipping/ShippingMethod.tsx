import "@/css/Shipping.css";

export const ShippingMethod = () => {
	return (
		<div>
			<h3 className="shipping-header">Shipping Method</h3>
			<form className="shipping-form">
				<div className="form-row method">
					<label className="leading-label">
						<input type="radio" name="shippingMethod" value="standard" />
						STANDARD
					</label>
					<p>Delivery in 4-6 Business Weeks - Free ($300 min.)</p>
				</div>
				<div className="form-row method">
					<label className="leading-label">
						<input type="radio" name="shippingMethod" value="express" />
						EXPRESS
					</label>
					<p>Delivery in 1-3 Business Weeks - $100</p>
					<a href="#">View Shipping Details</a>
				</div>
				<button className="btn-secondary method">Back to Cart</button>
			</form>
		</div>
	);
};
