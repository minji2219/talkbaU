import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {(pathname === "/explain" || pathname === "/recommand") && (
        <Link to="/" state={{ pathname: pathname }}>
          <span className="material-symbols-outlined mb-5 hover:cursor-pointer">
            arrow_back_ios
          </span>
        </Link>
      )}

      <img src="/image/logo.png" alt="logo" width={150} />
    </div>
  );
};

export default Header;
