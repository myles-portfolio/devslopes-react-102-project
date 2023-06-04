import { useState } from "react";
import "@/css/App.css";
import { LogIn } from "@/components/authentication/LogIn";
import { SignUp } from "@/components/authentication/SignUp";
import { Header } from "@/components/base/Header";

function App() {
	const [displayedForm, setDisplayedForm] = useState("login");

	const toggleForm = (formName: string) => {
		setDisplayedForm(formName);
	};

	return (
		<main className="App">
			<Header />
			<div className="user-auth">
				{displayedForm === "login" ? (
					<LogIn onFormSwitch={toggleForm} />
				) : (
					<SignUp onFormSwitch={toggleForm} />
				)}
			</div>
		</main>
	);
}

export default App;
