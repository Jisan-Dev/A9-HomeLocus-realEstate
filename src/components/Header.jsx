import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultPlaceholder from '../assets/Default_Placeholder.webp';

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const { user, logoutUser, setIsUserUpdated, isUserUpdated, loading } = useContext(AuthContext);

  const userLogout = async () => {
    await logoutUser()
      .then(() => {
        toast.success('successfully logged out', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setIsUserUpdated(!isUserUpdated);
      })
      .catch((error) => console.log(error));
  };

  return (
    <header className="container mx-auto font-source">
      <div className="navbar bg-base-100">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" onClick={() => setClicked(!clicked)} className="btn btn-ghost lg:hidden p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {clicked && (
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52 text-neutral-600 font-bold">
                <li className="hover:text-neutral-900">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="hover:text-neutral-900">
                  <NavLink to="/update-profile">Update Profile</NavLink>
                </li>
                <li className="hover:text-neutral-900">
                  <NavLink to="/wishlist">Wishlist</NavLink>
                </li>
                {user && (
                  <li className="hover:text-neutral-900">
                    <NavLink to="/user-profile">User Profile</NavLink>
                  </li>
                )}
              </ul>
            )}
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost text-2xl sm:text-3xl text-transparent bg-gradient-to-br from-slate-950 via-slate-600 to-slate-950 bg-clip-text font-black font-kufam tracking-tight max-sm:mt-1 max-sm:-ml-3">
            HOMELOCUS
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-neutral-600 text-base font-bold gap-2 font-kufam">
            <li className="hover:text-neutral-900">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-neutral-900">
              <NavLink to="/update-profile">Update Profile</NavLink>
            </li>
            <li className="hover:text-neutral-900">
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
            {user && (
              <li className="hover:text-neutral-900">
                <NavLink to="/user-profile">User Profile</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {loading && <span className="loading loading-infinity loading-lg mr-4"></span>}
          {user ? (
            <>
              <div className="tooltip tooltip-left cursor-pointer -mb-1" data-tip={user.displayName}>
                <div className="avatar">
                  <div className="w-12 rounded-full mr-2">
                    <img src={user.photoURL || defaultPlaceholder} referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              <button onClick={userLogout} className="btn btn-neutral lg:px-6 font-bold lg:text-lg">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-neutral lg:px-6 font-bold lg:text-lg">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
