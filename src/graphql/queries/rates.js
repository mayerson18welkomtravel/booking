import gql from 'graphql-tag'

export const GET_RATES_BY_DATE = gql`query ($categoryId: Int!, $mipymeId: String!, $date: String!){
  rateByDate(
    categoryId: $categoryId
    mipymeId: $mipymeId
    date: $date
  ) {
    room {
      id
      customName
      description
      capacity
      children
      gallerys {
        id
        url
      }
    }
    rate {
      id
      ratePerNight
    }
    adjs {
      id
      from
      to
    }
  }
}`;

export const RATE_BY_DISTRIBUTION = gql`query (
  $distribution: [distributionInput]!,
  $from: String!,
  $to: String!,
  $isTaxes: Boolean
) {
  ratesByDistribution (
    distribution: $distribution,
    from: $from,
    to: $to,
    isTaxes: $isTaxes
  ) {
    total
  }
}`;