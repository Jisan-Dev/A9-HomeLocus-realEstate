import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container mx-auto font-inter">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-neutral-600 font-bold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-black">HomeLocus</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-neutral-600 font-bold gap-1">
            <li className="hover:text-neutral-900">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-neutral-900">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-neutral lg:px-6 font-bold lg:text-base">Sign In</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
