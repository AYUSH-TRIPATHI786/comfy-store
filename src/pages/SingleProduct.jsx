import { useLoaderData } from 'react-router';
import { customFetch, formatPrice, generateAmountOptions } from '../utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const singleProductQuery = (id) => {
	return {
		queryKey: ['singleProduct',id],
		queryFn: () => customFetch(`/products/${id}`)
	};
};

export const loader =
	(queryClient) =>
	async ({ params }) => {
		const resp = await queryClient.ensureQueryData(singleProductQuery(params.id));
		return resp.data.data;
	};

const SingleProduct = () => {
	const dispatch = useDispatch();
	const {
		id,
		attributes: { image, title, price, description, colors, company }
	} = useLoaderData();
	// console.log(id,image,title,price,description,colors,company);
	const [amount, setAmount] = useState(1);
	const [productColor, setProductColor] = useState(colors?.[0]);
	const dollarAmount = formatPrice(price);
	const cartProduct = {
		cartId: id + productColor,
		productId: id,
		image,
		title,
		price,
		amount,
		productColor,
		company
	};
	const addToBag = () => dispatch(addItem({ product: cartProduct }));
	const handleAmount = (e) => {
		setAmount(parseInt(e.target.value));
	};
	return (
		<section>
			<div className="text-md breadcrumbs">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</div>
			<div className="grid lg:grid-cols-2 gap-y-8 lg:gap-x-16 mt-6">
				<img
					src={image}
					alt={title}
					className="h-96 w-96 lg:w-full object-cover rounded-xl "
				/>
				<div>
					<h2 className="text-3xl font-bold capitalize">{title}</h2>
					<h4 className="text-xl font-bold text-neutral-content capitalize mt-2">
						{company}
					</h4>
					<h4 className="text-xl mt-3">{dollarAmount}</h4>
					<p className="mt-6 leading-8">{description}</p>
					<div className="mt-6">
						<h4 className="font-semibold tracking-wider">Colors</h4>
						<div className="flex gap-2 mt-2">
							{colors.map((color) => (
								<button
									key={nanoid()}
									type="button"
									className={`btn btn-circle btn-xs border-2 ${
										color === productColor ? 'border-secondary' : ''
									}`}
									style={{ backgroundColor: color }}
									onClick={() => setProductColor(color)}
								></button>
							))}
						</div>
						{/* AMOUNT */}
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<h4 className="text-md font-medium tracking-wider capitalize">
									amount
								</h4>
							</label>
							<select
								className="select select-secondary select-bordered select-md"
								value={amount}
								onChange={handleAmount}
							>
								{generateAmountOptions(20)}
							</select>
						</div>
						{/* CART BUTTON */}
						<div className="mt-10 ">
							<button
								className="btn btn-secondary btn-md uppercase"
								onClick={addToBag}
							>
								Add to bag
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default SingleProduct;
