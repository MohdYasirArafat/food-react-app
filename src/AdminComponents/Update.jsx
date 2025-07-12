import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "../Components/Footer";

function Update() {
  let { id } = useParams();
  // console.log(id);
  let navigate = useNavigate();

  let [img, setImg] = useState();
  let [name, setName] = useState();
  let [price, setPrice] = useState();
  let [desc, setDesc] = useState();
  let [category, setCategory] = useState();
  let [rating, setRating] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/foodData/" + id).then((res) => {
      //  console.log(res.data);
      setImg(res.data.img);
      setName(res.data.name);
      setPrice(res.data.price);
      setDesc(res.data.desc);
      setCategory(res.data.category);
      setRating(res.data.rating);
    });
  }, [id]);

  let updatedata = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/foodData/" + id, {
        img,
        name,
        price,
        desc,
        category,
        rating,
      })
      .then((res) => {
        navigate("/dashboard");
      });
  };

  return (
    <>
    
      <div className="flex flex-col min-h-screen ">
        {/* Navbar */}
        <AdminNavbar />

        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
         
          <form
            method="post"
            onSubmit={updatedata}
            className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
          >
            <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">
              Update
            </h2>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="img"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter food name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">Price</label>
              <input
                type="number"
                name="price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">
                Description
              </label>
              <textarea
                name="desc"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">
                Category
              </label>
              <input
                type="text"
                name="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">Rating</label>
              <input
                type="number"
                step="0.1"
                name="rating"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter rating (e.g. 4.5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="submit"
                value="Update"
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300"
              />
            </div>
          </form>
        </div>
      </div>
      {/* Footer - always at bottom */}
      <Footer />
    </>
  );
}

export default Update;
