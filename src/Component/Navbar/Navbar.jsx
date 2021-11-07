import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FirebaseContext } from '../../Context/FirebaseAuth'

const Navbar = () => {
    const [show,setShow] =useState(false)
    const {logOut,user}=useContext(FirebaseContext)
	useEffect(()=>{
		// any device switch  mobile navbar show problem solved
		window.addEventListener('resize',()=>setShow(window.screen.width < 768))
	},[])

    return (
        // <!-- Navbar goes here -->
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<NavLink to='/' className="flex items-center py-4 px-2">
								<img src="img/tour.png" alt="Logo" className="h-8 w-8 mr-2"/>
								<span className="font-semibold text-gray-500 text-lg">Tourist</span>
							</NavLink>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-1">
							<NavLink to='/' className="py-4 px-2 text-green-500  font-semibold ">Home</NavLink>
							<NavLink to='/services' className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</NavLink>
							<NavLink to='/about' className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</NavLink>
							<NavLink to='/contact' className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</NavLink>
							{(user?.email || user?.displayName )&&
							<>
								<NavLink to='/add' className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Add Service</NavLink>
								<NavLink to='/manage-order' className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Manage order</NavLink>
								<NavLink to='/manage-all-order' className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Manage all order</NavLink>
							</>
							}
						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-3 ">
						{ (user?.email || user?.displayName )?
							<>
								<img src={user?.photoURL} className='navbar-circle' alt="" />
								<span>{user?.displayName}</span>
								<button onClick={logOut} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log out</button>
							</>

						:
							<>
							<NavLink to='/login' className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</NavLink>
							<NavLink to='/register' className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</NavLink>
							</>
							}
					</div>
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button className="outline-none "onClick={()=> setShow(!show)}>
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div className={show?'block':"hidden"}>
				<ul className="">
					<li className="active"><NavLink to='/' className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</NavLink></li>
					<li><NavLink to="/services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</NavLink></li>
					<li><NavLink to="/about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</NavLink></li>
					<li><NavLink to="/contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</NavLink></li>
					{ (user?.email || user?.displayName )?
							<>

								<li><NavLink to="/add" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Add New Service</NavLink></li>
								<li><NavLink to="/manage-order" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Manage orders</NavLink></li>
								<li><NavLink to="/manage-all-order" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Manage all order</NavLink></li>
								<div className='flex space-x-3'>
									<img src={user?.photoURL} className='navbar-circle my-3 mx-3' alt="" />
									<span className='my-4'>{user?.displayName}</span>
								</div>
								<button onClick={logOut} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log out</button>
							</>

						:
							<>
							<NavLink to='/login' className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</NavLink>
							<NavLink to='/register' className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</NavLink>
							</>
							}
				</ul>
			</div>
		</nav>
    )
}

export default Navbar
