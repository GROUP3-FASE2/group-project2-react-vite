import React, { useCallback, useEffect, useState } from "react";
import CardDashboard from "../components/CardDashBoard";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  Tooltip,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Line,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/features/usersSlice";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUsers = useSelector((state) => state.users.currentUser)
  console.log("currentUsers :", currentUsers)

  useEffect(() => {
    if (!cookies.userToken) {
      dispatch(clearUser());
      navigate("/");
    }
  }, [cookies.userToken]);

  const onLogout = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearUser());
        removeCookie("userToken");
      }
    });
  }, []);

  const data = [
    { name: "Aprli", Register: 1000, Placement: 2000, Graduates: 1000 },
    { name: "May", Register: 2000, Placement: 1500, Graduates: 2000 },
    { name: "June", Register: 3000, Placement: 1000, Graduates: 3000 },
    { name: "July", Register: 1000, Placement: 400, Graduates: 900 },
  ];

  return (
    <Container>
      <Sidebar />
      <div className="flex flex-col w-full m-5">
        <Navbar
          userName={currentUsers.full_name}
          onLogout={onLogout} namePages={"Dashboard"} />
        {/* START CONTENT HERE */}

        <div>
          <h1>{name}</h1>
          <CardDashboard />
          <div className="flex justify-center">
            <div className="text-center">
              <LineChart
                width={500}
                height={200}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 80,
                  bottom: 3,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="5 5" />
                <Line
                  dataKey="Register"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
                <Line
                  dataKey="Placement"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
                <Line
                  dataKey="Graduates"
                  fill="#8884d8"
                  background={{ fill: "#eee" }}
                />
              </LineChart>
            </div>
          </div>
        </div>

        {/* END CONTENT HERE */}
      </div>
    </Container>
  );
};

export default Dashboard;