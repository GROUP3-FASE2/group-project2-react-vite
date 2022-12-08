import React from "react";

const MenteeFilter = () => {
  return (
    <div className="flex justify-end mr-5 mt-5">
      <button className="btn bg-dark-alta border-none mx-1 text-white">
        Export
      </button>
      <div className="inline-block relative w-44 mx-1 text-dark-alta">
        <select className="block appearance-none w-full h-12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>All Class</option>
          <option>FE 8</option>
          <option>BE 10</option>
          <option>FE 7</option>
          <option>BE 11</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="inline-block relative w-44 mx-1 text-dark-alta">
        <select className="block appearance-none w-full h-12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>All Status</option>
          <option>Placement</option>
          <option>Active</option>
          <option>Eliminate</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="inline-block relative w-44 mx-1 text-dark-alta">
        <select className="block appearance-none w-full h-12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>All Education</option>
          <option>IT</option>
          <option>Non-IT</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <button className="btn bg-dark-alta border-none mx-1 text-white">
        Filter
      </button>
    </div>
  );
};

export default MenteeFilter;
