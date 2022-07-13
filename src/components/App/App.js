import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [mainTheme, setMainTheme] = React.useState(false);
  const [isBurgerPopupOpened, setIsBurgerPopupOpened] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [resultRegisterPopupOpen, setResultRegisterPopupOpen] =
    React.useState(false);
  const [hideHeader, setHideHeader] = React.useState(true);
  const location = useLocation();
  React.useEffect(() => {
    location.pathname === "/" ? setMainTheme(true) : setMainTheme(false);
  }, [location.pathname]);
  function openBurger(boolean) {
    setIsBurgerPopupOpened(boolean);
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
        <Route index path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/saved-news" element={<SavedNews loggedIn={loggedIn} />} />
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
    </div>
  );
}

export default App;
