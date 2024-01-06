import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotal: 0,
	shipping: 500,
	tax: 0,
	orderTotal: 0
};

const getCartFromLocalStorage = ()=>{
	return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
	name: ['cart'],
	initialState: getCartFromLocalStorage(),
	reducers: {
		addItem(state, { payload }) {
			console.log(payload);
			const newProduct = payload.product
			const item = state.cartItems.find(item=>item.cartId===newProduct.cartId)
			if(item){
				item.amount+=newProduct.amount
			}else {
				state.cartItems.push(newProduct)
			}
			state.numItemsInCart += newProduct.amount;
			state.cartTotal += newProduct.amount*newProduct.price
			cartSlice.caseReducers.calculateTotals(state)
			toast.success('Item added to cart')
		},
		clearCart(state) {
			localStorage.setItem('cart',JSON.stringify(defaultState))
			return defaultState
		},
		removeItem(state, action) {
			const {cartId} = action.payload
			const product = state.cartItems.find(item=>item.cartId === cartId) 
			state.cartItems = state.cartItems.filter((item) => item.cartId !== cartId);
			state.numItemsInCart -= product.amount;
			state.cartTotal -= product.amount* product.price
			cartSlice.caseReducers.calculateTotals(state)
			toast.error('Item removed from cart')
		},
		editItem(state, action) {
			const {cartId,amount} = action.payload
			const cartItem = state.cartItems.find((item) => item.cartId === cartId)
			console.log(cartItem.price,state.cartItems);
			state.numItemsInCart += amount-cartItem.amount;
			state.cartTotal += (amount - cartItem.amount)* cartItem.price
			cartItem.amount = amount
			cartSlice.caseReducers.calculateTotals(state)
			toast.success('Cart updated')
		},
		calculateTotals(state) {
			state.tax = state.cartTotal*0.1
			state.orderTotal = state.tax + state.shipping + state.cartTotal
			localStorage.setItem('cart',JSON.stringify(state))
		}
	}
});

export const {addItem,clearCart,removeItem,editItem} = cartSlice.actions
export default cartSlice.reducer