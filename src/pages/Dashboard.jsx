import React, { useEffect, useState } from "react";
import CardDashboard from "../components/CardDashBoard";
import axios from "axios";
import jwt_decode from "jwt-decode"
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

const Dashboard = () => {

  const [name, setName] = useState('')
  const [token, setToken] = useState('')

  const refreshToken = async () => {
    try {
      const response = await axios.get(`http://35.194.55.171:8000/auth`)
      setToken(response.data.token)
      const decode = jwt_decode(response.data.token)
      setName(decode.name)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    refreshToken()
  }, [])

  const data = [
    { name: "Aprli", Register: 1000, Placement: 2000, Graduates: 1000 },
    { name: "May", Register: 2000, Placement: 1500, Graduates: 2000 },
    { name: "June", Register: 3000, Placement: 1000, Graduates: 3000 },
    { name: "July", Register: 1000, Placement: 400, Graduates: 900 },
  ];

  return (
    <Container>
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
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
                <Line dataKey="Register" fill="#8884d8" background={{ fill: "#eee" }} />
                <Line dataKey="Placement" fill="#8884d8" background={{ fill: "#eee" }} />
                <Line dataKey="Graduates" fill="#8884d8" background={{ fill: "#eee" }} />
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
