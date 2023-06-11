import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { SAVE_NOTE } from "../../utils/mutations";
import { savedNoteIds } from "../../utils/localstorage";
// import { REMOVE_NOTE } from "../../utils/mutations";
import { Button, Form } from "react-bootstrap";

import { auth } from "../../utils/auth";

function Main() {
  const { loading, data } = useQuery(QUERY_ME);
  const [saveNote, { error }] = useMutation(SAVE_NOTE);
  const [noteData, setNoteData] = useState({
    noteId: "",
    title: "",
    noteBody: "",
  });

  const addNoteHandler = async (e) => {
    e.preventDefault();
    const token = auth.loggedin() ? auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      const { data } = await saveNote({
        variables: {
          ...noteData,
        },
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    setNoteData({
      noteId: "",
      title: "",
      noteBody: "",
    });
  };
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              placeholder="title"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Text Area</Form.Label>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>
        </Form>

        <Button type="submit" onClick={addNoteHandler}>
          SAVE
        </Button>
        <Button type="submit">REMOVE</Button>
      </div>
    </div>
  );
}

export default Main;
