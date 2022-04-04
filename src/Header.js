import React from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import "./Header.css";
import Logo from './WSBlogo.jpeg'

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
      <a href="https://www.reddit.com/r/wallstreetbets/" target="_blank">
        <img src={Logo} width={25}/>
      </a>
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <SearchOutlined />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="/">Free Stocks</a>
        <a href="/">PortFolio</a>
        <a href="/">Cash</a>
        <a href="/">Messages</a>
        <a href="/">Account</a>
      </div>
    </div>
  );
}

export default Header;