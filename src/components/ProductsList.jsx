import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsList = () => {
	const { products } = useLoaderData();
	return (
		<div className="grid gap-y-8 mt-12">
			{products.map((product) => {
				const {
					id,
					attributes: { title, company, price,image }
				} = product;
				return (
					<Link
						key={id}
						to={`/products/${product.id}`}
						className="flex flex-col sm:flex-row gap-y-4 justify-between shadow-xl hover:shadow-2xl duration-300  p-8 rounded-lg group"
					>
						<div className='flex flex-col sm:flex-row gap-x-16 gap-y-4'>
                            <img src={image} alt={title}  className=' h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'/>
                            <div>
                                <h2 className='text-lg font-medium capitalize'>{title}</h2>
                                <h4 className=' text-md  text-neutral-content '>{company}</h4>
                            </div>
                        </div>
                        <div className='font-medium text-lg'>
                            {formatPrice(price)}
                        </div>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductsList;
