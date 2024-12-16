import { IUserStatsService } from "@/domain/interfaces/IUserStatsService";
import { IUserStatsRepository } from "@/domain/interfaces/IUserStatsRepository";
import { UserStats, UserStatsFilter } from "@/domain/models/UserStats";

export class UserStatsService implements IUserStatsService {
  constructor(private repository: IUserStatsRepository) {}

  async getUserStats(filter: UserStatsFilter): Promise<UserStats[]> {
    return this.repository.fetchUserStats(filter);
  }
}
