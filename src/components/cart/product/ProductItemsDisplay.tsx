import "@/css/Product.css";
import { ProductItem } from "./ProductItem";

interface ProductItemData {
	sku: string;
	type: string;
	title: string;
	img: string;
	imgAlt: string;
	pid2first: string;
	pid2second: string;
	price: number;
	totalPrice?: number;
}

const productItemsData: ProductItemData[] = [
	{
		sku: "APP0021B42",
		type: "App",
		title: "Habit Tracker App",
		img: "/src/assets/todo-app.jpg",
		imgAlt: "todo-app",
		pid2first: "Mobile",
		pid2second: "1.2 GB",
		price: 1599.99,
	},
	{
		sku: "APP0043D68",
		type: "App",
		title: "Finance Dashboard App",
		img: "/src/assets/finance-dash-app.jpg",
		imgAlt: "dashboard-app",
		pid2first: "Web",
		pid2second: "24.3 GB",
		price: 2999.99,
	},
];

const calculateTotalPrice = (price: number) => {
	return price * 1.2; // Calculate the total price as needed
};

export const ProductItemsDisplay = () => {
	return (
		<div className="screen-style">
			<div className="product-header">
				<h3>Product</h3>
				<h3>Price</h3>
				<h3>Quantity</h3>
				<h3>Total Price</h3>
			</div>
			<div className="product-list">
				{productItemsData.map((item) => (
					<ProductItem
						key={item.sku}
						item={{ ...item, totalPrice: calculateTotalPrice(item.price) }}
					/>
				))}
			</div>
		</div>
	);
};
