import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminNavbar = () => {
    const [val, setVal] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

     const handlelogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
     }
    
    const getdata = async () => {
      const result = await axios.get("http://localhost:3000/foodData");
      setVal(result.data);
    };
    
    useEffect(() => {
      getdata();
    }, []);

  return (
    <>
   
      {/* Navbar */}
      <nav className="bg-white shadow-md  px-3">
        <div className="flex justify-between items-center h-16">
            {/* logout btn */}
          <button
              onClick={handlelogout}
              className="bg-red-600 text-white font-medium px-4  py-2 rounded-md hover:bg-red-700 active:scale-95 transition duration-300 w-full sm:w-auto"
              type="button"
            >
              Logout
            </button>
          <div className="text-xl font-bold text-green-600 hidden sm:block ">FlavoroApp
             
          </div>
       
         

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6">
            {["Home", "Create","Read", "Search"].map((label) => (
              <a
                key={label}
                href={`/${label.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 space-y-2 px-4 pb-4">
            {["Home", "Create","Read" , "Search"].map((label) => (
              <a
                key={label}
                href={`/${label.toLowerCase()}`}
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* </div> */}
    </>
  )
}

export default AdminNavbar
