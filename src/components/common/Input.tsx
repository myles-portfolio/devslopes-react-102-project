import { forwardRef } from "react";

type InputProps = {
	label?: string;
	id: string;
	type: string;
	value: string | number;
	placeholderText: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	tag?: string;
	subtext?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			id,
			type,
			value,
			placeholderText,
			handleChange,
			onBlur,
			tag,
			subtext,
		},
		ref
	) => {
		return (
			<div className="input-field">
				{label && <label className="input-label">{label}</label>}
				<div className="input-row">
					<input
						ref={ref}
						id={id}
						type={type}
						value={value}
						placeholder={placeholderText}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<p className="input-tag">{tag}</p>
				</div>
				<p className="input-subtext">{subtext}</p>
			</div>
		);
	}
);
