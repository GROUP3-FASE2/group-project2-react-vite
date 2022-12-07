import React, { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GeneralSearch from "../components/GeneralSearch";
import ButtonNxtPrv from "../components/ButtonNxtPrv";
import TableClassList from "../components/TableClassList";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/features/usersSlice";
import axios from "axios";
import Swal from "sweetalert2";

const ClassList = () => {
  const [data, setDatas] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUsers = useSelector((state) => state.users.currentUser);

  const getData = async () => {
    await axios
      .get(`http://34.136.159.229:8000/classes`, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      })
      .then((response) => {
        console.log(response.data.data);
        setDatas(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!cookies.userToken) {
      dispatch(clearUser());
      navigate("/*");
    }
    getData();
  }, [cookies.userToken]);

  const onLogout = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearUser());
        removeCookie("userToken");
      }
    });
  }, []);
  
  return (
    <Container>
      <Sidebar />
      <div className="flex flex-col w-full h-full m-5">
        <Navbar
          onLogout={onLogout}
          namePages={"Class List"}
          userName={currentUsers.full_name}
        />
        <GeneralSearch />
        <div className="mt-5">
          <TableClassList id={data[0]?.id} classes={data[0]?.name} />
        </div>
        <ButtonNxtPrv />
      </div>
    </Container>
  );
};

export default ClassList;
