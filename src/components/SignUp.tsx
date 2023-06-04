import { useState } from "react";
import "@/css/Form.css";

type SignUpProps = {
	onFormSwitch: (formName: string) => void;
};

export const SignUp = ({ onFormSwitch }: SignUpProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [pwConfirm, setPwConfirm] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [postalCode, setPostalCode] = useState(12345);

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
			case "pwConfirm":
				setPwConfirm(value);
				break;
			case "firstName":
				setFirstName(value);
				break;
			case "lastName":
				setLastName(value);
				break;
			case "postalCode":
				setPostalCode(Number(value));
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

				<label htmlFor="pwConfirm">Confirm Password:</label>
				<input
					value={pwConfirm}
					onChange={handleChange}
					type="password"
					placeholder="********"
					id="pwConfirm"
					name="pwConfirm"
				/>

				<label htmlFor="firstName">First Name:</label>
				<input
					value={firstName}
					onChange={handleChange}
					type="text"
					placeholder="First Name"
					id="firstName"
					name="firstName"
				/>

				<label htmlFor="lastName">Last Name:</label>
				<input
					value={lastName}
					onChange={handleChange}
					type="text"
					placeholder="Last Name"
					id="lastName"
					name="lastName"
				/>

				<label htmlFor="postalCode">Postal Code:</label>
				<input
					value={postalCode}
					onChange={handleChange}
					type="number"
					placeholder="Postal Code"
					id="postalCode"
					name="postalCode"
				/>

				<button className="btn-submit" type="submit">
					Sign Up
				</button>
			</form>
			<button className="btn-toggle" onClick={() => onFormSwitch("login")}>
				Already have an account? Log in here.
			</button>
		</div>
	);
};
