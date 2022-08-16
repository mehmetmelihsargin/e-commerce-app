import React from "react";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

const Login = () => {
  return <div className="w-full  h-screen bg-blue-200" >
    <Navbar/>
    <LoginForm/>
  </div>;
};

export default Login;
