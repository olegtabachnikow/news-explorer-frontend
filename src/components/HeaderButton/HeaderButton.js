import React from "react";
import "./HeaderButton.css";
import whiteSignOutIcon from "../../images/sign-out-white.svg";
import blackSignOutIcon from "../../images/sign-out-black.svg";

function HeaderButton({ loggedIn, theme }) {
  return loggedIn ? (
    <button className={`header-button ${!theme && 'header-button_black'}`}>
      <span className="header-button__user-name">Oleg</span>
      <img src={theme ? whiteSignOutIcon : blackSignOutIcon} alt="sign out icon" />
    </button>
  ) : (
    <button className="header-button">
      <span className="header-button__user-name header-button__signin">
        Sign in
      </span>
    </button>
  );
}
export default HeaderButton;
