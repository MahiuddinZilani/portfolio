import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="font-sans antialiased relative">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
