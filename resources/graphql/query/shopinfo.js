import { gql } from "@apollo/client"

export const SHOPINFO = gql`
  query GetExchangeRates ($id_shop: String!) {
    shopOfUser(id_shop: $id_shop) {
      name_shop,
      quantity_shop,
      avatar_shop,
      follower,
      joined,
      review
    }
  }
`;