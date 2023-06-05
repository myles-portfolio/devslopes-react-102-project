import { useState } from "react";
import "@/css/Product.css";
import { Divider } from "../default/Divider";

export const ProductItem = () => {
	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (event: { target: { value: string } }) => {
		setQuantity(parseInt(event.target.value));
	};

	const quantityOptions = Array.from({ length: 10 }, (_, index) => index + 1);

	return (
		<div className="product-row-container">
			<Divider />
			<div className="pi-delete">
				<i className="fa-solid fa-circle-xmark"></i>
			</div>
			<div className="product-row-li">
				<div className="product-item-container">
					<div className="pi-description">
						<div className="pi-img">
							<img src="/src/assets/todo-app.jpg" alt="todo-app" />
						</div>
						<div className="pi-overview">
							<p className="pi-type">App</p>
							<h3 className="pi-title">Habit Tracker App</h3>
							<div className="pi-detail-container">
								<div id="pid-1" className="pi-detail-name">
									<p>Device:</p>
									<p>Size:</p>
								</div>
								<div id="pid-2" className="pi-detail-desc">
									<p>Mobile</p>
									<p>1.2 GB</p>
								</div>
							</div>
						</div>
					</div>
					<div className="pi-price">
						<h3>$1599.99</h3>
					</div>
					<div className="pi-quantity">
						<select
							name="quantity"
							id="quantity"
							value={quantity}
							onChange={handleQuantityChange}
						>
							{quantityOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div className="pi-total-price">
						<h3>$1920.00</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
