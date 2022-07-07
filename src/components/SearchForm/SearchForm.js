import React from "react";
import "./SearchForm.css";

function SearchForm() {
  function handleSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <form
      className="search-form"
      id="search-form"
      name="search-form"
      action="submit"
      onSubmit={handleSubmit}
    >
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchForm;
