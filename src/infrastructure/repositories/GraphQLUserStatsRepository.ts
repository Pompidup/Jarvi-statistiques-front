import { IUserStatsRepository } from "@/domain/interfaces/IUserStatsRepository";
import { UserStats, UserStatsFilter } from "@/domain/models/UserStats";
import { client } from "../adapters/ApolloClientAdapter";
import { GET_USER_STATS } from "../graphql/queries";

export class GraphQLUserStatsRepository implements IUserStatsRepository {
  async fetchUserStats(filter: UserStatsFilter): Promise<UserStats[]> {
    const { data } = await client.query({
      query: GET_USER_STATS,
      variables: {
        p_user_id: filter.userId,
        p_type: filter.messageType,
        p_aggregation_type: filter.periodType,
        p_start_date: filter.startDate
          ? filter.startDate.toISOString()
          : new Date(
              new Date().setDate(new Date().getDate() - 30)
            ).toISOString(),
        p_end_date: filter.endDate
          ? filter.endDate.toISOString()
          : new Date().toISOString(),
      },
    });

    return data.get_user_response_stats.map((stat: any) => ({
      period: stat.period,
      totalMessages: stat.total_messages,
      repliedMessages: stat.replied_messages,
      responseRate: stat.response_rate,
    }));
  }
}
