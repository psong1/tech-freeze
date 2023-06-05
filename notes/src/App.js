import { useState } from "react";
import LoggedIn from "./Components/LoggedIn/LoggedIn";
import LoginForm from "./Components/LoginForm/LoginForm";

import "./App.css";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />

      )}

        <img classname="logo"src={require('./images/logo.png')} alt=""/>
    </>
  );
}

export default App;
