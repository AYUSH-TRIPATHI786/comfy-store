import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
	const { cartTotal, shipping, orderTotal, tax } = useSelector(
		(state) => state.cartState
	);
	return (
		<div className="card bg-base-200">
			<div className="card-body">
				<div className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span>Subtotal</span>
					<span className='font-medium'>{formatPrice(cartTotal)}</span>
				</div>
				<div className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span>Shipping</span>
					<span className='font-medium'>{formatPrice(shipping)}</span>
				</div>
				<div className="flex justify-between text-xs border-b border-base-300 pb-2">
					<span>Tax</span>
					<span className='font-medium'>{formatPrice(tax)}</span>
				</div>
				<p className="flex justify-between text-sm mt-4 font-bold pb-2">
					<span>Order Total</span>
					<span>{formatPrice(orderTotal)}</span>
				</p>
			</div>
		</div>
	);
};
export default CartTotals;
