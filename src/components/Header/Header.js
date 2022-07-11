import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ children, theme, isOpen, openPopup, hidden }) {
  const navigate = useNavigate();
  function handleClick() {
    isOpen ? openPopup(false) : openPopup(true);
  }
  return (
    <header
      className={`header ${
        isOpen && (theme ? "header_background_dark" : "header_background_light")
      } ${!theme && "header_black"} ${hidden && "header__hidden"}`}
    >
      <span onClick={() => navigate("/")} className="header__site-name">
        News Explorer
      </span>
      {children}
      <button
        onClick={handleClick}
        className={`header__popup-button ${
          !theme && "header__popup-button_dark"
        } ${isOpen && "animated"}`}
        type="button"
      ></button>
    </header>
  );
}
export default Header;
