import React from "react";
import "@/css/index.css";

interface OrderDetailsProps {
	image?: string;
	title: string;
	detail: string;
	description: string;
	linkUrl?: string;
	linkText?: string;
	paymentTotal?: number;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({
	image,
	detail,
	description,
	linkUrl,
	linkText,
	title,
	paymentTotal,
}) => {
	const formattedPaymentTotal = paymentTotal
		? paymentTotal.toLocaleString("en-US", {
				style: "currency",
				currency: "USD",
		  })
		: "";

	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h3 className="h3-header">{title}</h3>
				<a style={{ fontSize: "0.8rem" }} href={linkUrl}>
					{linkText}
				</a>
			</div>
			<div
				style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}
			>
				{image && (
					<div>
						<img
							style={{ width: "24px", height: "auto" }}
							src={image}
							alt="card-icon"
						/>
						<p
							style={{
								fontSize: "0.8rem",
								fontWeight: "600",
								textTransform: "uppercase",
								color: "var(--clr-primary)",
							}}
						>
							{detail}
						</p>
					</div>
				)}
				{!image && (
					<p
						style={{
							fontSize: "0.8rem",
							fontWeight: "600",
							textTransform: "uppercase",
							color: "var(--clr-primary)",
						}}
					>
						{detail}
					</p>
				)}
				{paymentTotal && (
					<p style={{ fontSize: "0.8rem" }}>
						{description}: {formattedPaymentTotal}
					</p>
				)}
				{!paymentTotal && <p style={{ fontSize: "0.8rem" }}>{description}</p>}
			</div>
		</div>
	);
};
