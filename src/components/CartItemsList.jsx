import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItemsList = () => {
	const cartItems = useSelector((state) => state.cartState.cartItems);
	return (
		<div>
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.cartId} cartItem={cartItem} />
			))}
		</div>
	);
};
export default CartItemsList;
