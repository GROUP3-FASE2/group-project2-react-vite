import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import logo from "../assets/logo.png";
import login from "../assets/bg-logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/features/usersSlice";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["userToken"]);

  const authLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://34.136.159.229:8000/auth`, {
        email: email,
        password: password,
      })
      .then((response) => {
        const { data } = response.data;
        if (data) {
          Swal.fire({
            position: "center",
            icon: "success",
            text: "Signed successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setCookie("userToken", data.token, { path: "/" });
          dispatch(updateUser(data));
          navigate("/dashboard");
        }
      })

      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email or Password incorrect",
          showConfirmButton: true,
        });
        console.log("err msg :", error);
        // setMsg(error);
      });
  };

  useEffect(() => {
    if (cookies.userToken) {
      navigate("/dashboard");
    }
    return () => {};
  }, [cookies.userToken]);

  return (
    <Container>
      <div className="relative flex flex-col w-full h-screen bg-dark-alta">
        <div className="m-5 w-full">
          <img src={logo} alt="" className="w-32 mx-5" />
        </div>
        <div className="w-3/4 mx-10 z-10">
          <h1 className="mt-5 text-6xl font-bold text-white">Welcome...</h1>
          <p className="my-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            consectetur impedit odio architecto, laboriosam nemo quo deleniti
            maxime iste dicta?
          </p>
        </div>
        <div className="w-full h-full absolute pt-44 ml-24">
          <img src={login} alt="" className="block m-auto" />
        </div>
      </div>
      <div className="flex flex-col w-full h-screen bg-dark-alta">
        <div className="flex h-screen justify-center items-center">
          <div className="flex flex-col justify-center w-[400px]">
            <form
              className="w-full mx-auto rounded-lg bg-white p-8 px-8 h-[500px]"
              onSubmit={authLogin}
            >
              <h2 className="text-4xl text-dark-alta font-bold">Login</h2>
              {/* <p className='text-center'>{msg}</p> */}
              <p className="text-sm text-dark-alta font-semibold mt-5 mb-10">
                Sign in with your with your account
              </p>
              <p className="text-center text-red-500">{msg}</p>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-dark-alta">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg bg-white mt-2 p-2 border-2 border-dark-alta focus:outline-none text-dark-alta"
                  type="email"
                  placeholder="yourname@email.com"
                />
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label className="font-semibold text-dark-alta">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="p-2 rounded-lg bg-white mt-2 border-2 border-dark-alta focus:outline-none text-dark-alta"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between text-gray-400 py-2">
                <p className="flex items-center text-dark-alta">
                  <input className="mr-2 text-dark-alta" type="checkbox" />
                  Remember Me
                </p>
                <a href="">
                  <p className="text-dark-alta">Forgot Password</p>
                </a>
              </div>
              <button
                type="submit"
                className="w-[90%] flex m-auto mt-10 py-2 bg-orange-alta shadow-lg text-white font-semibold rounded-lg btn hover:bg-orange-600"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
