import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //to store value in local storage
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log(e.target[0].value);
    localStorage.setItem("user", JSON.stringify(input));
    // console.log(JSON.stringify(input));

    navigate("/login");
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        {/* <div className="bg-gray-700 w-1/4 p-10 rounded-md">
          <div className="text-black text-center">
            <h3 className="pb-4 ">SignUp</h3>
          </div> */}
          <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">
            SignUp
          </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">User Name</label>
              <input
                name="name"
                placeholder="Username"
                value={input.name}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Email address</label>
              <input
                name="email"
                placeholder="UserEmail"
                value={input.email}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                   required
                }}
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Password</label>
              <input
                name="password"
                placeholder="UserPassword"
                value={input.password}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Register
              </button>
            </div>
            <div className="mt-4 text-sm text-center text-gray-600">
              <p>
                Have already an account?
                <span>
                  <Link to="/login">Login here</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      {/* </div> */}
    </>
  );
}

export default SignUp;
