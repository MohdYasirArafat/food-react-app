import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";


const FoodItems = () => {
  const [apiData, setApiData] = useState([]);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => toast.success(`Added ${name}`);

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

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {apiData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;




// import FoodCard from "./FoodCard";
// import FoodData from "../data/FoodData.js";
// import toast, { Toaster } from "react-hot-toast";
// import { useSelector } from "react-redux";

// const FoodItems = () => {
//   const category = useSelector((state) => state.category.category);
//   const search = useSelector((state) => state.search.search);
//   const handleToast = (name) => toast.success(`Added ${name} `);

//   return (
//     <>
//       <Toaster position="top-center" reverseOrder={false} />

//       <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10 ">
//         {FoodData.filter((food) => {
//           if (category === "All") {
//             return food.name.toLowerCase().includes(search.toLowerCase());
//           } else {
//             return category === food.category &&
//               food.name.toLowerCase().includes(search.toLowerCase());
//           }
//         }).map((food) => (
//           <FoodCard
//             key={food.id}
//             id={food.id}
//             name={food.name}
//             price={food.price}
//             desc={food.desc}
//             rating={food.rating}
//             img={food.img}
//             handleToast={handleToast}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default FoodItems;
