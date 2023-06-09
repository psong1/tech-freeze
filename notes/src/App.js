import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import LoginSignupContainer from "./Components/LoginSignupContainer/LoginSignupContainer";
import logo from "./images/logo.png";
import Main from "../src/Components/main/Main";
import Sidebar from "../src/Components/sidebar/Sidebar";

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

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <LoginSignupContainer />
        <img src={logo} alt="" />
        <img src={require("./images/logo.png")} alt="" />
        <Sidebar/>
        <Main/>
      </div>
    </ApolloProvider>
  );
};

export default App;
