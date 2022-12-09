import React from "react";

const ModalEditUser = ({
    addPassword,
    addName,
    addEmail,
    addTeam,
    addStatus,
    submit }) => {
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
                            New User
                        </label>
                        <div className="flex flex-col text-lg pt-2">
                            <label htmlFor="" className="pb-1">
                                Name
                            </label>
                            <input
                                onChange={addName}
                                type="text"
                                placeholder="Rachman Kamil"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col text-lg pt-2">
                            <label htmlFor="" className="pb-1">
                                Password
                            </label>
                            <input
                                onChange={addPassword}
                                type="text"
                                placeholder="Rachman Kamil"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col text-lg pt-2">
                            <label htmlFor="" className="pb-1">
                                Email
                            </label>
                            <input
                                onChange={addEmail}
                                type="text"
                                placeholder="user@gmail.com"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex flex-col w-full pt-2">
                            <label htmlFor="" className="mb-1">
                                Team
                            </label>
                            <select
                                onChange={addTeam}
                                className="select select-bordered ">
                                <option selected>Academic</option>
                                <option>Super Admin</option>
                            </select>

                            <div className="flex flex-row gap-4 pt-2 ">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="" className="mb-1">
                                        Role
                                    </label>
                                    <select
                                        className="select select-bordered ">
                                        <option selected>User</option>
                                        <option>Super Admin</option>
                                    </select>
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="" className="mb-1">
                                        Status
                                    </label>
                                    <select
                                        onChange={addStatus}
                                        className="select select-bordered ">
                                        <option selected>Active</option>
                                        <option>Non-Active</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-5 gap-5">
                            <label htmlFor="my-modal-4" className="btn w-1/6 bg-orange-alta">
                                CANCEL
                            </label>
                            <label
                                onClick={submit}
                                htmlFor="" className="btn w-1/6 bg-dark-alta">
                                SAVE
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalEditUser;
