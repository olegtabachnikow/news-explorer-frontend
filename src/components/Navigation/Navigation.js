import React from "react";
import "./Navigation.css";

function Navigation({ children, loggedIn }) {
  return (
    <div className="navigation">
      <button className="navigation__page-button">Home</button>
      {loggedIn && <button className="navigation__page-button">Saved Articles</button>}
      {children}
    </div>
  );
}
export default Navigation;
