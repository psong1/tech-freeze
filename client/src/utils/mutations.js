import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_NOTE = gql`
  mutation saveNote($noteData: NoteInput!) {
    saveNote(noteData: $noteData) {
      _id
      username
      email
      savedNote {
        noteId
        title
        noteBody
        createOn
      }
    }
  }
`;

export const REMOVE_NOTE = gql`
  mutation removeNote($noteId: ID!) {
    removeNote(noteId: $noteId) {
      _id
      username
      email
      savedNote {
        noteId
        title
        noteBody
        createdOn
      }
    }
  }
`;
