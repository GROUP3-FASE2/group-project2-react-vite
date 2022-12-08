import React from "react";

const CardNewLog = ({ title, fullName, date, feedback, Status }) => {
  return (
    <div className="flex flex-row border-2 justify-between border-dark-alta rounded-md p-5">
      <div className="w-1/4">
        <p>{title}</p>
        <p>{fullName}</p>
        <p>{date}</p>
      </div>
      <div className="w-3/4">
        <p>{feedback}</p>
        <p className="text-xl py-5">Changed Status : {Status}</p>
      </div>
    </div>
  );
};

export default CardNewLog;
