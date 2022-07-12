import React from "react";
import "./FormInput.css";

function FormInput({ type, name, placeholder }) {
  return (
    <div className="form__input-container">
      <span className={`form__input-title form__input-${name.toLowerCase()}`}>
        {name}
      </span>
      <input
        className="form__input"
        type={type}
        name={name.toLowerCase()}
        placeholder={`Enter ${placeholder}`}
        required
      />
      <span className={`form__input-error error-${name.toLowerCase()}`}>
        bla bla bla
      </span>
    </div>
  );
}

export default FormInput;
