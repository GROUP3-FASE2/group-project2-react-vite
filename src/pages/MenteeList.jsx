import React, { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GeneralSearchMentee from "../components/GeneralSearchMentee";
import ButtonNxtPrv from "../components/ButtonNxtPrv";
import TableMenteeList from "../components/TableMenteeList";
import MenteeFilter from "../components/MenteeFilter";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/features/usersSlice";
import Swal from "sweetalert2";
import axios from "axios";

const MenteeList = () => {
  const [listMentees, setListMentees] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUsers = useSelector((state) => state.users.currentUser);
  const [search, setSearch] = useState("");
  console.log(listMentees);

  const getData = async () => {
    await axios
      .get(`http://34.136.159.229:8000/mentees`, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      })
      .then((response) => {
        setListMentees(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDetail = (id) => {
    navigate("/menteelog", {
      state: {
        id: id,
      },
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
      <div className="flex flex-col w-full h-full m-5">
        <Navbar
          onLogout={onLogout}
          namePages={"Mentee List"}
          userName={currentUsers.full_name}
        />
        <GeneralSearchMentee
          changeSearch={(e) => setSearch(e.target.value)}
          onSearch={() => getSearch()}
          onclick={() => navigate("/addmentee")}
        />
        <MenteeFilter />
        <div className="mt-5">
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
                    {listMentees?.map((item) => {
                      return (
                        <TableMenteeList
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          class_name={item.class_name}
                          status={item.status}
                          education={item.education_type}
                          gender={item.gender}
                          onClick={() => getDetail(item.id)}
                        />
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonNxtPrv />
      </div>
    </Container>
  );
};

export default MenteeList;
