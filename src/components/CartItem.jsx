import { useDispatch } from 'react-redux';
import { formatPrice, generateAmountOptions } from '../utils';
import { editItem, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ cartItem }) => {
	const { image, title, company, amount, price, productColor } = cartItem;
	const dispatch = useDispatch();
	const handleRemoveItem = () => {
		dispatch(removeItem({ cartId }));
	};
	const handleAmountChange = (amount) => {
		dispatch(editItem({ cartId, amount }));
	};
	return (
		<article className="flex flex-col sm:flex-row  pb-6 border-b border-base-300 mb-12">
			<img
				src={image}
				alt={title}
				className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg object-cover"
			/>
			<div className="sm:ml-12 sm:w-48">
				{/* TITLE */}
				<h3 className="capitalize font-medium">{title}</h3>
				{/* COMPANY */}
				<p className="text-neutral-content text-sm mt-2 capitalize">{company}</p>
				{/* COLOR */}
				<p className="mt-4 flex items-center gap-x-2 text-sm capitalize">
					color:
					<span
						className="badge badge-sm"
						style={{ backgroundColor: productColor }}
					></span>
				</p>
			</div>
			<div className="sm:ml-12">
				{/* AMOUNT */}
				<div className="form-control max-w-xs">
					<label className="label p-0" htmlFor="amount">
						Amount
					</label>
					<select
						defaultValue={amount}
						name="amount"
						id="amount"
						className="select select-bordered select-xs mt-2 select-base"
						onChange={(e) => handleAmountChange(e.target.value)}
					>
						{generateAmountOptions(amount + 5)}
					</select>
				</div>
				{/* REMOVE */}
				<button
					className="link link-primary link-hover text-sm mt-2"
					onClick={handleRemoveItem}
				>
					remove
				</button>
			</div>
			<div className="sm:ml-auto">
				<h4 className="font-medium text-lg">{formatPrice(price * amount)}</h4>
			</div>
		</article>
	);
};
export default CartItem;
