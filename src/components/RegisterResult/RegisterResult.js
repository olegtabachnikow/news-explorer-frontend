import React from "react";
import "./RegisterResult.css";
import Popup from "../Popup/Popup";
import closeIcon from "../../images/close-icon.svg";

function RegisterResult({ isOpen, onClose, onOpen, title }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="register-result form">
        <button
          onClick={onClose}
          className="register-result__close-button form__close-button"
          type="button"
        >
          <img
            className="register-result__close-icon form__close-icon"
            src={closeIcon}
            alt="white cross icon"
          />
        </button>
        <h2 className="register-result__title form__title">{title}</h2>
        <button
          onClick={onOpen}
          className="register-result__button form__button-secondary"
          type="button"
        >
          Sign in
        </button>
      </div>
    </Popup>
  );
}

export default RegisterResult;
