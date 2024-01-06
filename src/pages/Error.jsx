import { useRouteError } from 'react-router';
import { Link } from 'react-router-dom';

const Error = () => {
	const error = useRouteError();
	console.log(error);
	if (error.status === 404) {
		return (
			<main className="text-center grid place-content-center min-h-[100vh] px-8">
				<h1 className="text-9xl font-semibold text-primary">404</h1>
				<h1 className="mt-4 capitalize text-3xl font-bold tracking-tight sm:text-5xl">
					page not found
				</h1>
				<p className="mt-6 text-lg leading-7">
					Sorry we couldn't find the page you are looking for
				</p>
				<div className="mt-10">
					<Link to="/" className="btn btn-secondary capitalize">
						go back Home
					</Link>
				</div>
			</main>
		);
	}
	return <h2 className="font-bold text-4xl">There was an error...</h2>;
};
export default Error;
