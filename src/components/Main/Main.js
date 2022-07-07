import React from "react";
import "./Main.css";

function Main({ children }) {
  return (
    <div className="main">
      <div className="main__content">
      <h1 className="main__title">What's going on in the world?</h1>
      <h2 className="main__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      {children}
      </div>
    </div>
  );
}
export default Main;
