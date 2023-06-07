import "@/css/Alert.css";
import { handleClose } from "@/utils/helpers/action.helpers";

export const Alert = () => {
	const handleAlertClose = () => {
		handleClose("alert");
	};

	return (
		<div id="alert" className="alert-container">
			<div className="alert-icon">
				<i className="fa-solid fa-triangle-exclamation"></i>
			</div>
			<div className="alert-text">
				<p>1 out of stock item removed:</p>
				<p>Registration Form, Simple, Single-Page</p>
			</div>
			<i className="fa-solid fa-xmark close" onClick={handleAlertClose}></i>
		</div>
	);
};
