import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[600px] h-[100vh] mx-auto border-2">
      <div className="mx-10 my-20 h-[calc(100%-160px)] bg-red-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
