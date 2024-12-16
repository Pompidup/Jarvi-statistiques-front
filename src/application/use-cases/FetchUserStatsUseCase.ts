import { IUserStatsService } from "@/domain/interfaces/IUserStatsService";
import { UserStatsFilter } from "@/domain/models/UserStats";

export class FetchUserStatsUseCase {
  constructor(private userStatsService: IUserStatsService) {}

  async execute(filter: UserStatsFilter) {
    return this.userStatsService.getUserStats(filter);
  }
}
