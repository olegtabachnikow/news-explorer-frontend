import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";

function Main({ loggedIn }) {
  return (
    <section className="main">
      <div className="main__form-box">
        <h1 className="main__title">What's going on in the world?</h1>
        <h2 className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </h2>
        <SearchForm />
      </div>
      <NewsCardList isSearching={true} isFailed={true} />
      <NewsCardList isSearching={true} isFailed={false} />
      <NewsCardList isSearching={false} isFailed={false}>
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
      </NewsCardList>
      <About />
    </section>
  );
}
export default Main;
