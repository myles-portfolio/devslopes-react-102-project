import "@/css/Shipping.css";
import "@/css/Form.css";
import { Divider } from "@/components/common/Divider";
import {
	COUNTRIES,
	STATES,
	CITIES,
} from "@/utils/constants/location.constants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useState, useRef } from "react";
import { PhoneInput } from "@/components/common/PhoneInput";
import { PhoneInputItem, PhoneInputs } from "@/types/defaults";

export const ShippingForm = () => {
	const [cellPhoneNumbers, setCellPhoneNumbers] = useState<string[]>([
		"",
		"",
		"",
	]);
	const [otherPhoneNumbers, setOtherPhoneNumbers] = useState<string[]>([
		"",
		"",
		"",
	]);

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
			},
			{
				id: "cell-phone2",
				size: 3,
				maxLength: 3,
				name: "cell-phone2",
				ref: phone2Ref,
				nextRef: phone3Ref,
			},
			{
				id: "cell-phone3",
				size: 4,
				maxLength: 4,
				name: "cell-phone3",
				ref: phone3Ref,
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
			},
			{
				id: "other-phone2",
				size: 3,
				maxLength: 3,
				name: "other-phone2",
				ref: phone5Ref,
				nextRef: phone6Ref,
			},
			{
				id: "other-phone3",
				size: 4,
				maxLength: 4,
				name: "other-phone3",
				ref: phone6Ref,
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

	const updatePhoneNumbers = (
		index: number,
		value: string,
		type: keyof PhoneInputs
	) => {
		if (type === "cellPhone") {
			setCellPhoneNumbers((prevState) => {
				const updatedNumbers = [...prevState];
				updatedNumbers[index] = value;
				return updatedNumbers;
			});
		} else if (type === "otherPhone") {
			setOtherPhoneNumbers((prevState) => {
				const updatedNumbers = [...prevState];
				updatedNumbers[index] = value;
				return updatedNumbers;
			});
		}
	};

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
		updatePhoneNumbers(index, validatedValue, type);
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

	return (
		<div>
			<SectionHeader headerText={"Billing & Shipping"} />
			<Divider />
			<form className="shipping-form">
				<div className="form-row">
					<label className="leading-label" htmlFor="first-name">
						First Name:
					</label>
					<input type="text" id="first-name" name="first-name" />
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="last-name">
						Last Name:
					</label>
					<input type="text" id="last-name" name="last-name" />
				</div>
				<div className="form-row">
					<label className="leading-label" htmlFor="billing-address">
						Billing Address:
					</label>
					<input type="text" id="billing-address" name="billing-address" />
				</div>
				<div className="form-row multi-col">
					<div className="form-col">
						<label className="leading-label" htmlFor="postal-code">
							Postal Code:
						</label>
						<input
							type="text"
							id="postal-code"
							name="postal-code"
							size={5}
							maxLength={5}
							ref={postalCodeRef}
							onKeyPress={handlePostalCodeKeyPress}
						/>
					</div>
					<div className="form-col">
						<label htmlFor="country">Country:</label>
						<select id="country" name="country">
							{COUNTRIES.map((country) => (
								<option key={country} value={country}>
									{country}
								</option>
							))}
						</select>
					</div>
					<div className="form-col">
						<label htmlFor="city">City:</label>
						<select id="city" name="city">
							{CITIES.map((city) => (
								<option key={city} value={city}>
									{city}
								</option>
							))}
						</select>
					</div>
					<div className="form-col">
						<label htmlFor="state">State:</label>
						<select id="state" name="state">
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
						Cell Phone:
					</label>
					{phoneInputs.cellPhone.map((input: PhoneInputItem, index: number) => (
						<PhoneInput
							key={input.id}
							id={input.id}
							size={input.size}
							maxLength={input.maxLength}
							name={input.name}
							value={cellPhoneNumbers[index]}
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
								value={otherPhoneNumbers[index]}
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
