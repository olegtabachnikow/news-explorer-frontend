import React from "react";
import "./About.css";
import myPhoto from "../../images/me.jpeg";

function About() {
  return (
    <section className="about">
      <img className="about__image" src={myPhoto} alt="oleg tabachnikow" />
      <article className="about__text-container">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hi! My name is Oleg, I'm a result-oriented, and highly-motivated
          FullStack Developer.
        </p>
        <p className="about__text">
          I can help my clients in writing single-page applications using React
          JS from client side, and Express.js from server side.
        </p>
      </article>
    </section>
  );
}

export default About;
