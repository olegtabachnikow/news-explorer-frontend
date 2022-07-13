import React from "react";
import "./Loader.css";
import notFound from "../../images/not-found.svg";
import Preloader from "../Preloader/Preloader";

function Loader({ isFailed }) {
  return (
    <div className="loader">
      {!isFailed ? <Preloader /> : <img src={notFound} alt="sadly smile" />}
      {isFailed && <h2 className="loader__title">Nothing found</h2>}
      <span className="loader__text">
        {!isFailed
          ? "Searching for news..."
          : "Sorry, but nothing matched your search terms."}
      </span>
    </div>
  );
}
export default Loader;
