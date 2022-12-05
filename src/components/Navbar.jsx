import React from "react";

const Navbar = ({ namePages }) => {
  return (
    <div className="w-full overflow-hidden ">
      <div className="flex flex-col p-5">
        <p className="text-3xl font-bold text-dark-alta ">
          Immersive Dashboard
        </p>
        <div className="flex justify-between">
          <p className="text-xl font-bold text-orange-alta">{namePages}</p>
          <p className="text-xl text-dark-alta/50 font-light">
            Hello, <span className="text-dark-alta">John doe</span>
          </p>
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
