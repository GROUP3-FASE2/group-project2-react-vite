import React, { useCallback, useEffect, useState } from "react";
import ButtonNewLog from "../components/ButtonNewLog";
import CardNewLog from "../components/CardNewLog";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useDispatch } from "react-redux";
import { clearUser } from '../store/features/usersSlice'

const MenteeLog = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!cookies.userToken) {
      dispatch(clearUser())
      navigate("/*")
    }
  }, [cookies.userToken])

  const onLogout = useCallback(
    () => {
      dispatch(clearUser())
      removeCookie("userToken")
      navigate("/")
    },
    [],
  )

  return (
    <Container>
      <Sidebar />
      <div className="flex flex-col w-full h-full m-5 ">
        <Navbar 
        onLogout={onLogout}
        namePages={"Mentee Log"} />
        <div className="flex p-5 justify-between">
          <div>
            <p className="text-2xl">
              Rachman Kamil{" "}
              <span className="text-slate-400 text-lg">(-Kamil-)</span>
            </p>
            <p className="text-lg">Frontend Developer</p>
            <p className="text-xl">IPA</p>
            <p className="text-xl">SMA Negeri 4 Surabaya</p>
          </div>
          <div className="p-3">
            <p>
              Phone: <span>081312344321</span>
            </p>
            <p>
              Telegram: <span>@rachmankamil</span>
            </p>
            <p>
              Discord: <span>@rachmankamil#2473</span>
            </p>
            <p>
              Email <span>rachmankamil31@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="pt-12 text-right">
        <div className="bg-orange-alta w-30 border-none text-white btn mr-2" onClick={() => navigate('/menteelist')}>Back</div>
          <ButtonNewLog />
        </div>
        <div className="flex flex-col gap-5 pt-5">
          <CardNewLog />
          <CardNewLog />
          <CardNewLog />
        </div>
      </div>
    </Container>
  );
};

export default MenteeLog;
