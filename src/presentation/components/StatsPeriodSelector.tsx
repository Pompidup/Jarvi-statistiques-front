import React from "react";

interface StatsPeriodSelectorProps {
  value: "week" | "month";
  onChange: (value: "week" | "month") => void;
}

export const StatsPeriodSelector: React.FC<StatsPeriodSelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="w-72 mx-auto text-center">
      <label htmlFor="periodicity" className="block text-sm font-semibold mb-2">
        Périodicité
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as "week" | "month")}
        className="w-full h-10 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <option value="month">Mois</option>
        <option value="week">Semaine</option>
      </select>
    </div>
  );
};
