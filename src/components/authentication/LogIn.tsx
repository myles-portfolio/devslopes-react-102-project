import { useState } from "react";
import "@/css/Form.css";

type LoginProps = {
	onFormSwitch: (formName: string) => void;
};

export const LogIn = ({ onFormSwitch }: LoginProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;
			default:
				break;
		}
	};

	return (
		<div className="auth-form-container">
			<div className="auth-form-header">
				<h2>Code Commerce</h2>
				<i className="fa-solid fa-xmark"></i>
			</div>
			<form className="auth-form" onSubmit={handleSubmit}>
				<label htmlFor="email">Email Address:</label>
				<input
					value={email}
					onChange={handleChange}
					type="email"
					placeholder="emailaddress@domain.com"
					id="email"
					name="email"
				/>
				<label htmlFor="password">Password:</label>
				<input
					value={password}
					onChange={handleChange}
					type="password"
					placeholder="********"
					id="password"
					name="password"
				/>
				<button className="btn-submit" type="submit">
					Log In
				</button>
			</form>
			<button className="btn-toggle" onClick={() => onFormSwitch("signup")}>
				Don't have an account yet? Sign up here.
			</button>
		</div>
	);
};
