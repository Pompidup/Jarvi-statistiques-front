import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";
import { UserStats } from "@/domain/models/UserStats";
import { format, getWeek } from "date-fns";

interface StatsChartProps {
  stats: UserStats[];
  periodType: "month" | "week"; // Période sélectionnée
}

export const StatsChart: React.FC<StatsChartProps> = ({
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

  // Préparer les données pour le graphique avec un formatage de la période
  const formattedStats = stats.map((stat) => ({
    period: formatPeriod(new Date(stat.period)), // Formater la période
    responseRate: stat.responseRate,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={formattedStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="period" />
        <YAxis
          label={{
            value: "Taux de réponse (%)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
        <Bar dataKey="responseRate" fill="#8884d8" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
