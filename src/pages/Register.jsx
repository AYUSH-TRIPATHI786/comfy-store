import { Form, Link, redirect } from 'react-router-dom';
import { SubmitBtn, FormInput } from '../components';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
	const formData = await request.formData();
	const userData = Object.fromEntries(formData);
	try {
		const resp = await customFetch.post('auth/local/register', userData);
		console.log(resp);
		toast.success('Account created successfully');
		return redirect('/login');
	} catch (error) {
		const msg =
			error?.response?.data?.error?.message ||
			'please double check your credentials';
		toast.error(msg);
		return null;
	}
};

const Register = () => {
	return (
		<section className="h-screen grid place-items-center">
			<Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg gap-y-4">
				<h4 className="text-3xl font-bold text-center capitalize">register</h4>
				<FormInput label="username" type="text" name="username" defaultValue="" />
				<FormInput label="email" type="email" name="email" defaultValue="" />
				<FormInput
					label="password"
					type="password"
					name="password"
					defaultValue=""
				/>
				<div className="mt-4">
					<SubmitBtn text="register" />
				</div>
				<p className="font-bold text-center mt-4">
					Already a member?
					<Link to="/login" className="link link-primary link-hover px-2">
						Login
					</Link>{' '}
				</p>
			</Form>
		</section>
	);
};
export default Register;
