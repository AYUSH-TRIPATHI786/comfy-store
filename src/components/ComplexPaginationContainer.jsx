import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPaginationContainer = () => {
	const { meta, params } = useLoaderData();
	const { page, pageCount } = meta.pagination;
	const { search, pathname } = useLocation();
	const navigate = useNavigate();
	const handlePageChange = (page) => {
		const searchParams = new URLSearchParams(search);
		searchParams.set('page', page);
		navigate(`${pathname}?${searchParams.toString()}`);
	};
	const addPageButton = ({ page, active }) => {
		return (
			<button
				key={page}
				className={`join-item btn btn-xs sm:btn-md ${
					active ? 'border-base-300 bg-base-300' : ''
				}`}
				onClick={()=>handlePageChange(page)}
			>
				{page}
			</button>
		);
	};
	const renderPageButtons = () => {
		const pageButtons = [];

		// first button
		pageButtons.push(addPageButton({ page: 1, active: page === 1 }));

		// dots
		if (page > 2) {
			pageButtons.push(
				<button key="dots-1" className="join-item btn btn-xs sm:btn-md">
					...
				</button>
			);
		}

		// active/current page
		if (page > 1 && page < pageCount) {
			pageButtons.push(addPageButton({ page, active: true }));
		}

		// dots
		if (page < pageCount - 1) {
			pageButtons.push(
				<button key="dots-2" className="join-item btn btn-xs sm:btn-md">
					...
				</button>
			);
		}

		// last button
		pageButtons.push(
			addPageButton({ page: pageCount, active: page === pageCount })
		);

		return pageButtons;
		
	};
	if (pageCount < 2) return null;
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
				{renderPageButtons()}
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
export default ComplexPaginationContainer;
