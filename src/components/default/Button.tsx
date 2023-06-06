import React from "react";
import "@/css/index.css";

interface ButtonProps {
	onClick: () => void;
	text: string;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {
	const buttonClassName = className ? `${className}` : "btn-primary";

	return (
		<button onClick={onClick} className={buttonClassName}>
			{text}
		</button>
	);
};
