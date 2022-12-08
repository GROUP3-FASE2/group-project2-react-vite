import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const GeneralSearch = () => {
  const currentUsers = useSelector((state) => state.users.currentUser);
  const [cookies] = useCookies(["userToken"]);
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const dataAdd = {
    class_name: input,
    user_id: currentUsers.id,
  };

  const addClass = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://34.136.159.229:8000/classes`, dataAdd, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      })
      .then((res) => {
        console.log(res.data);
        navigate(0)
      })
      .catch((err) => {
      });
  };
  return (
    <div className="flex justify-end">
      <input
        className="rounded-lg bg-white mt-2 p-2 border border-gray-400 hover:border-gray-500 focus:outline-none focus:shadow-outline text-dark-alta"
        type="text"
        placeholder="Search"
      />
      <button className="btn bg-orange-alta border-none mt-2 p-2 mx-2 text-white">
        {" "}
        Search
      </button>
      <div className="pt-2 pr-4">
        <label htmlFor="my-modal-3" className="btn bg-dark-alta">
          Add new
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle " />
        <div className="modal ">
          <div className="modal-box relative max-w-none w-[50vw]">
            <form onSubmit={addClass}>
              <label htmlFor="" className="text-xl font-bold">
                Class Name
              </label>
              <div className="flex flex-row pt-2">
                <input
                  value={input}
                  type="text"
                  placeholder="Backend Engineer batch 13"
                  className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>

              <div className="flex justify-end pt-5 gap-5">
                <label
                  htmlFor="my-modal-3"
                  className="btn w-1/6 bg-orange-alta"
                >
                  CANCEL
                </label>
                <button
                  type="submit"
                  className="btn w-1/6 bg-dark-alta"
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSearch;
