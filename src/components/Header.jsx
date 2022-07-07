import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from './Search';

function Header() {
  return (
    <header>
      <div className="row d-flex align-items-center justify-content-between ml-0 mr-0 w-100">
        <div className="col-lg-3 col-md-4 col-sm-12 logo">
          <img src={Logo} alt="" Logo />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-end">
            <Search/>
        </div>
      </div>
    </header>
  );
}

export default Header;
