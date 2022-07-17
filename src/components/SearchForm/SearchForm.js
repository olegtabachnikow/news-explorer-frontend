import React from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = React.useState("");
  const [searchFormPlaceholder, setSearchFormPlaceholder] = React.useState("");
  function handleChange(evt) {
    setSearchFormPlaceholder("");
    setKeyword(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    if (keyword === "") {
      setSearchFormPlaceholder("Please enter a keyword");
    }
    onSearch(keyword);
    console.log(keyword);
    setKeyword("");
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
        value={keyword || ""}
        className="search-form__input"
        type="text"
        placeholder={searchFormPlaceholder || "Enter topic"}
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchForm;
