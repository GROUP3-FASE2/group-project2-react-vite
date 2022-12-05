import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className=" drawer drawer-mobile ">
        {/* ============= */}
        {/* SIDEBAR START */}
        {/* ============= */}
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2 " className="drawer-overlay "></label>
          <ul className="flex  menu p-4 w-80 bg-dark-alta text-white ">
            <div className=" mx-auto mb-5 w-44">
              <img src={logo} alt="logo" />
            </div>
            <hr />
            <li className="flex justify-start">
              <a className="">
                <AiFillHome className="text-2xl " />
                Dashboard
              </a>
            </li>
            <li>
              <a>
                <FaUserAlt className="text-2xl" />
                Mentee
              </a>
            </li>
            <hr />
            <li>
              <a>
                <FaUsers className="text-2xl" />
                Users
              </a>
            </li>
            <li>
              <a>
                <BsDoorOpenFill className="text-2xl" />
                Class
              </a>
            </li>
          </ul>
        </div>
        {/* =========== */}
        {/* SIDEBAR END */}
        {/* =========== */}
      </div>
    </div>
  );
};

export default Sidebar;
