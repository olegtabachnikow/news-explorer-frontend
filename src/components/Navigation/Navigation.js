import React from "react";
import "./Navigation.css";
import { useNavigate } from "react-router";

function Navigation({ children, loggedIn, theme }) {
  const navigate = useNavigate();
  return (
    <nav className="navigation">
      <button
        className={`navigation__page-button  ${
          theme && "navigation_main_active"
        }`}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      {loggedIn && (
        <button
          className={`navigation__page-button  ${
            theme ? "navigation_path_inactive" : "navigation_path_active"
          }`}
          onClick={() => navigate("/saved-news")}
        >
          Saved Articles
        </button>
      )}
      {children}
    </nav>
  );
}
export default Navigation;
