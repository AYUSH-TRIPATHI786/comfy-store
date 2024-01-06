import { Form, Link, useLoaderData } from 'react-router-dom';
import { FormInput, FormSelect,FormRange, FormCheckbox } from './';

const orders = ['a-z', 'z-a', 'high', 'low'];
const Filters = () => {
	const {
		meta: { companies, categories},
    params 
	} = useLoaderData();
  const {search,category,company,order,price,shipping} = params
	return (
		<Form className="grid sm:grid-cols-2 md:grid-cols-4 bg-base-200 rounded-md px-8 py-4 mb-10 gap-x-4 gap-y-8 items-center">
			<FormInput
				type="search"
				name="search"
				label="search product"
				size="input-sm"
        defaultValue={search}
			/>
      {/* Categories */}
      <FormSelect
				name="category"
				label="select category"
				size="select-sm"
				list={categories}
				defaultValue={category}
			/>
      {/* Companies */}
			<FormSelect
				name="company"
				label="select company"
				size="select-sm"
				list={companies}
				defaultValue={company}
			/>
      {/* Orders */}
			<FormSelect
				name="order"
				label="sort by"
				size="select-sm"
				list={orders}
				defaultValue={order}
			/>
      {/* Price Range*/}
      <FormRange
				name="price"
				label="select max price"
				size="range-sm"
        price={price}
			/>
			{/* Free Shipping */}
      <FormCheckbox 
      	name="shipping"
				label="free shipping"
				size="checkbox-sm"
        defaultValue={shipping}
			/>
			<button type="submit" className="btn btn-primary btn-sm uppercase">
				search
			</button>
			<Link to="/products" type="button" className="btn btn-accent btn-sm uppercase">
				reset
			</Link>
		</Form>
	);
};
export default Filters;
