import React, { useState } from "react";
import { UserStatsFilter } from "@/domain/models/UserStats";
import { StatsPeriodSelector } from "./StatsPeriodSelector";
import { MessageTypeSelector } from "./MessageTypeSelector";
import { StatsTable } from "./StatsTable";
import { StatsChart } from "./StatsChart";
import { useUserStats } from "../hooks/useUserStats";
import { MessageType } from "@/domain/models/MessageType";
import { StartDateSelector } from "./StartDateSelector";
import { EndDateSelector } from "./EndDateSelector";

interface UserStatsDashboardProps {
  userId: string;
}

export const UserStatsDashboard: React.FC<UserStatsDashboardProps> = ({
  userId,
}) => {
  const [filter, setFilter] = useState<UserStatsFilter>({
    userId,
    messageType: MessageType.LINKEDIN_MESSAGE_SENT,
    periodType: "month",
    startDate: new Date(new Date().setDate(new Date().getDate() - 30)),
    endDate: new Date(),
  });

  const { loading, error, stats } = useUserStats(filter);

  const handleStartDateChange = (date: Date) => {
    setFilter((prev) => ({
      ...prev,
      startDate: date,
    }));
  };

  const handleEndDateChange = (date: Date) => {
    setFilter((prev) => ({
      ...prev,
      endDate: date,
    }));
  };

  return (
    <div className="p-8">
      {/* Titre */}
      <div className="flex items-center mb-6">
        <img
          src="/assets/jarvi_icon.svg"
          alt="Jarvi Icon"
          className="w-12 h-12 mr-4"
        />
        <h1 className="text-3xl font-bold">Page statistiques</h1>
      </div>

      {/* Bandeau avec les filtres */}
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center space-x-4">
          <StatsPeriodSelector
            value={filter.periodType}
            onChange={(periodType) =>
              setFilter((prev) => ({ ...prev, periodType }))
            }
          />
          <MessageTypeSelector
            value={filter.messageType}
            onChange={(messageType) =>
              setFilter((prev) => ({ ...prev, messageType }))
            }
          />
          <StartDateSelector
            value={filter.startDate}
            onChange={handleStartDateChange}
          />
          <EndDateSelector
            value={filter.endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>

      <div className="mb-6">
        {loading && <p>Chargement...</p>}
        {error && <p>Erreur : {error.message}</p>}

        {!loading && !error && stats?.length === 0 && (
          <p className="text-center text-gray-500">
            Aucune donnée disponible pour cette période. Veuillez sélectionner
            une autre période.
          </p>
        )}

        {stats && stats.length > 0 && (
          <>
            <StatsTable stats={stats} periodType={filter.periodType} />
            <StatsChart stats={stats} periodType={filter.periodType} />
          </>
        )}
      </div>
    </div>
  );
};
