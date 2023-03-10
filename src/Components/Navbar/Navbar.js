import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Auth/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(authContext)

    const HandleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user?.email ?
                                <><li><Link to='/'>Home</Link></li>
                                    <li><Link to='/blog'>Blogs</Link></li>

                                    <li><Link to='/dashboard'>Dashboard</Link></li>

                                    <div className='mr-4 block'>
                                        <img className="rounded-full mr-4" src={user?.photoURL} alt="" />
                                        <p className='font-bold'>{user?.displayName}</p>
                                    </div>
                                </> :
                                <><li><Link to='/'>Home</Link></li>
                                    <li><Link to='blog'>Blogs</Link></li></>
                        }

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl italic">Mobile Bazar</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        user?.email ?
                            <><li><Link to='/'>Home</Link></li>
                                <li><Link to='blog'>Blogs</Link></li>

                                <li><Link to='/dashboard'>Dashboard</Link></li>
                            </> :
                            <><li><Link to='/'>Home</Link></li>
                                <li><Link to='blog'>Blogs</Link></li></>
                    }
                </ul>
            </div>
            <div className="navbar-end mr-10">
                <div className='mr-4 block invisible lg:visible'>
                    <img className="w-20 rounded-full mr-4" src={user?.photoURL} alt="" />
                    <p className='font-bold'>{user?.displayName}</p>
                </div>
                {
                    user?.email ?
                        <button onClick={HandleLogOut}>Logout</button> :
                        <div className='block lg:flex'>
                            <Link to='/login' className="btn mr-3">Login</Link>
                        </div>
                }
                <div>
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Header;