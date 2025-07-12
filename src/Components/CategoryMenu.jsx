import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/categorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/foodData");
        const data = await response.json();
        setApiData(data);

        const uniqueCategories = [
          ...new Set(data.map((food) => food.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchData();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl">Find the best food</h3>

      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={` px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;




// import React, { useEffect, useState } from "react";
// import foodData from "../data/FoodData";
// import { useDispatch, useSelector } from "react-redux";
// import { setCategory } from "../redux/slices/categorySlice";

// const CategoryMenu = () => {
//   const [categories, setCategories] = useState([]);
//   const listUniqueCategories = () => {
//     const uniqueCategories = [
//       ...new Set(foodData.map((food) => food.category)),
//     ];
//     setCategories(uniqueCategories);
//     console.log(uniqueCategories);
//   };

//   useEffect(() => {
//     listUniqueCategories();
//   }, []);

//   const dispatch = useDispatch();
//   const selectedCategory = useSelector((state) => state.category.category);

//   return (
//     <div className="ml-6">
//       <h3 className="text-xl">Find the best food</h3>

//       <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
//         <button
//           onClick={() => dispatch(setCategory("All"))}
//           className={`px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white" }`}
//         >
//           All
//         </button>
//         {categories.map((category, index) => {
//           return (
//             <button
//               onClick={() => dispatch(setCategory(category))}
//               key={index}
//               className={` px-3 py-2  bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white" }`}
//             >
//               {category}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CategoryMenu;
