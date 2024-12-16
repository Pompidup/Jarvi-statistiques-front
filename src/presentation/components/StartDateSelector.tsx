import React from "react";

interface StartDateSelectorProps {
  value: Date;
  onChange: (date: Date) => void;
}

export const StartDateSelector: React.FC<StartDateSelectorProps> = ({
  value,
  onChange,
}) => {
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;

    if (!dateValue) {
      onChange(new Date(new Date().setDate(new Date().getDate() - 30)));
      return;
    }

    onChange(new Date(e.target.value));
  };

  return (
    <div className="w-52 mx-auto text-center">
      <label htmlFor="startDate" className="block text-sm font-semibold mb-2">
        Date de départ
      </label>
      <input
        type="date"
        id="startDate"
        value={value.toISOString().split("T")[0]}
        onChange={handleStartDateChange}
        className="mt-1 block w-full"
      />
    </div>
  );
};
