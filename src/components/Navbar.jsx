import React from "react";


const Navbar = ({ namePages, onLogout }) => {

  return (
    <div className="w-full overflow-hidden ">
      <div className="flex flex-col p-5">
        <p className="text-3xl font-bold text-dark-alta pb-3">
          Immersive Dashboard
        </p>
        <div className="flex justify-between">
          <p className="text-xl font-bold text-orange-alta ">{namePages}</p>
          <div className="flex space-x-4 items-center">
            <p className="text-xl text-dark-alta/50 ">
              Hello, <span className="text-dark-alta font-bold">John doe</span>
            </p>
            <button className="btn" onClick={onLogout}>Log out</button>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <hr className="border-dark-alta border" />
        <hr className="border-dark-alta border my-3" />
      </div>
    </div>
  );
};

export default Navbar;
