import React from "react";
import "./NewsCard.css";
import flagIcon from "../../images/flag-icon.svg";
import flagIconMarked from "../../images/flag-icon-marked.svg";
import trashIcon from "../../images/trash.svg";
import { useLocation } from "react-router-dom";

function NewsCard({ loggedIn, card }) {
  const location = useLocation();
  const [isMarked, setIsMarked] = React.useState(false);
  function formatDate(date) {
    const dateArr = date.toString().slice(0, 10).split("-", 3);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    dateArr[1] = monthNames[parseInt(dateArr[1]) - 1];
    return `${dateArr[1]} ${dateArr[2]}, ${dateArr[0]}`;
  }
  function handleMarkClick() {
    loggedIn && setIsMarked((isMarked) => !isMarked);
  }
  return (
    <article className="news-card">
      {location.pathname !== "/" && (
        <div className="news-card__keyword button-style">Doge</div>
      )}
      <button
        onClick={handleMarkClick}
        className="news-card__button button-style"
      >
        {location.pathname === "/" ? (
          !isMarked ? (
            <img className="news-card__flag" src={flagIcon} alt="flag icon" />
          ) : (
            <img
              className="news-card__flag_marked"
              src={flagIconMarked}
              alt="blue flag icon"
            />
          )
        ) : (
          <img className="news-card__trash" src={trashIcon} alt="trash icon" />
        )}
      </button>
      <div className="news-card__reminder button-style">
        {location.pathname === "/"
          ? "Sign in to save articles"
          : "Remove from saved"}
      </div>
      <img
        className="news-card__image"
        src={card.urlToImage}
        alt={card.source.name}
      />
      <div className="news-card__info">
        <span className="news-card__date">{formatDate(card.publishedAt)}</span>
        <h2 className="news-card__title">{card.title}</h2>
        <p className="news-card__text">{card.description}</p>
        <span className="news-card__source">{card.source.name}</span>
      </div>
    </article>
  );
}

export default NewsCard;
