import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdminNavbar from "./AdminNavbar";
import Footer from "../Components/Footer";

function Search() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ local search state

  const category = useSelector((state) => state.category.category);
  const reduxSearch = useSelector((state) => state.search.search); // optional

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/foodData");
        const data = await res.json();
        setApiData(data);
      } catch (err) {
        console.error("Failed to fetch food data", err);
      }
    };

    fetchData();
  }, []);

  const filteredData = apiData.filter((food) => {
    const nameMatch = food.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch = category === "All" || category === food.category;
    return nameMatch && categoryMatch;
  });

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AdminNavbar />
        <div className="flex-grow px-4">
          <h2 className="text-2xl font-bold text-center my-6 text-gray-800">
            Search Food Items
          </h2>

          <div className="flex justify-center mb-6">
            <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
              <input
                type="search"
                name="search"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search by Name"
                onChange={(e) => setSearchTerm(e.target.value)} // ✅ search text stored separately
              />
            </div>
          </div>

          {/* Results Table */}
        
          {filteredData && filteredData.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-700">
                <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                  <tr>
                    <th className="px-4 py-3">Id</th>
                    <th className="px-4 py-3">Image</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Rating</th>
                  </tr>
                </thead>
                {filteredData ? (
                  <tbody className="divide-y divide-gray-200">
                    {filteredData.map((pro) => {
                      return (
                        <tr key={pro.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 whitespace-nowrap">
                            {pro.id}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <img
                              src={pro.img}
                              alt="food"
                              className="h-10 w-10 object-cover rounded"
                            />
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {pro.name}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            Rs {pro.price}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {pro.desc.length > 25
                              ? `${pro.desc.slice(0, 25)}...`
                              : pro.desc}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {pro.category}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            {pro.rating}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                ) : (
                  ""
                )}
              </table>
            </div>
          )}

       
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Search;
