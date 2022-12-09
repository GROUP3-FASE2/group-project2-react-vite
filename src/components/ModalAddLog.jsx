import React from "react";

const ModalAddLog = () => {
    return (
        <div className="pt-2 pr-4">
            <label htmlFor="my-modal-3" className="btn bg-dark-alta">
                Add new
            </label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle " />
            <div className="modal ">
                <div className="modal-box relative max-w-none w-[50vw]">
                    <form action="">
                        <label htmlFor="" className="text-xl font-bold">
                            title
                        </label>
                        <div className="flex flex-row pt-2">
                            <input
                                type="text"
                                placeholder="Backend Engineer batch 13"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <label htmlFor="" className="text-xl font-bold">
                            Feedback
                        </label>
                        <div className="flex flex-row pt-2">
                            <input
                                type="text"
                                placeholder="Backend Engineer batch 13"
                                className="input input-bordered max-w-2xl w-full bg-white border border-gray-400"
                            />
                        </div>
                        <div className="flex justify-end pt-5 gap-5">
                            <label htmlFor="my-modal-3" className="btn w-1/6 bg-orange-alta">
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

export default ModalAddLog;
