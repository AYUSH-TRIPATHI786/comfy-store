import { FormInput } from '../components';
import SubmitBtn from '../components/SubmitBtn';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export const action =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const userData = Object.fromEntries(formData);
		try {
			const { data } = await customFetch.post('auth/local', userData);
			store.dispatch(loginUser(data));
			toast.success('logged in successfully');
			return redirect('/');
		} catch (error) {
			toast.error(
				error?.response?.data?.error?.message ||
					'Invalid identifier or password'
			);
			return null;
		}
	};

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginAsGuestUser = async () => {
		try {
			const { data } = await customFetch.post('auth/local', {
				identifier: 'test@test.com',
				password: 'secret'
			});
			console.log(data);
			dispatch(loginUser(data));
			toast.success('welcome guest user');
			navigate('/');
		} catch (error) {
			console.log(error);
			toast.error(
				error?.response?.data?.error?.message ||
					'Invalid identifier or password'
			);
		}
	};
	return (
		<section className="h-screen grid place-items-center">
			<Form
				className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
				method="POST"
			>
				<h4 className="capitalize text-3xl text-center font-bold">login</h4>
				<FormInput label="email" name="identifier" type="email" />
				<FormInput label="password" name="password" type="password" />
				<div className="mt-4">
					<SubmitBtn text="login" />
				</div>
				<button
					type="button"
					className="mt-4 btn btn-secondary uppercase btn-block"
					onClick={loginAsGuestUser}
				>
					guest user
				</button>
				<p className="text-center">
					Not a member yet?
					<Link
						to="/register"
						className="mx-2 link link-primary link-hover capitalize"
					>
						register
					</Link>
				</p>
			</Form>
		</section>
	);
};
export default Login;
