import { useState } from "react";
import "@/css/App.css";
import { LogIn } from "@/components/authentication/LogIn";
import { SignUp } from "@/components/authentication/SignUp";
import { Header } from "@/components/base/Header";
import { Screen } from "./components/base/Screen";

function App() {
	const [displayedForm, setDisplayedForm] = useState("login");

	const toggleForm = (formName: string) => {
		setDisplayedForm(formName);
	};

	return (
		<main className="app">
			<Header />
			<div className="user-auth">
				{displayedForm === "login" ? (
					<LogIn onFormSwitch={toggleForm} />
				) : (
					<SignUp onFormSwitch={toggleForm} />
				)}
			</div>
			<Screen />
		</main>
	);
}

export default App;
