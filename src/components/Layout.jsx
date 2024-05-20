import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[600px] h-[100vh] mx-auto border-2 overflow-y-scroll">
      <div className="mx-10 my-16 h-[calc(100%-160px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
