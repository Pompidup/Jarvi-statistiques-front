import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { UserStats } from "@/domain/models/UserStats";
import { format, getWeek } from "date-fns";
import { HiArrowUp, HiArrowDown, HiArrowRight } from "react-icons/hi";

interface StatsTableProps {
  stats: UserStats[];
  periodType: "month" | "week"; // Période sélectionnée
}

export const StatsTable: React.FC<StatsTableProps> = ({
  stats,
  periodType,
}) => {
  // Fonction pour formater la période en fonction du type
  const formatPeriod = (date: Date): string => {
    if (periodType === "month") {
      return format(date, "MM/yyyy"); // Mois/Année
    }
    const weekNumber = getWeek(date); // Numéro de la semaine
    const year = date.getFullYear();
    return `S${weekNumber} ${year}`; // Semaine (Numéro de semaine + Année)
  };

  // Fonction pour comparer les valeurs avec la période précédente
  const getProgression = (
    current: number,
    previous: number
  ): "up" | "down" | "equal" => {
    if (previous === 0) return current > 0 ? "up" : "equal"; // Si aucune valeur précédente, on considère comme "up" ou "equal"
    return current > previous ? "up" : current < previous ? "down" : "equal";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Période</TableHead>
          <TableHead className="text-right">Messages totaux</TableHead>
          <TableHead className="text-right">Messages répondus</TableHead>
          <TableHead className="text-right">Taux de réponse (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stats.map((stat, index) => {
          const previousStat = index > 0 ? stats[index - 1] : null; // Récupérer la période précédente (si existante)

          return (
            <TableRow key={index}>
              <TableCell>{formatPeriod(new Date(stat.period))}</TableCell>

              {/* Messages totaux */}
              <TableCell className="text-right">
                <span className="flex items-center justify-end">
                  {stat.totalMessages}
                  {previousStat && (
                    <span className="ml-2 relative group">
                      <span
                        className={`${
                          getProgression(
                            stat.totalMessages,
                            previousStat.totalMessages
                          ) === "up"
                            ? "text-green-500"
                            : getProgression(
                                stat.totalMessages,
                                previousStat.totalMessages
                              ) === "down"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {getProgression(
                          stat.totalMessages,
                          previousStat.totalMessages
                        ) === "up" ? (
                          <HiArrowUp />
                        ) : getProgression(
                            stat.totalMessages,
                            previousStat.totalMessages
                          ) === "down" ? (
                          <HiArrowDown />
                        ) : (
                          <HiArrowRight />
                        )}
                      </span>
                      {/* Tooltip */}
                      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block text-sm text-gray-500 p-2 rounded bg-gray-100 shadow-lg">
                        {getProgression(
                          stat.totalMessages,
                          previousStat.totalMessages
                        ) === "up"
                          ? "En progression"
                          : getProgression(
                              stat.totalMessages,
                              previousStat.totalMessages
                            ) === "down"
                          ? "En baisse"
                          : "Identique"}
                      </span>
                    </span>
                  )}
                </span>
              </TableCell>

              {/* Messages répondus */}
              <TableCell className="text-right">
                <span className="flex items-center justify-end">
                  {stat.repliedMessages}
                  {previousStat && (
                    <span className="ml-2 relative group">
                      <span
                        className={`${
                          getProgression(
                            stat.repliedMessages,
                            previousStat.repliedMessages
                          ) === "up"
                            ? "text-green-500"
                            : getProgression(
                                stat.repliedMessages,
                                previousStat.repliedMessages
                              ) === "down"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {getProgression(
                          stat.repliedMessages,
                          previousStat.repliedMessages
                        ) === "up" ? (
                          <HiArrowUp />
                        ) : getProgression(
                            stat.repliedMessages,
                            previousStat.repliedMessages
                          ) === "down" ? (
                          <HiArrowDown />
                        ) : (
                          <HiArrowRight />
                        )}
                      </span>
                      {/* Tooltip */}
                      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block text-sm text-gray-500 p-2 rounded bg-gray-100 shadow-lg">
                        {getProgression(
                          stat.repliedMessages,
                          previousStat.repliedMessages
                        ) === "up"
                          ? "En progression"
                          : getProgression(
                              stat.repliedMessages,
                              previousStat.repliedMessages
                            ) === "down"
                          ? "En baisse"
                          : "Identique"}
                      </span>
                    </span>
                  )}
                </span>
              </TableCell>

              {/* Taux de réponse */}
              <TableCell className="text-right">
                <span className="flex items-center justify-end">
                  {stat.responseRate.toFixed(2)}%
                  {previousStat && (
                    <span className="ml-2 relative group">
                      <span
                        className={`${
                          getProgression(
                            stat.responseRate,
                            previousStat.responseRate
                          ) === "up"
                            ? "text-green-500"
                            : getProgression(
                                stat.responseRate,
                                previousStat.responseRate
                              ) === "down"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {getProgression(
                          stat.responseRate,
                          previousStat.responseRate
                        ) === "up" ? (
                          <HiArrowUp />
                        ) : getProgression(
                            stat.responseRate,
                            previousStat.responseRate
                          ) === "down" ? (
                          <HiArrowDown />
                        ) : (
                          <HiArrowRight />
                        )}
                      </span>
                      {/* Tooltip */}
                      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block text-sm text-gray-500 p-2 rounded bg-gray-100 shadow-lg">
                        {getProgression(
                          stat.responseRate,
                          previousStat.responseRate
                        ) === "up"
                          ? "En progression"
                          : getProgression(
                              stat.responseRate,
                              previousStat.responseRate
                            ) === "down"
                          ? "En baisse"
                          : "Identique"}
                      </span>
                    </span>
                  )}
                </span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
