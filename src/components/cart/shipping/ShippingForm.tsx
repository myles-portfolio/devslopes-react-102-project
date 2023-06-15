import "@/css/Shipping.css";
import "@/css/Form.css";
import { Divider } from "@/components/common/Divider";
import {
	COUNTRIES,
	STATES,
	CITIES,
} from "@/utils/constants/location.constants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useRef, useEffect } from "react";
import { PhoneInput } from "@/components/common/PhoneInput";
import { PhoneInputItem, PhoneInputs } from "@/types/defaults";

interface ShippingFormProps {
	setFirstNameCompleted: (value: boolean) => void;
	setLastNameCompleted: (value: boolean) => void;
	setAddressCompleted: (value: boolean) => void;
	setPostalCodeCompleted: (value: boolean) => void;
	setCountryCompleted: (value: boolean) => void;
	setCityCompleted: (value: boolean) => void;
	setStateCompleted: (value: boolean) => void;
	setCellPhoneCompleted: (value: boolean) => void;
	setOtherPhoneCompleted: (value: boolean) => void;
	isMsgVisible: boolean;
	formErrors: string;
	formValues: {
		firstName: string;
		lastName: string;
		address: string;
		postalCode: string;
		country: string;
		city: string;
		state: string;
		cell1: string;
		cell2: string;
		cell3: string;
		other1: string;
		other2: string;
		other3: string;
	};
	handleFormChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
}

