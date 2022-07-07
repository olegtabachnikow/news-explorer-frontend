import React from "react";
import "./Header.css";

function Header({ children }) {
  return (
    <div className="header">
      <span className="header__site-name">News Explorer</span>
        {children}
    </div>
  );
}
export default Header;
