import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "../Components/Footer";

function Create() {
  let navigate = useNavigate();

  let [img, setImg] = useState("");
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [desc, setDesc] = useState("");
  let [category, setCategory] = useState("");
  let [rating, setRating] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function submitdata(e) {
    e.preventDefault();
    // console.log(e.target.value);
    axios
      .post("http://localhost:3000/foodData", {
          name,
        img,
        price,
        desc,
        category,
        rating,
        // img,
        // name,
        // price,
        // desc,
        // category,
        // rating,
      })
      .then((res) => {
        navigate("/dashboard");
      });
  }

  return (
    <>
      {/* Navbar */}
      <AdminNavbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          method="post"
          onSubmit={submitdata}
          className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Create
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
              onChange={(e) => setImg(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
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
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 text-sm mb-1">Category</label>
            <input
              type="text"
              name="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 text-sm mb-1">Rating</label>
            <input
              type="number"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter rating (e.g. 4.5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300"
            />
          </div>
        </form>
      </div>

      {/* Footer - always at bottom */}
      <Footer />
    </>
  );
}

export default Create;

// import React,{useState} from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';
// import Footer from '../Components/Footer';

// function Create() {
//     let navigate = useNavigate()
//     let[title, setTitle]=useState();
//     let[price, setPrice]=useState();
//     let[size, setSize]=useState();
//     let[color, setColor]=useState();

//      const [isMenuOpen, setIsMenuOpen] = useState(false);

//     function submitdata(e){
//         e.preventDefault();
//         // console.log(e.target.value);
//         axios.post("http://localhost:3000/foodData",{
//             title, price, size,color
//         }).then((res)=>{
//             navigate('/dashboard')

//         });
//     }

//   return (
//     <>

//       {/* Navbar */}
//      <AdminNavbar/>

//         <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>

//             <form method="post"
//              onSubmit={submitdata}
//               className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
//                  <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//             Create
//               </h2>
//                 <div className="mb-4">

//                     <label className="block text-gray-700 text-sm mb-1">title</label>
//                     <input type="text" name='title' className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter product title'
//                     onChange={(e)=>{setTitle(e.target.value)}} />

//                 </div>
//                 <div className="mb-3">
//                     <label className="block text-gray-700 text-sm mb-1">Price</label>
//                     <input type="number" name='price' className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter price'
//                      onChange={(e)=>{setPrice(e.target.value)}}  />
//                 </div>
//                 <div className="mb-3">
//                     <label className="block text-gray-700 text-sm mb-1">Size</label>
//                     <input type="text" name='size' className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter size'
//                     onChange={(e)=>{setSize(e.target.value)}} />
//                 </div>
//                 <div className="mb-3">
//                     <label className="block text-gray-700 text-sm mb-1">Color</label>
//                     <input type="text" name='color' className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter color'
//                     onChange={(e)=>{setColor(e.target.value)}} />
//                 </div>
//                 <div className="mb-3">
//                     <input type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300" />
//                 </div>
//             </form>

//      </div>
//         {/* Footer - always at bottom */}
//            <Footer />

//     </>
//   )
// }

// export default Create
