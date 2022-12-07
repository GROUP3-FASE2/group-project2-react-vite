import React from "react";

const ModalAddUser = () => {
  return (
    <div className="pt-2 pr-4">
      <label htmlFor="my-modal-4" className="btn bg-dark-alta">
        Add new
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle " />
      <div className="modal ">
        <div className="modal-box relative max-w-none w-[50vw]">
          <form action="">
            <label htmlFor="" className="text-xl font-bold">
              New Mentee
            </label>
            <div className="flex flex-col text-lg pt-2">
              <label htmlFor="" className="pb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Rachman Kamil"
                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
              />
            </div>
            <div className="flex pt-3 gap-5">
              <div className="flex flex-col w-[50%] ">
                <label htmlFor="" className="mb-1">
                  Status
                </label>
                <select className="select select-bordered ">
                  <option selected>Active</option>
                  <option>Non-Active</option>
                </select>
              </div>
              <div className="flex flex-col w-[50%]">
                <label htmlFor="" className="mb-1">
                  Class
                </label>
                <select className="select select-bordered ">
                  <option selected>Frontend Batch 10</option>
                  <option>Backend batch 13</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full pt-2">
              <label htmlFor="" className="mb-1">
                Category
              </label>
              <select className="select select-bordered ">
                <option selected>Information</option>
                <option>Non-Information</option>
              </select>
            </div>
            <div className="flex flex-col w-full pt-2">
              <label htmlFor="" className="mb-1">
                Gender
              </label>
              <select className="select select-bordered ">
                <option selected>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="flex justify-end pt-5 gap-5">
              <label htmlFor="my-modal-4" className="btn w-1/6 bg-orange-alta">
                CANCEL
              </label>
              <label htmlFor="" className="btn w-1/6 bg-dark-alta">
                SAVE
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAddUser;
