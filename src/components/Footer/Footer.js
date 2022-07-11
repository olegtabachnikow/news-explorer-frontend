import React from "react";
import "./Footer.css";
import githubIcon from "../../images/github-icon.svg";
import facebookIcon from "../../images/facebook-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__text">
        &copy; {new Date().getFullYear()} SuperSite, Powered by News API
      </span>
      <nav className="footer__navigation">
        <div className="footer__link-box">
        <div className="footer__text-link-box">
          <a className="footer__link" href="/">
            Home
          </a>
          <a
            className="footer__link"
            href="https://practicum.com/en-isr/?gclid=CjwKCAjwiJqWBhBdEiwAtESPaG-Yi1Douzg3PoUTqXMKp5X99BpuXWF7q_i6Hnj39Tn6cHvfDjfQURoCDtcQAvD_BwE"
            rel="noreferrer"
            target="_blank"
          >
            Practicum by Yandex
          </a>
        </div>
        <div className="footer__social-box">
          <a
            className="footer__link footer__link-social"
            href="https://github.com/Eskel4ik"
            rel="noreferrer"
            target="_blank"
          >
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            className="footer__link footer__link-social"
            href="https://www.facebook.com/eskel4ik"
            rel="noreferrer"
            target="_blank"
          >
            <img src={facebookIcon} alt="facebook icon" />
          </a>
          </div>
        </div>
      </nav>
    </footer>
  );
}
export default Footer;
