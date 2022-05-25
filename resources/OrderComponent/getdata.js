import { gql } from "@apollo/client"

export const GETDATA = gql `
  query GetPurchase ($id_user: String!, $type: Int!) {
    purchase(id_user: $id_user, type: $type) {
      id_product,
      quantity,
      cost,
      id_seller,
      state,
      title,
      size,
      imageindex,
      id_shop,
      name_shop,
      avatar_shop,
      color
    }
  }
`;