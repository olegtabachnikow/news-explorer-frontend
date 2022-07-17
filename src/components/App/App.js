import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Header from "../Header/Header";
import HeaderButton from "../HeaderButton/HeaderButton";
import SavedNews from "../SavedNews/SavedNews";
import Navigation from "../Navigation/Navigation";
import Popup from "../Popup/Popup";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import RegisterResult from "../RegisterResult/RegisterResult";
import FormInput from "../FormInput/FormInput";
import newsApi from "../../utils/NewsApi";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [mainTheme, setMainTheme] = React.useState(false);
  const [isBurgerPopupOpened, setIsBurgerPopupOpened] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [articles, setArticles] = React.useState([]);
  const [searchErrorMessage, setSearchErrorMessage] = React.useState("");
  const [searchResult, setSearchResult] = React.useState(true);
  const [resultRegisterPopupOpen, setResultRegisterPopupOpen] =
    React.useState(false);
  const [isSearching, setIsSearching] = React.useState(false);
  const [hideHeader, setHideHeader] = React.useState(true);
  const [isCardListOpen, setIsCardListOpen] = React.useState(false);
  const [cardsCount, setCardsCount] = React.useState(3);
  const [showMoreButton, setShowMoreButton] = React.useState(true);
  const location = useLocation();
  React.useEffect(() => {
    location.pathname === "/" ? setMainTheme(true) : setMainTheme(false);
  }, [location.pathname]);
  React.useEffect(() => {
    const prevArticles = localStorage.getItem("articles");
    if (prevArticles && prevArticles !== "[]") {
      setArticles(JSON.parse(prevArticles).slice(0, cardsCount));
      setIsCardListOpen(true);
    }
  }, [cardsCount]);
  React.useEffect(() => {
    cardsCount > articles.length
      ? setShowMoreButton(false)
      : setShowMoreButton(true);
  }, [cardsCount, articles]);

  function openBurger(boolean) {
    setIsBurgerPopupOpened(boolean);
  }
  function handleCount() {
    setCardsCount((cardsCount) => (cardsCount += 3));
  }
  function getData(keyword) {
    setIsSearching(true);
    setSearchResult(true);
    setIsCardListOpen(true);
    localStorage.removeItem("articles");
    setArticles([]);
    setCardsCount(3);
    setSearchErrorMessage("");
    newsApi
      .getArticles(keyword)
      .then((res) => {
        !res.articles.length && setSearchResult(false);
        setIsSearching(false);
        localStorage.setItem("articles", JSON.stringify(res.articles));
        setArticles(res.articles);
      })
      .catch(() =>
        setSearchErrorMessage(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        )
      );
  }
  function handleSignOut() {
    setLoggedIn(false);
  }
  function openRegisterResultPopup(boolean) {
    closeAllPopups();
    setHideHeader(true);
    setResultRegisterPopupOpen(boolean);
  }
  function openRegisterPopup(boolean) {
    closeAllPopups();
    setHideHeader(true);
    setIsRegisterPopupOpen(boolean);
  }
  function openLoginPopup(boolean) {
    setLoggedIn(true);
    closeAllPopups();
    setHideHeader(true);
    setIsLoginPopupOpen(boolean);
  }
  function closeAllPopups() {
    setIsBurgerPopupOpened(false);
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setHideHeader(false);
    setResultRegisterPopupOpen(false);
  }
  return (
    <div className={`app ${mainTheme && "app__background"}`}>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          hidden={hideHeader}
          theme={mainTheme}
          openPopup={openBurger}
          isOpen={isBurgerPopupOpened}
        >
          <Navigation
            loggedIn={loggedIn}
            theme={mainTheme}
            isOpen={isBurgerPopupOpened}
            onClose={closeAllPopups}
          >
            <HeaderButton
              onOpen={openLoginPopup}
              loggedIn={loggedIn}
              theme={mainTheme}
              onSignOut={handleSignOut}
            />
          </Navigation>
        </Header>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Main
                loggedIn={loggedIn}
                onSearch={getData}
                articles={articles}
                searchResult={searchResult}
                isOpen={isCardListOpen}
                searchErrorMessage={searchErrorMessage}
                handleCount={handleCount}
                showMoreButton={showMoreButton}
                cardsCount={cardsCount}
              />
            }
          />
          <Route
            path="/saved-news"
            element={<SavedNews loggedIn={loggedIn} />}
          />
        </Routes>
        <Popup isOpen={isBurgerPopupOpened} onClose={closeAllPopups} />
        <PopupWithForm
          handleSubmitForm={openRegisterResultPopup}
          onOpen={openLoginPopup}
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          title="Sign up"
          buttonText="Sign in"
        >
          <FormInput type="email" name="Email" placeholder="email" />
          <FormInput type="password" name="Password" placeholder="password" />
          <FormInput type="text" name="Username" placeholder="your username" />
        </PopupWithForm>
        <PopupWithForm
          onOpen={openRegisterPopup}
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          title="Sign in"
          buttonText="Sign up"
        >
          <FormInput type="email" name="Email" placeholder="email" />
          <FormInput type="password" name="Password" placeholder="password" />
        </PopupWithForm>
        <RegisterResult
          isOpen={resultRegisterPopupOpen}
          onClose={closeAllPopups}
          onOpen={openLoginPopup}
          title="Registration successfully completed!"
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
