import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <ul className="flex space-x-6 items-center justify-evenly ">
        <Link className="ml-5" to="/">
          <img src="./logonew.jpg" className="max-w-12 w-18 h-12"></img>
        </Link>
        <li className="rounded-md px-3  py-2 text-lg font-semibold font-medium text-white hover:bg-green-700">
          <Link to="/">Home</Link>
        </li>
        <li className="rounded-md hover:bg-sky-700 px-3 py-2 text-lg font-semibold font-medium text-white hover:bg-green-700">
          <Link to="/about">About</Link>
        </li>
        <li className="rounded-md bg-violet-500  px-3 py-2 text-lg font-semibold font-medium text-white hover:bg-green-700">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="rounded-md  px-3 py-2 text-lg font-medium text-white justify-end">
          <Link to="/login">
            <button className="bg-red-500 px-5 font-semibold py-2">
              Login
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
