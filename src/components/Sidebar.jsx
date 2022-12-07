import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-dark-alta ">
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
          <ul className="flex menu p-4 w-64 text-white  ">
            <div className=" mx-auto mb-5 w-44">
              <img src={logo} alt="logo" />
            </div>
            <hr />
            <Link to={"/dashboard"}>
              <li className="flex justify-start">
                <p className="">
                  <AiFillHome className="text-2xl " />
                  Dashboard
                </p>
              </li>
            </Link>
            <Link to={"/menteelist"}>
              <li>
                <p>
                  <FaUserAlt className="text-2xl" />
                  Mentee
                </p>
              </li>
            </Link>
            <hr />
            <Link to={"/userlist"}>
              <li>
                <p>
                  <FaUsers className="text-2xl" />
                  Users
                </p>
              </li>
            </Link>
            <Link to={"/classlist"}>
              <li>
                <p>
                  <BsDoorOpenFill className="text-2xl" />
                  Class
                </p>
              </li>
            </Link>
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
