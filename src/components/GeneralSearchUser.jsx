import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ModalAddUser from "./ModalAddUser";

const GeneralSearchUser = ({ onSearch, changeSearch, addSearch }) => {

  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [team, setTeam] = useState("")
  const [role, setRole] = useState("")
  const [status, setSatus] = useState("")
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate()


  const dataAdd = {
    full_name: name,
    password: password,
    email: email,
    team: team,
    status: status,
  };

  const postData = async (e) => {
    e.preventDefault()
    await axios
      .post(`http://34.136.159.229:8000/users`, dataAdd, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      })
      .then((response) => {
        console.log(response)
        navigate(0)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // const postData = async (e) => {
  //   e.preventDefault()
  //   await axios
  //     .post(`http://34.136.159.229:8000/users`, dataAdd, {
  //       headers: { Authorization: `Bearer ${cookies.userToken}` },
  //     })
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  return (
    <div className="flex justify-end">
      <input
        className="rounded-lg bg-white mt-2 p-2 border border-gray-400 hover:border-gray-500 focus:outline-none focus:shadow-outline text-dark-alta"
        type="text"
        placeholder="Search"
        onChange={changeSearch}
      />
      <button
        onClick={onSearch}
        className="btn bg-orange-alta border-none mt-2 p-2 mx-2 text-white">
        {" "}
        Search
      </button>
      <ModalAddUser
        addPassword={(e) => setPassword(e.target.value)}
        addName={(e) => setName(e.target.value)}
        addEmail={(e) => setEmail(e.target.value)}
        addTeam={(e) => setTeam(e.target.value)}
        addStatus={(e) => setSatus(e.target.value)}
        submit={postData}
      />
    </div>
  );
};

export default GeneralSearchUser;
