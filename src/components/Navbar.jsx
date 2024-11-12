import React from "react";
import { NavLink } from "react-router-dom";
// import "../App.css";
import "../index.css";

const Navbar = () => {
  const menu = (
    <>
      <li className="mr-4">
        <NavLink to={"/"}>About</NavLink>
      </li>
      <li className="mr-4">
        <NavLink to={"/skills"}>Skills </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to={"/projects"}>Projects </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to={"/education"}>Education </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to={"/experience"}>Experience </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to={"/contact"}>Contact </NavLink>
        {/* <a href="#contact">Contact</a> */}
      </li>
    </>
  );
  return (
    <div className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 fixed top-0 left-1/2 transform -translate-x-1/2 w-full h-12 mx-auto text-white font-semibold rounded-sm z-50 overflow-hidden">
      <div className="dropdown h-full flex justify-center items-center lg:hidden">
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-40 w-52 p-2 shadow"
        >
          {menu}
        </ul>
      </div>
      <div className="h-full hidden lg:flex justify-center items-center">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
