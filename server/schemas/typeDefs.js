const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedNotes: [Note]
  }

  type Note {
    noteId: ID!
    title: String!
    date: String
    noteBody: String
  }

  type Category {
    categoryId: ID!
    catgory: String
    date: String
    notes: [Note]
  }

  type Auth {
    token: ID!
    user: User
  }

  input NoteInput {
    title: String!
    noteBody: String!
    noteId: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveNote(noteData: NoteInput!): User
    removeNote(noteId: ID!): User
  }
`;

module.exports = typeDefs;
