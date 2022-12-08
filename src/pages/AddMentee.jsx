import React, { useCallback, useEffect, useState } from "react";
import ButtonCancel from "../components/ButtonCancel";
import ButtonSave from "../components/ButtonSave";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from '../store/features/usersSlice'
import Swal from "sweetalert2";

const AddMentee = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUsers = useSelector((state) => state.users.currentUser)

  useEffect(() => {
    if (!cookies.userToken) {
      dispatch(clearUser())
      navigate("/badpage")
    }
  }, [cookies.userToken])
  const onLogout = useCallback(
    () => {
      Swal.fire({
        title: "Are you sure want to logout?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes",
        cancelButtonColor: "#d33",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: "Logout successfully",
            showConfirmButton: false,
            timer: 1500,
        });
          dispatch(clearUser());
          removeCookie("userToken");
          navigate("/");
        }
      });
    }, []);

  return (
    <Container>
      <Sidebar />
      <div className="flex flex-col w-full">

        <Navbar namePages={"Add New Mentee"}
          onLogout={onLogout}
          userName={currentUsers.full_name}
        />
        {/* START CONTENT HERE */}
        <form className="text-md form-control mx-10 my-16 border-2 gap-3 text-dark-alta border-dark-alta rounded-md p-10">
          <label className="flex flex-row justify-between items-center">
            <span>Name</span>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Address</span>
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Home Address</span>
            <input
              type="text"
              placeholder="Home Address"
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Email</span>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <label className="flex flex-row  items-center">
            <span>Gender</span>
            <div className="pl-32 items-center flex gap-3">
              <input
                type="radio"
                name="radio-1"
                className="radio border border-gray-400 checked:bg-dark-alta"
              />
              <span>Male</span>
              <input
                type="radio"
                name="radio-1"
                className="radio border border-gray-400 checked:bg-dark-alta"
              />
              <span>Female</span>
            </div>
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Telegram</span>
            <input
              type="text"
              placeholder="Telegram"
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Phone</span>
            <input
              type="text"
              placeholder="081312344321"
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <span className="font-bold text-lg">Emergency Data</span>
          <label className="flex flex-row justify-between items-center">
            <span>Name</span>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Phone</span>
            <input
              type="text"
              placeholder="081312344321"
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Status</span>
            <select className="select select-bordered w-full max-w-2xl bg-white border border-gray-400">
              <option selected>Saudara Kandung</option>
              <option>Orang Tua</option>
              <option>Paman</option>
            </select>
          </label>
          <span className="font-bold text-lg">Education Data</span>
          <label className="flex flex-row  items-center">
            <span>Type</span>
            <div className="pl-32 items-center flex gap-3">
              <input
                type="radio"
                name="radio-2"
                className="radio border border-gray-400"
              />
              <span>IT</span>
              <input
                type="radio"
                name="radio-2"
                className="radio border border-gray-400"
              />
              <span>NON-IT</span>
            </div>
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Major</span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Graduate</span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
            />
          </label>
          <div className="flex justify-end gap-5 py-5">
            <ButtonCancel />
            <ButtonSave />
          </div>
        </form>
        {/* END CONTENT HERE */}
      </div>
    </Container>
  );
};

export default AddMentee;
