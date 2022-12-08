import React from "react";
import { useNavigate } from "react-router-dom";

const GeneralSearch = ({ onSearch, changeSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end">
      <input
        onChange={changeSearch}
        className="rounded-lg bg-white mt-2 p-2 border border-gray-400 hover:border-gray-500 focus:outline-none focus:shadow-outline text-dark-alta"
        type="text"
        placeholder="Search"
      />
      <button
        onClick={onSearch}
        className="btn bg-orange-alta border-none mt-2 p-2 mx-2 text-white"
      >
        {" "}
        Search
      </button>
      <div className="pt-2 pr-5">
        <button
          onClick={() => navigate("/addmentee")}
          className="btn bg-dark-alta "
        >
          Add New
        </button>
      </div>
    </div>
  );
};

export default GeneralSearch;
