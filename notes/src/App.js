import { useState } from "react";
import LoggedIn from "./Components/LoggedIn/LoggedIn";
import LoginForm from "./Components/LoginForm/LoginForm";
import {FaApple} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <LoggedIn setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />

      )}

      <div>
        <h1> <FaApple/> </h1>
        <h1> <FaGoogle/> </h1>
      </div>
    </>
  );
}

export default App;
