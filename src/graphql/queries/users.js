import gql from 'graphql-tag'

export const GET_ALL_USERS = gql`query getusers {
    users2 {
      id
      email
      phone
      firstName
      verifiedEmail
    }
}`;

export const VERIFY_EMAIL = gql`mutation verifyEmail($id: String!, $verifiedEmail: String!) {
    userControllerUpdateAll(where: {
      id: $id
    }, userPartialInput:{
      verifiedEmail: $verifiedEmail
    }) {
      count
    }
}`;
