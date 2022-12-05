import React from "react";
import ButtonNewLog from "../components/ButtonNewLog";
import CardNewLog from "../components/CardNewLog";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AddMentee = () => {
  return (
    <Container>
      <Sidebar />
      <div className="flex flex-col w-full h-full m-5 ">
        <Navbar namePages={"Mentee Log"} />
        <div className="flex p-5 justify-between">
          <div>
            <p className="text-2xl">Rachman Kamil</p>
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

export default AddMentee;
