import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
	const { meta, params } = useLoaderData();
	const pageCount = meta.pagination?.pageCount;
	const page = Number(params?.page || 1);
	const { pathname, search } = useLocation();
	const navigate = useNavigate();
	const handlePageChange = (page) => {
		const searchParams = new URLSearchParams(search);
		searchParams.set('page', page);
		navigate(`${pathname}?${searchParams.toString()}`);
	};
	const pages = Array.from({ length: pageCount }, (_, index) => {
		return (
			<button
				key={index}
				className={`join-item btn  btn-xs sm:btn-md ${
					page === index + 1 ? 'btn-active' : ''
				}`}
				onClick={() => handlePageChange(index + 1)}
			>
				{index + 1}
			</button>
		);
	});

	if (pageCount < 2) {
		return null;
	}
	return (
		<div className="flex justify-end mt-16">
			<div className="join">
				<button
					className={`join-item btn btn-xs sm:btn-md ${
						page - 1 < 1 ? 'btn-disabled' : ''
					}`}
					onClick={() => handlePageChange(page - 1)}
				>
					Prev
				</button>
				{pages}
				<button
					className={`join-item btn btn-xs sm:btn-md ${
						page + 1 > pageCount ? 'btn-disabled' : ''
					}`}
					onClick={() => handlePageChange(page + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};
export default PaginationContainer;
