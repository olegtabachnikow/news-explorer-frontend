import React from "react";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import HeaderButton from "../HeaderButton/HeaderButton";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div className="app">
      <Header>
        <Navigation loggedIn={loggedIn}>
          <HeaderButton loggedIn={loggedIn} />
        </Navigation>
      </Header>
      <Main>
        <SearchForm />
      </Main>
      <NewsCardList>
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
      </NewsCardList>
      <About />
      <Footer />
    </div>
  );
}

export default App;
