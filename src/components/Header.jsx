import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {logoutUser} from '../features/user/userSlice'
import {clearCart} from '../features/cart/cartSlice'
import { useQueryClient } from '@tanstack/react-query';
const Header = () => {
	const user = useSelector(state => state.userState.user)
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const queryClient = useQueryClient()
	const handleLogout = () => {
		navigate('/')
		dispatch(clearCart())
		dispatch(logoutUser())
		queryClient.removeQueries()
	}
	return (
		<section className="py-2 bg-neutral text-neutral-content">
			<div className="align-element flex justify-center sm:justify-end">
				{user ?
				// {/* USER */}
				<div className='gap-x-2 sm:gap-x-8 flex items-center'>
					<span className="text-xs sm:text-sm">Hello, {user.username}</span>  
					<button className='btn btn-outline btn-primary btn-xs uppercase' onClick={handleLogout} >logout</button>
				</div>	
				:
				// {/* LINKS */}
				<div className="gap-x-2 sm:gap-x-6 flex items-center">
					<Link to="/login" className="text-xs sm:text-sm link link-hover">
						Sign in / Guest
					</Link>
					<Link to="/register" className="text-xs sm:text-sm link link-hover">
						Create Account
					</Link>
				</div>
				}
			</div>
		</section>
	);
};
export default Header;
