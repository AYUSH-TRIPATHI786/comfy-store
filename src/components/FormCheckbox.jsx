import { useState } from 'react';

const FormCheckbox = ({ name, label, size, defaultValue }) => {
	return (
		<div className="form-control items-center">
			<label htmlFor={name} className="label cursor-pointer">
				<span className="label-text capitalize">
					{label}
				</span>
			</label>
			<input
                name={name}
                type="checkbox"
				className={`checkbox checkbox-primary ${size}`}
				defaultChecked={defaultValue}
			/>
		</div>
	);
};
export default FormCheckbox;
