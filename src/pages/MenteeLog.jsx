import React, { useCallback, useEffect, useState } from "react";
import ButtonNewLog from "../components/ButtonNewLog";
import CardNewLog from "../components/CardNewLog";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/features/usersSlice";
import axios from "axios";
import Swal from "sweetalert2";

const MenteeLog = () => {
  const [logs, setLogs] = useState([]);
  const [detail, setDetail] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUsers = useSelector((state) => state.users.currentUser);
  const location = useLocation();
  const id = location?.state?.id;
  console.log(id);
  console.log(detail);
  const urlGetDetail = `http://34.136.159.229:8000/mentees/${id}`;

  const getDetail = async () => {
    await axios
      .get(urlGetDetail, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      })
      .then((response) => {
        setDetail(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = async () => {
    await axios
      .get(`http://34.136.159.229:8000/logs`, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      })
      .then((response) => {
        setLogs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!cookies.userToken) {
      dispatch(clearUser());
      navigate("/badpage");
    }
    getDetail();
    getData();
  }, [cookies.userToken]);

  const onLogout = useCallback(() => {
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
      <div className="flex flex-col w-full h-full m-5 ">
        <Navbar
          onLogout={onLogout}
          namePages={"Mentee Log"}
          userName={currentUsers.full_name}
        />
        <div className="flex p-5 justify-between">
          <div>
            <p className="text-2xl">
              {detail.name}
              <span className="text-slate-400 text-lg pl-5">
                (-{detail.nickname}-)
              </span>
            </p>
            <p className="text-lg">{detail.education_type}</p>
            <p className="text-xl">{detail.education_major}</p>
            <p className="text-xl">SMA Negeri 4 Surabaya</p>
          </div>
          <div className="p-3">
            <p>
              Phone: <span>{detail.phone}</span>
            </p>
            <p>
              Telegram: <span>@{detail.telegram}</span>
            </p>
            <p>
              Discord: <span>@{detail.discord}</span>
            </p>
            <p>
              Email <span>{detail.email}</span>
            </p>
          </div>
        </div>
        <div className="pt-12 text-right">
          <div
            className="bg-orange-alta w-30 border-none text-white btn mr-2"
            onClick={() => navigate("/menteelist")}
          >
            Back
          </div>
          <ButtonNewLog />
        </div>
        <div className="flex flex-col gap-5 pt-5">
          {logs?.map((item) => {
            return (
              <CardNewLog
                key={item.id}
                title={item.title}
                fullName={item.fullname_user}
                date={item.created_date}
                feedback={item.feedback}
                Status={item.status}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default MenteeLog;
