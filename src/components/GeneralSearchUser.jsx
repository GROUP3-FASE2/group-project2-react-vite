import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import ModalAddUser from "./ModalAddUser";

const GeneralSearchUser = ({ onSearch, changeSearch, addSearch }) => {

  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [team, setTeam] = useState("")
  const [role, setRole] = useState("")
  const [status, setSatus] = useState("")
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);

  const postData = async (e) => {
    e.preventDefault()
    await axios.post(`https://virtserver.swaggerhub.com/YUSNARSETIYADI150403/OPEN-API-DASHBOARD/1.0.0/users`, {
      headers: { Authorization: `Bearer ${cookies.userToken}` },
      full_name: name,
      password: password,
      email: email,
      team: team,
      status: status,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  console.log("tot", name)
  console.log("tut", email)
  console.log("tit", team)
  console.log("tewt", status)


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
