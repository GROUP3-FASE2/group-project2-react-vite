import React, { useCallback, useEffect, useState } from "react";
import ButtonNxtPrv from "../components/ButtonNxtPrv";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TableUserList from "../components/TableUserList";
import GeneralSearch from "../components/GeneralSearch";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/features/usersSlice";
import axios from "axios";

const UserList = () => {
  const [listUser, setListUser] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUsers = useSelector((state) => state.users.currentUser);

  const getData = async () => {
    await axios
      .get(`http://34.136.159.229:8000/users`, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      })
      .then((response) => {
        setListUser(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!cookies.userToken) {
      dispatch(clearUser());
      navigate("/");
    }
    getData();
  }, [cookies.userToken]);

  const onLogout = useCallback(() => {
    dispatch(clearUser());
    removeCookie("userToken");
  }, []);

  useEffect(() => {
    if (!cookies.userToken) {
      dispatch(clearUser());
      navigate("/*");
    }
    getData();
  }, [cookies.userToken]);

  return (
    <Container>
      <Sidebar />
      <div className="flex flex-col w-full h-full m-5 ">
        <Navbar
          namePages={"User List"}
          onLogout={onLogout}
          userName={currentUsers.full_name}
        />
        <GeneralSearch />
        <div>
          <TableUserList
            number={listUser.id}
            name={listUser.full_name}
            email={listUser.email}
            team={listUser.team}
            role={listUser.role}
            status={listUser.status}
          />
        </div>
        <ButtonNxtPrv />
      </div>
    </Container>
  );
};

export default UserList;
