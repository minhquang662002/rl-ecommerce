import { gql } from "@apollo/client"

export const SIDEINFO = gql`
  query GetExchangeRates ($id_user: String!) {
    user(id_user: $id_user) {
      email,
      phonenumber,
      gender,
      fullname, 
      date_of_birth,
      month_of_birth,
      year_of_birth
    }
  }
`;