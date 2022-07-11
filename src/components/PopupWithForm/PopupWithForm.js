import React from "react";
import Popup from "../Popup/Popup";
import "./PopupWithForm.css";
import closeIcon from "../../images/close-icon.svg";

function PopupWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onOpen,
  handleSubmitForm,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSubmitForm(true);
  }
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form className="form" type="submit">
        <button onClick={onClose} className="form__close-button" type="button">
          <img
            className="form__close-icon"
            src={closeIcon}
            alt="white cross icon"
          />
        </button>
        <h2 className="form__title">{title}</h2>
        {children}
        <p className="form__error">The email is not available</p>
        <button
          onClick={handleSubmit}
          className="form__submit-button"
          type="submit"
        >
          {title}
        </button>
        <div className="form__button-container">
          <span className="form__button-secondary-text">or </span>
          <button
            onClick={onOpen}
            className="form__button-secondary"
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
