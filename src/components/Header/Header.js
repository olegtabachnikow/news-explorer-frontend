import React from "react";
import "./Header.css";

function Header({ children }) {
  return (
    <header className="header">
      <span className="header__site-name">News Explorer</span>
        {children}
    </header>
  );
}
export default Header;
