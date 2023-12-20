import Orden from "./components/orden/orden";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/Navbar/NavBar";

function App() {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    const getOrdenes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/ordenes_dia");
        setOrdenes(response.data);
      } catch (error) {
        console.error("Error fetching ordenes:", error);
      }
    };
    getOrdenes();
  }, []);

  return (
    <div>
      <NavBar />
      <Orden data={ordenes} />
    </div>
  );
}

export default App;
