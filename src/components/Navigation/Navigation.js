import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router";

function Navigation({ children, loggedIn, theme, isOpen, onClose }) {
  const navigate = useNavigate();
  function redirectToMain() {
    navigate("/");
    onClose();
  }
  function redirectToNews() {
    navigate("/saved-news");
    onClose();
  }
  return (
    <nav
      className={`navigation ${
        isOpen &&
        (!theme ? "navigation_background_light" : "navigation_background_dark")
      } ${isOpen && "navigation_opened"}`}
    >
      <button
        className={`navigation__page-button  ${
          theme && "navigation_main_active"
        }`}
        onClick={redirectToMain}
      >
        Home
      </button>
      {loggedIn && (
        <button
          className={`navigation__page-button  ${
            theme ? "navigation_path_inactive" : "navigation_path_active"
          }`}
          onClick={redirectToNews}
        >
          Saved Articles
        </button>
      )}
      {children}
    </nav>
  );
}
export default Navigation;
