import { CartProps } from "@/types/defaults";

export const activeCartData: CartProps[] = [
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

export const deletedCartData: CartProps[] = [];
