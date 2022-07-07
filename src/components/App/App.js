import React from "react";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import HeaderButton from "../HeaderButton/HeaderButton";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
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
<About />
      <Footer />
    </div>
  );
}

export default App;
