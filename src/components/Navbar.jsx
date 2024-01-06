import { FaBarsStaggered } from 'react-icons/fa6';
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';
import {THEMES as themes} from '../constants/Themes'


const Navbar = () => {
	const dispatch = useDispatch();
	const numItemsInCart = useSelector((state)=>state.cartState.numItemsInCart)
	const theme = useSelector(state => state.userState.theme)
	const handleTheme = () => {
		dispatch(toggleTheme())
	};
	return (
		<nav className="bg-base-300">
			<div className=" align-element navbar ">
				<div className="navbar-start">
					{/* TITLE */}
					<NavLink
						to="/"
						className="hidden lg:flex text-3xl text-center btn btn-primary"
					>
						C
					</NavLink>
					{/* DROPDOWN */}
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<FaBarsStaggered className='h-6 w-6'/>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
						>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<NavLinks />
					</ul>
				</div>
				<div className="navbar-end gap-x-4">
					{/* THEME SETUP */}
					<label className="swap swap-rotate">
						{/* this hidden checkbox controls the state */}
						<input
							checked={theme === themes.winter}
							type="checkbox"
							onChange={handleTheme}
						/>

						{/* sun icon */}
						<BsSunFill className="swap-off h-4 w-4" />

						{/* moon icon */}
						<BsMoonFill className="swap-on h-4 w-4" />
					</label>
					{/* CART LINK */}
					<NavLink className="btn btn-ghost btn-circle btn-md">
						<div className="indicator">
							<BsCart3 className="h-6 w-6" />
							<span className="badge badge-sm badge-primary indicator-item">{numItemsInCart || 0}</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
