import { customFetch } from '../utils';
import { Filters, PaginationContainer, ProductsContainer } from '../components';

const url = '/products';

const allProductsQuery = (params) => {
	const { search, category, company, sort, price, shipping, page } = params;

	return {
		queryKey: [
			'products',
			search ?? '',
			category ?? 'all',
			company ?? 'all',
			sort ?? 'a-z',
			price ?? 100000,
			shipping ?? false,
			page ?? 1
		],
		queryFn: () => customFetch(url, { params })
	};
};

export const loader =
	(queryClient) =>
	async ({ request }) => {
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries()
		]);
		try {
			const resp = await queryClient.ensureQueryData(allProductsQuery(params));
			return { products: resp.data.data, meta: resp.data.meta, params };
				
		} catch (error) {
			console.log(error);
		}
	};

const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
};
export default Products;
