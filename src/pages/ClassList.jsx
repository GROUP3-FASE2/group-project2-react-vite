import React, { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import GeneralSearchClass from "../components/GeneralSearchClass";
import ButtonNxtPrv from "../components/ButtonNxtPrv";
import TableClassList from "../components/TableClassList";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/features/usersSlice";
import axios from "axios";
import Swal from "sweetalert2";

const ClassList = () => {
  const [data, setDatas] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUsers = useSelector((state) => state.users.currentUser);

  const onDelete = async (id) => {
    await axios.delete(`https://virtserver.swaggerhub.com/YUSNARSETIYADI150403/OPEN-API-DASHBOARD/1.0.0/classes/${id}`, {
      headers: { Authorization: `Bearer ${cookies.userToken}` },
      method: `DELETE`,
      data: { id: data.id }
    })
      .then((response) => {
        console.log(response)
        getData()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getData = async () => {
    await axios
      .get(`https://virtserver.swaggerhub.com/YUSNARSETIYADI150403/OPEN-API-DASHBOARD/1.0.0/classes`, {
        headers: { Authorization: `Bearer ${cookies.userToken}` },
      })
      .then((response) => {
        console.log(response.data.data);
        setDatas(response.data.data);
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
      <div className="flex flex-col w-full h-full m-5">
        <Navbar
          onLogout={onLogout}
          namePages={"Class List"}
          userName={currentUsers.full_name}
        />
        <GeneralSearchClass />
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
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-[50px]"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-3/4"
                        >
                          Class Name
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

                    {data ? (data.map((item) => {
                      return (
                        <TableClassList
                          id={item.id}
                          classes={item.name}
                          onDelete={() => onDelete(item.id)}
                        />
                      )
                    })) : <></>}
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

export default ClassList;
