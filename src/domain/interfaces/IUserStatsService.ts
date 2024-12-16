import { UserStats, UserStatsFilter } from "../models/UserStats";

export interface IUserStatsService {
  getUserStats(filter: UserStatsFilter): Promise<UserStats[]>;
}
