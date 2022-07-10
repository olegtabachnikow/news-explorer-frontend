import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Header.css";

function Header({ children, theme }) {
  const navigate = useNavigate();
  return (
    <header className={`header ${!theme && "header_black"}`}>
      <span onClick={() => navigate('/')} className="header__site-name">News Explorer</span>
        {children}
    </header>
  );
}
export default Header;
