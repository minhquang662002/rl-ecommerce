import { gql } from "@apollo/client"

export const UPNOTI = gql`
  mutation upNoti ($user_id: String!,$avatar_user": String!,$content: String!, $read: Boolean!, $time: String!, $user_name: String! ) {
    notification(user_id: $user_id, avatar_user: $avatar_user, content: $content, read: $read, time: $time, user_name: $user_name) {
      user_id
    }
  }
`;