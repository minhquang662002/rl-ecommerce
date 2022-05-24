import { gql } from "@apollo/client"

export const feCo = gql`
  query fetchComment ($id_comment: String!, $page: Int!) {
    comment(id_comment: $id_comment, page: $page) {
        id_comment,
        id_user,
        content,
        type_comment,
        timedl,
        timeup,
        avt_user,
        user_name
    }
  }
`;