import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
	const user = useSelector(state=>state.userState.user);
	const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
	if (numItemsInCart === 0) {
		return <SectionTitle text={'your cart is empty'} />;
	}
	return (
		<div>
			<SectionTitle text={'shopping cart'} />

			<div className="mt-8 grid lg:grid-cols-12 gap-8 lg:gap-12">
				<div className="lg:col-span-8">
					<CartItemsList />
				</div>
				<div className="lg:col-span-4">
					<CartTotals />
					{user ? (
						<Link to="/checkout" className="btn btn-primary btn-block uppercase mt-8">
							proceed to checkout
						</Link>
					) : (
						<Link to="/login" className="btn btn-primary btn-block uppercase mt-8">
							please login
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
export default Cart;
