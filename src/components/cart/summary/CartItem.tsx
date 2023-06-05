import "@/css/CartItem.css";

export const CartItem = () => {
	return (
		<div className="cart-item-container">
			<div className="ci-img">
				<img src="/src/assets/todo-app.jpg" alt="todo-app" />
			</div>
			<div className="ci-overview">
				<h3 className="ci-title">Habit Tracker App</h3>
				<div className="ci-detail-container">
					<div className="cdc-left">
						<div id="cid-1" className="ci-detail-name">
							<p>Device:</p>
							<p>Size:</p>
							<p>Quantity:</p>
						</div>
						<div id="cid-2" className="ci-detail-desc">
							<p>Mobile</p>
							<p>1.2 GB</p>
							<p>1</p>
						</div>
					</div>
					<div className="cdc-right">
						<h4>$1919.98</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
