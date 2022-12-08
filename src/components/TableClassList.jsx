import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

const TableClassList = ({ id, classes, onDelete }) => {
  return (

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-[50px]">
          {id}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
          {classes}
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <a
            className="text-[#C12A7C] hover:text-[#C12A7C] flex justify-center"
            href="#"
          >
            <BiEditAlt />
          </a>
        </td>

        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
          <button
            className="text-[#053260] hover:text-[#053260] flex justify-center"
            href="#"
            onClick={onDelete}
          >
            <MdDeleteForever />
          </button>
        </td>
      </tr>
    </tbody>

  );
};

export default TableClassList;
