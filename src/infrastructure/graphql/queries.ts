import { gql } from "@apollo/client";

export const GET_USER_STATS = gql`
  query GetUserStats(
    $p_user_id: uuid!
    $p_type: String!
    $p_aggregation_type: String!
    $p_start_date: timestamp
    $p_end_date: timestamp
  ) {
    get_user_response_stats(
      args: {
        p_user_id: $p_user_id
        p_type: $p_type
        p_aggregation_type: $p_aggregation_type
        p_start_date: $p_start_date
        p_end_date: $p_end_date
      }
    ) {
      period
      total_messages
      replied_messages
      response_rate
    }
  }
`;
