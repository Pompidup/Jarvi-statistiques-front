import { UserStats, UserStatsFilter } from "../models/UserStats";

export interface IUserStatsRepository {
  fetchUserStats(filter: UserStatsFilter): Promise<UserStats[]>;
}
