"use client";
import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Popular from "./Components/Popular/Popular";

const page = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Popular />
      </div>
    </div>
  );
};

export default page;
