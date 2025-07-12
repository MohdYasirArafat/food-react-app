import React, { useEffect, useState } from "react";
import axios from "axios";
import Read from "./Read";


const Dashboard = () => {
  const [val, setVal] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getdata = async () => {
    const result = await axios.get("http://localhost:3000/foodData");
    setVal(result.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
        <Read />
    </>
  );
};

export default Dashboard;

