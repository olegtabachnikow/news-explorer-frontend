import React from "react";
import './SavedNews.css';
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews() {
    return (
        <section className="saved-news">
        <SavedNewsHeader />
        <div className="saved-news__cards">
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
        </section>
    )
}
export default SavedNews;