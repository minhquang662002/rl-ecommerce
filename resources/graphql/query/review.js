import { gql } from "@apollo/client"

export const PGR = gql `
    query pg($id_product: String!, $page: Int!) {
        reviewproduct(id_product: $id_product, page: $page) {
        id_product,
        id_user,
        content,
        image,
        timedl,
        timeup,avt_user,user_name,
        rating,
        star
        }
    } 
`;