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
  handleFormSubmit,
  signError,
}) {
  const [values, setValues] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  function handleSubmit(evt) {
    evt.preventDefault();
    isValid && handleFormSubmit(values);
  }
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form className="form" type="submit" onSubmit={handleSubmit}>
        <button onClick={onClose} className="form__close-button" type="button">
          <img
            className="form__close-icon"
            src={closeIcon}
            alt="white cross icon"
          />
        </button>
        <h2 className="form__title">{title}</h2>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { setIsValid, setValues, values, isOpen })
        )}
        <p className="form__error">{signError}</p>
        <button
          className={`form__submit-button ${
            !isValid && "form__submit-button_disabled"
          }`}
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
