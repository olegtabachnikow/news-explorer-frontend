import React from "react";
import "./NewsCard.css";
import flagIcon from "../../images/flag-icon.svg";
import flagIconMarked from "../../images/flag-icon-marked.svg";
import trashIcon from "../../images/trash.svg";
import { useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function NewsCard({ loggedIn, card, onCardSave, onCardDelete }) {
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);
  const onMainPage = location.pathname === "/";
  const [isMarked, setIsMarked] = React.useState(false);
  React.useEffect(() => {
    currentUser.articles &&
      currentUser.articles.some((item) => item.title === card.title) &&
      setIsMarked(true);
  }, [currentUser, card.title]);
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
  function handleClick() {
    if (loggedIn) {
      !isMarked ? onCardSave(card) : onCardDelete(getCardId());
      setIsMarked(isMarked => (!isMarked));
    }
  }
  function getCardId() {
    const currentSavedCard = currentUser.articles.find(item => card.title === item.title);
    return currentSavedCard._id;
  }
  function handleDeleteClick() {
    onCardDelete(card._id);
  }
  return (
    <article className="news-card">
      {!onMainPage && (
        <div className="news-card__keyword button-style">{card.keyword}</div>
      )}
      {onMainPage ? (
        <>
          <button
            onClick={handleClick}
            className={`news-card__button button-style ${
              !loggedIn && "news-card__button_disabled"
            }`}
          >
            {!isMarked ? (
              <img className="news-card__flag" src={flagIcon} alt="flag icon" />
            ) : (
              <img
                className="news-card__flag_marked"
                src={flagIconMarked}
                alt="blue flag icon"
              />
            )}
          </button>
          <div className="news-card__reminder button-style">
            <span>Sign in to save articles</span>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={handleDeleteClick}
            className="news-card__button button-style news-card__button_disabled"
          >
            <img
              className="news-card__trash"
              src={trashIcon}
              alt="trash icon"
            />
          </button>
          <div className="news-card__reminder button-style">
            <span>Remove from saved</span>
          </div>
        </>
      )}
      <img
        className="news-card__image"
        src={onMainPage ? card.urlToImage : card.image}
        alt={onMainPage ? card.source.name : card.source}
      />
      <div className="news-card__info">
        <span className="news-card__date">
          {onMainPage ? formatDate(card.publishedAt) : formatDate(card.date)}
        </span>
        <h2 className="news-card__title">{card.title}</h2>
        <p className="news-card__text">
          {onMainPage ? card.description : card.text}
        </p>
        <span className="news-card__source">
          {onMainPage ? card.source.name : card.source}
        </span>
      </div>
    </article>
  );
}

export default NewsCard;