export const ShippingForm = ({
	setFirstNameCompleted,
	setLastNameCompleted,
	setAddressCompleted,
	setPostalCodeCompleted,
	setCountryCompleted,
	setCityCompleted,
	setStateCompleted,
	setCellPhoneCompleted,
	setOtherPhoneCompleted,
	isMsgVisible,
	formErrors,
	formValues,
	handleFormChange,
}: ShippingFormProps) => {
	const postalCodeRef = useRef<HTMLInputElement>(null);
	const phone1Ref = useRef<HTMLInputElement>(null);
	const phone2Ref = useRef<HTMLInputElement>(null);
	const phone3Ref = useRef<HTMLInputElement>(null);
	const phone4Ref = useRef<HTMLInputElement>(null);
	const phone5Ref = useRef<HTMLInputElement>(null);
	const phone6Ref = useRef<HTMLInputElement>(null);

	const phoneInputs: PhoneInputs = {
		cellPhone: [
			{
				id: "cell-phone1",
				size: 3,
				maxLength: 3,
				name: "cell-phone1",
				ref: phone1Ref,
				nextRef: phone2Ref,
				value: formValues.cell1,
			},
			{
				id: "cell-phone2",
				size: 3,
				maxLength: 3,
				name: "cell-phone2",
				ref: phone2Ref,
				nextRef: phone3Ref,
				value: formValues.cell2,
			},
			{
				id: "cell-phone3",
				size: 4,
				maxLength: 4,
				name: "cell-phone3",
				ref: phone3Ref,
				value: formValues.cell3,
			},
		],
		otherPhone: [
			{
				id: "other-phone1",
				size: 3,
				maxLength: 3,
				name: "other-phone1",
				ref: phone4Ref,
				nextRef: phone5Ref,
				value: formValues.other1,
			},
			{
				id: "other-phone2",
				size: 3,
				maxLength: 3,
				name: "other-phone2",
				ref: phone5Ref,
				nextRef: phone6Ref,
				value: formValues.other2,
			},
			{
				id: "other-phone3",
				size: 4,
				maxLength: 4,
				name: "other-phone3",
				ref: phone6Ref,
				value: formValues.other3,
			},
		],
	};

	const moveFocusToNextInput = (index: number, type: keyof PhoneInputs) => {
		const inputs =
			type === "cellPhone" ? phoneInputs.cellPhone : phoneInputs.otherPhone;
		if (index < inputs.length - 1) {
			inputs[index + 1].ref.current?.focus();
		}
	};

	const moveFocusToPreviousInput = (index: number, type: keyof PhoneInputs) => {
		const inputs =
			type === "cellPhone" ? phoneInputs.cellPhone : phoneInputs.otherPhone;
		if (index > 0) {
			const previousRef = inputs[index - 1].ref;
			const previousInput = previousRef.current;
			if (previousInput) {
				previousInput.focus();
				setTimeout(() => {
					previousInput.selectionStart = previousInput.value.length;
					previousInput.selectionEnd = previousInput.value.length;
				});
			}
		}
	};

	useEffect(() => {
		const joinedCellPhoneNumbers = `${formValues.cell1}${formValues.cell2}${formValues.cell3}`;
		const cellPhoneCompleted = joinedCellPhoneNumbers.length === 10;
		setCellPhoneCompleted(cellPhoneCompleted);
	}, [
		formValues.cell1,
		formValues.cell2,
		formValues.cell3,
		setCellPhoneCompleted,
	]);

	useEffect(() => {
		const joinedOtherPhoneNumbers = `${formValues.other1}${formValues.other2}${formValues.other3}`;
		let otherPhoneCompleted;
		if (
			joinedOtherPhoneNumbers.length === 0 ||
			joinedOtherPhoneNumbers.length === 10
		) {
			otherPhoneCompleted = true;
		} else {
			otherPhoneCompleted = false;
		}
		setOtherPhoneCompleted(otherPhoneCompleted);
	}, [
		formValues.other1,
		formValues.other2,
		formValues.other3,
		setOtherPhoneCompleted,
	]);

	const checkMaxLengthAndMoveFocus = (
		index: number,
		type: keyof PhoneInputs
	) => {
		const inputs =
			type === "cellPhone" ? phoneInputs.cellPhone : phoneInputs.otherPhone;
		const currentInput = inputs[index].ref.current;
		if (currentInput && currentInput.value.length === inputs[index].maxLength) {
			moveFocusToNextInput(index, type);
		}
	};

	const checkEmptyAndMoveFocus = (index: number, type: keyof PhoneInputs) => {
		const inputs =
			type === "cellPhone" ? phoneInputs.cellPhone : phoneInputs.otherPhone;
		const currentInput = inputs[index].ref.current;
		if (currentInput && currentInput.value === "") {
			moveFocusToPreviousInput(index, type);
		}
	};

	const numberHandler = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>,
		index: number,
		type: keyof PhoneInputs
	) => {
		const validatedValue = e.currentTarget.value.replace(/[^0-9]/g, "");

		if (type === "cellPhone") {
			const cell1 = index === 0 ? validatedValue : formValues.cell1;
			const cell2 = index === 1 ? validatedValue : formValues.cell2;
			const cell3 = index === 2 ? validatedValue : formValues.cell3;
			handleFormChange({
				target: { name: "cell1", value: String(cell1) },
			} as React.ChangeEvent<HTMLInputElement>);
			handleFormChange({
				target: { name: "cell2", value: String(cell2) },
			} as React.ChangeEvent<HTMLInputElement>);
			handleFormChange({
				target: { name: "cell3", value: String(cell3) },
			} as React.ChangeEvent<HTMLInputElement>);
		} else if (type === "otherPhone") {
			const other1 = index === 0 ? validatedValue : formValues.other1;
			const other2 = index === 1 ? validatedValue : formValues.other2;
			const other3 = index === 2 ? validatedValue : formValues.other3;
			handleFormChange({
				target: { name: "other1", value: String(other1) },
			} as React.ChangeEvent<HTMLInputElement>);
			handleFormChange({
				target: { name: "other2", value: String(other2) },
			} as React.ChangeEvent<HTMLInputElement>);
			handleFormChange({
				target: { name: "other3", value: String(other3) },
			} as React.ChangeEvent<HTMLInputElement>);
		}

		checkMaxLengthAndMoveFocus(index, type);

		if (
			validatedValue === "" &&
			e.nativeEvent instanceof KeyboardEvent &&
			e.nativeEvent.key === "Backspace"
		) {
			checkEmptyAndMoveFocus(index, type);
		}
	};

	const handlePostalCodeKeyPress = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		const keyCode = e.keyCode || e.which;
		const keyValue = String.fromCharCode(keyCode);
		const regex = /[0-9]/;
		if (!regex.test(keyValue)) {
			e.preventDefault();
		}
	};

	const handleFirstNameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value;
		const firstNameCompleted = value.length > 0;
		setFirstNameCompleted(firstNameCompleted);
		handleFormChange(event);
	};

	const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const lastNameCompleted = value.length > 0;
		setLastNameCompleted(lastNameCompleted);
		handleFormChange(event);
	};

	const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const addressCompleted = value.length > 0;
		setAddressCompleted(addressCompleted);
		handleFormChange(event);
	};

	const handlePostalCodeChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		event.persist();

		const value = event.target.value;
		const postalCodeCompleted = value.length > 0;
		setPostalCodeCompleted(postalCodeCompleted);
		const postalCodeValue = value === "" ? "" : value;

		event.target.name = "postalCode";
		event.target.value = postalCodeValue;

		handleFormChange(event);
	};

	const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		const countryCompleted = value !== "";
		setCountryCompleted(countryCompleted);
		handleFormChange(event);
	};

	const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		const cityCompleted = value !== "";
		setCityCompleted(cityCompleted);
		handleFormChange(event);
	};

	const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		const stateCompleted = value !== "";
		setStateCompleted(stateCompleted);
		handleFormChange(event);
	};

	return (
		<div>
			<SectionHeader headerText={"Billing & Shipping"} />
			<Divider />
			<p className="required">* = required</p>
			{isMsgVisible && <p className="error">{formErrors}</p>}
			<form className="shipping-form">
				<div className="form-row">
					<label className="leading-label" htmlFor="firstName">
						First Name*:
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={String(formValues.firstName)}
						onChange={handleFirstNameChange}
					/>
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="lastName">
						Last Name*:
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={String(formValues.lastName)}
						onChange={handleLastNameChange}
					/>
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="address">
						Billing Address*:
					</label>
					<input
						type="text"
						id="address"
						name="address"
						value={String(formValues.address)}
						onChange={handleAddressChange}
					/>
				</div>
				<div className="form-row multi-col">
					<div className="form-col">
						<label className="leading-label" htmlFor="postal-code">
							Postal Code*:
						</label>
						<input
							type="text"
							id="postalCode"
							name="postalCode"
							value={String(formValues.postalCode)}
							size={5}
							maxLength={5}
							ref={postalCodeRef}
							onKeyPress={handlePostalCodeKeyPress}
							onChange={handlePostalCodeChange}
						/>
					</div>
					<div className="form-col">
						<label htmlFor="country">Country*:</label>
						<select
							id="country"
							name="country"
							value={String(formValues.country)}
							onChange={handleCountryChange}
						>
							{COUNTRIES.map((country) => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select>
					</div>
					<div className="form-col">
						<label htmlFor="city">City*:</label>
						<select
							id="city"
							name="city"
							value={String(formValues.city)}
							onChange={handleCityChange}
						>
							{CITIES.map((city) => (
								<option key={city} value={city}>
									{city}
								</option>
							))}
						</select>
					</div>
					<div className="form-col">
						<label htmlFor="state">State*:</label>
						<select
							id="state"
							name="state"
							value={String(formValues.state)}
							onChange={handleStateChange}
						>
							{STATES.map((state) => (
								<option key={state} value={state}>
									{state}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="cell-phone">
						Cell Phone*:
					</label>
					{phoneInputs.cellPhone.map((input: PhoneInputItem, index: number) => (
						<PhoneInput
							key={input.id}
							id={input.id}
							size={input.size}
							maxLength={input.maxLength}
							name={input.name}
							value={input.value}
							inputRef={input.ref}
							onChange={(e) => numberHandler(e, index, "cellPhone")}
							onKeyDown={(e) => {
								if (e.key === "Backspace" && e.currentTarget.value === "") {
									e.preventDefault();
									moveFocusToPreviousInput(index, "cellPhone");
								}
							}}
						/>
					))}
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="other-phone">
						Other Phone:
					</label>
					{phoneInputs.otherPhone.map(
						(input: PhoneInputItem, index: number) => (
							<PhoneInput
								key={input.id}
								id={input.id}
								size={input.size}
								maxLength={input.maxLength}
								name={input.name}
								value={input.value}
								inputRef={input.ref}
								onChange={(e) => numberHandler(e, index, "otherPhone")}
								onKeyDown={(e) => {
									if (e.key === "Backspace" && e.currentTarget.value === "") {
										e.preventDefault();
										moveFocusToPreviousInput(index, "otherPhone");
									}
								}}
							/>
						)
					)}
				</div>
			</form>
		</div>
	);
};
