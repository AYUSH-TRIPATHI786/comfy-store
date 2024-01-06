import { useState } from 'react';
import { formatPrice } from '../utils';

const FormRange = ({ label,name,size,price, min=0, max=100000,  step = 1000 }) => {
	const [selectedPrice, setSelectedPrice] = useState(price || max);
	return (
		<div className='form-control'>
			<div className="label" htmlFor={name}>
				<label className="label-text capitalize" >
					{label}
				</label>
				<span >{formatPrice(selectedPrice)}</span>
			</div>
			<input
				type="range"
				min={min}
				max={max}
				name={name}
				value={selectedPrice}
				className={`range range-primary ${size}`}
				step={step}
				onChange={(e) => setSelectedPrice(e.target.value)}
			/>
			<div className="w-full flex justify-between text-xs mt-2 px-2">
				<span>{0}</span>
				<span>Max : {formatPrice(max)}</span>
			</div>
		</div>
	);
};
export default FormRange;
