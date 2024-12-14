import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import logo from '../assets/logo.png'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
      console.log('User sign out successfully!')
    })
    .catch(err=>{
      const errorMessage = err.message;
      console.log(errorMessage);
    })
  }

  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/my-applications">My Applications</NavLink>
      </li>
      <li>
        <NavLink to="/">item 1</NavLink>
      </li>
      <li>
        <NavLink to="/">item 2</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} className="w-12" alt="" />
          daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user && user.email ? (
          <button onClick={handleSignOut} className="btn">Sign Out</button>
        ) : (
          <>
            <Link to="/signUp">Register</Link>
            <Link to="signIn" className="btn">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
