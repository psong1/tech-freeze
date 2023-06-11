import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
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
