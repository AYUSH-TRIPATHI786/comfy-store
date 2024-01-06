const FormSelect = ({ name, label, list, size, defaultValue }) => {
	return (
		<label className="form-control w-full max-w-xs">
			<div className="label">
				<span className="label-text capitalize">{label}</span>
			</div>
			<select
				name={name}
                id={name}
				className={`input input-bordered ${size}`}
				defaultValue={defaultValue}
			>
				{list.map((option) => (
					<option key={option} >{option}</option>
				))}
			</select>
		</label>
	);
};
export default FormSelect;
