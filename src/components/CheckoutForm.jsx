import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action =
	(store,queryClient) =>
	async ({ request }) => {
		const formData = await request.formData();
		const {name,address} = Object.fromEntries(formData);
		try {
			const { cartItems, numItemsInCart, orderTotal } = store.getState().cartState;
            const info = {
                name,
                address,
                cartItems,
                numItemsInCart,
                chargeTotal: orderTotal,
                orderTotal: formatPrice(orderTotal)
            }
			const { data } = await customFetch.post('/orders', {
				data: info
			},{
                headers: {
                    Authorization: `Bearer ${store.getState().userState.user.token}`
                }
            });
        	queryClient.removeQueries(['orders'])
            store.dispatch(clearCart())
            toast.success('order placed successfully')
		    return redirect('/orders')
		} catch (error) {
            console.log(error);
            if (error?.response?.status === 401 || error?.response?.status===403) return redirect('/login')
            toast.error(error?.response?.data?.error?.message || 'there was an error placing your order')
			return null;
		}
	};

const CheckoutForm = () => {
	return (
		<Form className="" method="POST">
			<h4 className="text-xl font-medium capitalize mb-4">shipping information</h4>
			<FormInput label="first name" name="name" type="text" size="" />
			<div className="mt-4">
				<FormInput label="address" name="address" type="text" size="" />
			</div>
			<div className="mt-8">
				<SubmitBtn text="place your order" />
			</div>
		</Form>
	);
};
export default CheckoutForm;
