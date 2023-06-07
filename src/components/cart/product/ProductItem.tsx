import { useState } from "react";
import "@/css/Product.css";
import { Divider } from "../../default/Divider";
import { priceFormatter } from "@/utils/helpers/action.helpers";
import { handleClose } from "@/utils/helpers/action.helpers";

interface ProductItemProps {
	item: {
		type: string;
		title: string;
		img: string;
		imgAlt: string;
		pid2first: string;
		pid2second: string;
		price: number;
		totalPrice: number;
	};
}

export const ProductItem = ({ item }: ProductItemProps) => {
	const [quantity, setQuantity] = useState(1);
	const [calculatedTotalPrice, setCalculatedTotalPrice] = useState(
		item.totalPrice
	);

	const handleItemRemoval = () => {
		handleClose("product-item");
	};

	const handleQuantityChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedQuantity = parseInt(event.target.value);
		setQuantity(selectedQuantity);
		const updatedTotalPrice = selectedQuantity * item.totalPrice;
		setCalculatedTotalPrice(updatedTotalPrice);
	};

	const quantityOptions = Array.from({ length: 10 }, (_, index) => index + 1);

	return (
		<div id="product-item" className="product-row-container">
			<Divider />
			<div className="pi-delete close" onClick={handleItemRemoval}>
				<i className="fa-solid fa-circle-xmark "></i>
			</div>
			<div className="product-row-li">
				<div className="product-item-container">
					<div className="pi-description">
						<div className="pi-img">
							<img src={item.img} alt={item.imgAlt} />
						</div>
						<div className="pi-overview">
							<p className="pi-type">{item.type}</p>
							<h3 className="pi-title">{item.title}</h3>
							<div className="pi-detail-container">
								<div id="pid-1" className="pi-detail-name">
									<p>Device:</p>
									<p>Size:</p>
								</div>
								<div id="pid-2" className="pi-detail-desc">
									<p>{item.pid2first}</p>
									<p>{item.pid2second}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="pi-price">
						<h3>{priceFormatter.format(item.price)}</h3>
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
						<h3>{priceFormatter.format(calculatedTotalPrice)}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
