import gql from 'graphql-tag'

export const GET_GALLERY_BY_ID = gql`query getmipymes {
    mipymes3 {
      id
      subdomain
    }
}`;
