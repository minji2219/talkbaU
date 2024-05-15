import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" max-w-[600px] h-[100vh] mx-auto border-2">
      <Outlet />
    </div>
  );
};

export default Layout;
