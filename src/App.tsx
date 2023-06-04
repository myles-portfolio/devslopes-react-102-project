import { useState } from "react";
import "@/css/App.css";
import { LogIn } from "@/components/LogIn";
import { SignUp } from "@/components/SignUp";

function App() {
	const [displayedForm, setDisplayedForm] = useState("login");

	const toggleForm = (formName: string) => {
		setDisplayedForm(formName);
	};

	return (
		<main className="App">
			<div>
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
