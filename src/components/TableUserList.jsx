import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';

const TableUserList = ({ number, name, role, status, team, email, hidden, onDelete }) => {
    return (



        <tbody className="divide-y divide-gray-200">
            <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {number}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {email}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {team}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {role}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {status}
                </td>
                <td className={`px-6 py-4 text-sm font-medium text-right whitespace-nowrap ${hidden}`}>
                    <a
                        className="text-[#C12A7C] hover:text-[#C12A7C] flex justify-center"
                        href="#"
                    >
                        <BiEditAlt />
                    </a>
                </td>

                <td className={`px-6 py-4 text-sm font-medium text-right whitespace-nowrap ${hidden}`}>
                    <button
                        onClick={onDelete}
                        className="text-[#053260] hover:text-[#053260] flex justify-center"
                        href="#"
                    >
                        <MdDeleteForever />
                    </button>
                </td>
            </tr>
        </tbody>


    )
}



export default TableUserList