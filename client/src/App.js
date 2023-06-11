import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import uuid from "react-uuid";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.css";
import LoginSignupContainer from "./Components/LoginSignupContainer/LoginSignupContainer";
import Notepage from "./Components/NotePage/Notepage";
import Sidebar from "./Components/Sidebar/Sidebar";
import logo from "./images/logo.png";
// import Main from "./Components/main/Main";
// import Sidebar from "./Components/Sidebar/Sidebar";

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
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <ApolloProvider client={client}>
      <img className="app-logo" src={logo} alt="" />
      <img className="app-logo" src={require("./images/logo.png")} alt="" />
      <Router>
        <>
          <Routes>
            <Route path="/" element={<LoginSignupContainer />} />

            <Route
              path="/notes"
              element={
                <div className="App">
                  <img className="note-logo" src={logo} alt="" />
                  <img
                    className="note-logo"
                    src={require("./images/logo.png")}
                    alt=""
                  />
                  <Sidebar
                    notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
                  />
                  <Notepage
                    activeNote={getActiveNote()}
                    onUpdateNote={onUpdateNote}
                  />
                </div>
              }
            />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
};

export default App;
