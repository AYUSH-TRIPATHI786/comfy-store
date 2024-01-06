import { redirect } from 'react-router-dom';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export const loader = (store) => async () => {
	const user = store.getState()?.userState?.user;
  if (!user) {
		toast.warn('You must be logged in to checkout');
		return redirect('/login');
	}
	return null;
};

const Checkout = () => {
	const cartTotal = useSelector(state=>state.cartState?.cartTotal)
  if(cartTotal===0){
    return <SectionTitle text="your cart is empty" />
  }
	return (
		<section>
			<SectionTitle text="place your order" />
			<div className="grid md:grid-cols-2 gap-8 mt-8 items-start">
				<CheckoutForm />
				<CartTotals />
			</div>
		</section>
	);
};
export default Checkout;
