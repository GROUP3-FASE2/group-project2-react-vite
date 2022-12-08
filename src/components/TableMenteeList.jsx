import React from "react";
import { MdDeleteForever, MdBook } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

const TableMenteeList = ({
  onClick,
  id,
  name,
  class_name,
  status,
  education,
  gender,
}) => {
  return (
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-black whitespace-nowrap text-center">
          {id}
        </td>
        <td className="px-6 py-4 text-sm text-black whitespace-nowrap text-center">
          {name}
        </td>
        <td className="px-6 py-4 text-sm text-black whitespace-nowrap text-center">
          {class_name}
        </td>
        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
          {status}
        </td>
        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
          {education}
        </td>
        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
          {gender}
        </td>
        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
          <a
            className="text-[#053260] hover:text-[#053260] flex justify-center"
            href="#"
          >
            <MdBook size={20} onClick={onClick} />
          </a>
        </td>
        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
          <a
            className="text-[#C12A7C] hover:text-[#C12A7C] flex justify-center "
            href="#"
          >
            <BiEditAlt size={20} />
          </a>
        </td>

        <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
          <a
            className="text-[#053260] hover:text-[#053260] flex justify-center"
            href="#"
          >
            <MdDeleteForever size={20} />
          </a>
        </td>
      </tr>
    </tbody>
  );
};

export default TableMenteeList;
