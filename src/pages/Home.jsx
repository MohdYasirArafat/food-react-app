import Navbar from "../Components/Navbar";
import CategoryMenu from "../Components/CategoryMenu";
import FoodItems from "../Components/FoodItems";
import Cart from "../Components/Cart";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handlelogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
    
    let getdata = async () => {
      let result = await axios.get("http://localhost:3000/foodData");
      console.log(result);
      setVal(result.data);
    };

    useEffect(() => {
      getdata();
    }, []);


  };

  return (
    <>
      <div className="min-h-screen px-4 py-3 bg-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0">
          {/* App Name */}
          <h2 className="text-xl font-bold text-green-600">FlavoroApp</h2>

          {/* Welcome Text */}
          <p className="text-lg font-semibold text-green-600">
            Welcome - {userName.name}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <button className="bg-red-600 text-white font-medium px-5 py-2.5 rounded-md hover:bg-red-700 active:scale-95 transition duration-300 w-full sm:w-auto">
              <Link className="nav-link" to="/dashboard">
                Admin
              </Link>
            </button>

            <button
              onClick={handlelogout}
              className="bg-red-600 text-white font-medium px-5 py-2.5 rounded-md hover:bg-red-700 active:scale-95 transition duration-300 w-full sm:w-auto"
              type="button"
            >
              Logout
            </button>
          </div>
        </div>

        <hr className="mt-4" />
        
        <Navbar />
        <CategoryMenu />
        <FoodItems />
        <Cart />
      </div>

      <Footer />
    </>
  );
};

export default Home;
