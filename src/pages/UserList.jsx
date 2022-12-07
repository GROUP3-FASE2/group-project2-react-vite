import React, { useCallback, useEffect, useState } from "react";
import ButtonNxtPrv from "../components/ButtonNxtPrv";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import TableUserList from "../components/TableUserList";
import GeneralSearch from "../components/GeneralSearch";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/features/usersSlice";
import { MdDeleteForever } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import axios from "axios";
import Swal from "sweetalert2";

const UserList = () => {
  const [listUser, setListUser] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUsers = useSelector((state) => state.users.currentUser);

  const getData = async () => {
    await axios
      .get(`http://34.136.159.229:8000/users`, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      })
      .then((response) => {
        setListUser(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!cookies.userToken) {
      dispatch(clearUser());
      navigate("/badpage");
    }
    getData();
  }, [cookies.userToken]);

  const onLogout = useCallback(() => {
    Swal.fire({
      title: "Are you sure want to logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
      });
        dispatch(clearUser());
        removeCookie("userToken");
        navigate("/");
      }
    });
  }, []);

  return (
    <Container>
      <Sidebar />
      <div className="flex flex-col w-full h-full m-5 ">
        <Navbar
          namePages={"User List"}
          onLogout={onLogout}
          userName={currentUsers.full_name}
        />
        <GeneralSearch />
        <div className="flex flex-col mt-5">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Team
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Edit
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {listUser ? (
                      listUser.map((item) => {
                        return (
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {item.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {item.full_name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {item.email}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              {item.team}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              {item.role}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              {item.status}
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
                              <a
                                className="text-[#053260] hover:text-[#053260] flex justify-center"
                                href="#"
                              >
                                <MdDeleteForever />
                              </a>
                            </td>
                          </tr>
                        )
                      })
                    ) : (
                      <div>

                      </div>
                    )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* {
                    listUser ? (
                        listUser.map((item) => {
                            return (
                                <div className="mt-5">
                                    <TableUserList
                                        number={item.id}
                                        name={item.full_name}
                                        email={item.email}
                                        team={item.team}
                                        role={item.role}
                                        status={item.status}
                                    />
                                </div>
                            )
                        })
                    ) : (
                        <div>

                        </div>
                    )

                } */}
        {/* <div>
          <TableUserList
            number={listUser.id}
            name={listUser.full_name}
            email={listUser.email}
            team={listUser.team}
            role={listUser.role}
            status={listUser.status}
          />
        </div> */}
        <ButtonNxtPrv />
      </div>
    </Container>
  );
};

export default UserList;
