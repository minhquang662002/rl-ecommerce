import { gql } from "@apollo/client"

export const STATICSTIC = gql `
  query GetStaticsticShop ($id_user: String!, $id_shop: String!) {
    staticstic(id_user: $id_user, id_shop: $id_shop) {
      day,
      orders,
      revenue,
      access_times, 
    }
  }
`;