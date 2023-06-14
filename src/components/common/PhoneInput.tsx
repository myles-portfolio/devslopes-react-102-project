import React from "react";

type PhoneInputProps = {
	id: string;
	size: number;
	maxLength: number;
	name: string;
	value: string;
	inputRef: React.RefObject<HTMLInputElement>;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const PhoneInput: React.FC<PhoneInputProps> = ({
	id,
	size,
	maxLength,
	name,
	value,
	inputRef,
	onChange,
	onKeyDown,
}) => {
	return (
		<input
			type="tel"
			id={id}
			size={size}
			maxLength={maxLength}
			name={name}
			value={value}
			ref={inputRef}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
};
