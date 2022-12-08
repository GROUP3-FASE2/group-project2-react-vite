import React from "react";
import ModalAddClass from "./ModalAddClass";

const GeneralSearch = ({ onSearch, changeSearch }) => {
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
        className="btn bg-orange-alta border-none mt-2 p-2 mx-2 text-white">
        {" "}
        Search
      </button>
      <ModalAddClass />
    </div>
  );
};

export default GeneralSearch;
