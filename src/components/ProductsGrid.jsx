import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsGrid = () => {
	const {products} = useLoaderData();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12">
			{products.map((product) => {
				const { id, attributes } = product;
				const { title, image, price } = attributes;
				return (
					<Link
						to={`/products/${id}`}
						className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
						key={id}
					>
						<figure className="px-4 pt-4 ">
							<img src={image} alt={title} className="h-64 md:h-48 w-full object-cover rounded-xl" />
						</figure>
						<div className="card-body text-center items-center ">
							<h4 className="card-title tracking-wider capitalize">{title}</h4>
							<span className="text-secondary">{formatPrice(price)}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductsGrid;
