import { useLoaderData } from 'react-router-dom';
import day  from 'dayjs';
import advancedFormat  from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const OrdersList = () => {
	const { orders, meta } = useLoaderData();
	return (
		<div className='mt-8'>
			<h4 className="capitalize">
				total orders : {meta.pagination.total}
			</h4>
			<div className="overflow-x-auto mt-4">
				<table className="table table-zebra-zebra">
					<thead>
						<tr>
							<th>Name</th>
							<th>Address</th>
							<th>Products</th>
							<th>Cost</th>
							<th className='hidden sm:block'>Date</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order,index) => {
							const {
								id,
								attributes: { name, address, numItemsInCart, orderTotal, createdAt }
							} = order;
                            const date = day(createdAt).format('HH:mm a - MMM Do  ,YYYY')
							return (
								<tr key={id} >
									<td>{name}</td>
									<td>{address}</td>
									<td>{numItemsInCart}</td>
									<td>{orderTotal}</td>
									<td className='hidden sm:block'>{date}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default OrdersList;
