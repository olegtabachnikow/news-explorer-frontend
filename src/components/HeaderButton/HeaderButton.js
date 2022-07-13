import React from "react";
import "./HeaderButton.css";
import whiteSignOutIcon from "../../images/sign-out-white.svg";
import blackSignOutIcon from "../../images/sign-out-black.svg";

function HeaderButton({ loggedIn, theme, onOpen, onSignOut }) {
  return loggedIn ? (
    <button
      onClick={onSignOut}
      className={`header-button ${!theme && "header-button_black"}`}
    >
      <span className="header-button__user-name">Oleg</span>
      <img
        src={theme ? whiteSignOutIcon : blackSignOutIcon}
        alt="sign out icon"
      />
    </button>
  ) : (
    <button onClick={onOpen} className="header-button">
      <span className="header-button__user-name header-button__signin">
        Sign in
      </span>
    </button>
  );
}
export default HeaderButton;
