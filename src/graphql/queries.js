import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query {
    posts {
      id
      userId
      title
      body
      dateTime
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      id
      name
      company {
        name
      }
    }
  }
`;
