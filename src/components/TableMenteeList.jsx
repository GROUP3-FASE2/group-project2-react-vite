import React from 'react'
import { MdDeleteForever, MdBook } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'

const TableMenteeList = ({onClick}) => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Class
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Education
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Gender
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Detail
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-black whitespace-nowrap text-center">
                                        1
                                    </td>
                                    <td className="px-6 py-4 text-sm text-black whitespace-nowrap text-center">
                                        Jone Doe
                                    </td>
                                    <td className="px-6 py-4 text-sm text-black whitespace-nowrap text-center">
                                        BE 7
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                                        Active
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                                        IT
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                                        Male
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                                        <a
                                            className="text-[#053260] hover:text-[#053260] flex justify-center"
                                            href="#"
                                        >
                                            <MdBook size={20} onClick={onClick}/>
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-center">
                                        <a
                                            className="text-[#C12A7C] hover:text-[#C12A7C] flex justify-center "
                                            href="#"
                                        >
                                            <BiEditAlt size={20}/>
                                        </a>
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-center">
                                        <a
                                            className="text-[#053260] hover:text-[#053260] flex justify-center"
                                            href="#"
                                        >
                                            <MdDeleteForever size={20}/>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                                        1
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                                        Jone Doe
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                                        BE 7
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap text-center">
                                        Active
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap text-center">
                                        IT
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap text-center">
                                        Male
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap text-center">
                                        <a
                                            className="text-[#053260] hover:text-[#053260] flex justify-center"
                                            href="#"
                                        >
                                            <MdBook size={20}/>
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-center">
                                        <a
                                            className="text-[#C12A7C] hover:text-[#C12A7C] flex justify-center "
                                            href="#"
                                        >
                                            <BiEditAlt size={20}/>
                                        </a>
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-center">
                                        <a
                                            className="text-[#053260] hover:text-[#053260] flex justify-center"
                                            href="#"
                                        >
                                            <MdDeleteForever size={20}/>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableMenteeList