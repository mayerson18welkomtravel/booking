import gql from 'graphql-tag'

export const GET_ALL_PYMES = gql`query getmipymes {
    mipymes3 {
      id
      subdomain
    }
}`;
