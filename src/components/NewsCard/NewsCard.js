import React from "react";
import "./NewsCard.css";
import flagIcon from "../../images/flag-icon.svg";
import flagIconMarked from "../../images/flag-icon-marked.svg";

function NewsCard({ loggedIn }) {
  const [isMarked, setIsMarked] = React.useState(false);
  const [loginReminder, setLoginReminder] = React.useState(false);
  React.useEffect(() => {
    const fadeOut =
      loginReminder &&
      setTimeout(() => {
        setLoginReminder(false);
      }, 3000);
    return () => clearTimeout(fadeOut);
  }, [loginReminder]);
  function handleClick() {
    loggedIn ? setIsMarked((isMarked) => !isMarked) : setLoginReminder(true);
  }
  return (
    <article className="news-card">
      {loginReminder && (
        <div className="news-card__reminder button-style">
          Sign in to save articles
        </div>
      )}
      <button onClick={handleClick} className="news-card__button button-style">
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
      <img
        className="news-card__image"
        src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg"
        alt="kakoy to alt"
      />
      <div className="news-card__info">
        <span className="news-card__date">November 2, 2002</span>
        <h2 className="news-card__title">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h2>
        <p className="news-card__text">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <span className="news-card__source">treehunger</span>
      </div>
    </article>
  );
}

export default NewsCard;
