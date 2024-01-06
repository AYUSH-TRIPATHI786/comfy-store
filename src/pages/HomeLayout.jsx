import { Outlet } from 'react-router';
import { useNavigation } from 'react-router-dom';
import { Header, Loading, Navbar } from '../components';
import { useState } from 'react';

const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === 'loading';
	return (
		<>
			<Header />
			<Navbar />
			{isPageLoading ? (
				<Loading />
			) : (
				<section className="align-element py-20">
					<Outlet />
				</section>
			)}
		</>
	);
};
export default HomeLayout;
