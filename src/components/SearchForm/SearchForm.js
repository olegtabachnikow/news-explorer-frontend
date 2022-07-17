import React from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
const [keyword, setKeyword] = React.useState('');
function handleChange(evt) {
  setKeyword(evt.target.value);
}
  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(keyword);
    setKeyword('');
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
      onChange={handleChange}
      value={keyword || ''}
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
