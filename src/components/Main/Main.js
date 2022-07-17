import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";

function Main({
  searchErrorMessage,
  isOpen,
  onSearch,
  searchResult,
  articles,
  handleCount,
  showMoreButton,
  cardsCount
}) {
  return (
    <section className="main">
      <div className="main__form-box">
        <h1 className="main__title">What's going on in the world?</h1>
        <h2 className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </h2>
        <SearchForm onSearch={onSearch} />
      </div>
      <NewsCardList
        isOpen={isOpen}
        searchResult={searchResult}
        searchErrorMessage={searchErrorMessage}
        articles={articles}
        handleCount={handleCount}
        showMoreButton={showMoreButton}
      >
        {articles.length &&
          articles.slice(0, cardsCount).map((card, i) => <NewsCard key={i} card={card} />)}
      </NewsCardList>
      <About />
    </section>
  );
}
export default Main;
