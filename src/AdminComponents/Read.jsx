import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import AdminNavbar from "./AdminNavbar";
import Footer from "../Components/Footer";

function Read() {
  let [val, setVal] = useState([]);

  let getdata = async () => {
    let result = await axios.get("http://localhost:3000/foodData");
    console.log(result);
    setVal(result.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  let deletedata = (id) => {
    console.log(id);
    axios.delete("http://localhost:3000/foodData/" + id).then((res) => {
      getdata();
    });
  };

  return (
    <>
      {/* Full page wrapper */}
      <div className="flex flex-col min-h-screen ">
        {/* Navbar */}
        <AdminNavbar />

        {/* Page content */}
        <div className="flex-grow px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Read
          </h2>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 text-gray-600 text-xs uppercase">
                <tr>
                  <th className="px-4 py-3 text-left">Image</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Price</th>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Rating</th>

                  <th className="px-4 py-3 text-left">Edit</th>
                  <th className="px-4 py-3 text-left">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {val?.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">

                    <td className="px-4 py-3 whitespace-nowrap">
                    <img src={item.img} alt="food" className="h-10 w-10 object-cover rounded" />
                    </td>
                    {/* <td className="px-4 py-3 whitespace-nowrap">{item.img}</td> */}
                    <td className="px-4 py-3 whitespace-nowrap">{item.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap">Rs {item.price}</td>
                    {/* <td className="px-4 py-3 whitespace-nowrap">{item.desc}</td> */}
                    <td className="px-4 py-3 whitespace-nowrap">
                     {item.desc.length > 60 ? item.desc.slice(0, 60) + "..." : item.desc}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.category}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{item.rating}</td>

                    <td className="px-4 py-3">
                      <Link to={`/update/${item.id}`}>
                        <CiEdit className="inline-block text-xl text-blue-600 hover:text-blue-800" />
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-red-600 hover:text-red-800">
                      <button onClick={() => deletedata(item.id)}>
                        <MdDeleteOutline className="inline-block text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer - always at bottom */}
        <Footer />
      </div>
    </>
  );
}

export default Read;
