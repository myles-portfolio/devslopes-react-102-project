type InputProps = {
	label: string;
	id: string;
	type: string;
	value: string | number;
	placeholderText: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	tag: string;
	subtext: string;
};

export const AuthInput = ({
	label,
	id,
	type,
	value,
	placeholderText,
	handleChange,
	tag,
	subtext,
}: InputProps) => {
	return (
		<div className="input-field">
			<label className="input-label">{label}</label>
			<div className="input-row">
				<input
					id={id}
					type={type}
					value={value}
					placeholder={placeholderText}
					onChange={handleChange}
				/>
				<p className="input-tag">{tag}</p>
			</div>
			<p className="input-subtext">{subtext}</p>
		</div>
	);
};
