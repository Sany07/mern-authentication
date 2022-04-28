import axios from 'axios';
import React, { useState } from "react";

const Login = () => {  
  const [email, setEmail] = useState()
  const [password, setPassword1] = useState()
  
  const handleSubmit = (e)=>{
    e.preventDefault()

    axios.post('http://localhost:5000/api/auth/login', {
      email: email,
      password: password
    })
    .then(response => {
      console.log('response',response.data);
    })
    .catch(error => {
      console.log(error.response.data)
  });

  }
  return      ( 
  <div className="h-screen flex">
  <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
    <div>
      <h1 className="text-white font-bold text-4xl font-sans">
        GoFinance
      </h1>
      <p className="text-white mt-1">
        The most popular peer to peer lending at SEA
      </p>
      <button
        type="submit"
        className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
      >
        Read More
      </button>
    </div>
  </div>
  <div className="flex w-1/2 justify-center items-center bg-white">
    <form className="bg-white" onSubmit={handleSubmit}>
      <h1 className="text-gray-800 font-bold text-2xl mb-1">
        Hello Again!
      </h1>
      <p className="text-sm font-normal text-gray-600 mb-7">
        Welcome Back
      </p>
       <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
        <input
          onChange={(e)=>setEmail(e.target.value)}
          className="pl-2 outline-none border-none"
          type="text"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <input
          onChange={(e)=>setPassword1(e.target.value)}
          className="pl-2 outline-none border-none"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
      >
        Login
      </button>
      <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
        Forgot Password ?
      </span>
    </form>
  </div>
  </div>
)
};

export default Login;
