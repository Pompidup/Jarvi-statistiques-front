import { useState, useEffect } from "react";
import { UserStats, UserStatsFilter } from "@/domain/models/UserStats";
import { GraphQLUserStatsRepository } from "@/infrastructure/repositories/GraphQLUserStatsRepository";
import { UserStatsService } from "@/application/services/UserStatsService";

export const useUserStats = (filter: UserStatsFilter) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [stats, setStats] = useState<UserStats[] | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const repository = new GraphQLUserStatsRepository();
        const service = new UserStatsService(repository);
        const userStats = await service.getUserStats(filter);
        setStats(userStats);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Une erreur est survenue")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [filter]);

  return { loading, error, stats };
};
