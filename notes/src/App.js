import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";

const App = () => {
  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("id_token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  // function App() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);

  //   return (
  //     <>
  //       {isLoggedIn ? (
  //         <LoggedIn setIsLoggedIn={setIsLoggedIn} />
  //       ) : (
  //         <LoginForm setIsLoggedIn={setIsLoggedIn} />
  //       )}

  //       <img classname="logo" src={require("./images/logo.png")} alt="" />
  //     </>
  //   );
  // }
};

export default App;
