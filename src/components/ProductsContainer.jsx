import { useState } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa6';
import { useLoaderData } from 'react-router';
import {ProductsGrid,ProductsList} from './';
const ProductsContainer = () => {
	const { products, meta } = useLoaderData();
	// console.log(products, meta);
	const total = meta.pagination.total;
	const [layout, setLayout] = useState('list');
	const getActiveStyle = (active) => {
		return active ? 'btn-primary': 'btn-ghost';
	};
	return (
		<div >
			<div className=" pb-2 border-b-2 border-base-300 flex justify-between">
				<div className='font-semibold'>
					{total} {total > 1 ? 'products' : 'product'}
				</div>
				<div className="flex gap-x-4">
					<button
						className={`btn btn-circle btn-sm ${
							 getActiveStyle(layout === 'grid')
						}`}
						onClick={() => setLayout('grid')}
					>
						<BsGridFill className="h-4 w-4" />
					</button>
					<button
						className={`btn btn-circle btn-sm ${
							getActiveStyle(layout === 'list')
						}`}
						onClick={() => setLayout('list')}
					>
						<FaBars className="h-4 w-4" />
					</button>
				</div>
			</div>
      {
        products.length===0 ? <div className='text-2xl mt-16'>
          <h2>Sorry, no products matched your search...</h2>
        </div> :
        layout === 'grid' ? <ProductsGrid/> : <ProductsList/>
      }
		</div>
	);
};
export default ProductsContainer;
