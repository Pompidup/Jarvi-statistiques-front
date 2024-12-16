import React from "react";

interface EndDateSelectorProps {
  value: Date;
  onChange: (date: Date) => void;
}

export const EndDateSelector: React.FC<EndDateSelectorProps> = ({
  value,
  onChange,
}) => {
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;

    if (!dateValue) {
      onChange(new Date());
      return;
    }

    onChange(new Date(e.target.value));
  };

  return (
    <div className="w-52 mx-auto text-center">
      <label htmlFor="endDate" className="block text-sm font-semibold mb-2">
        Date de fin
      </label>
      <input
        type="date"
        id="endDate"
        value={value.toISOString().split("T")[0]}
        onChange={handleEndDateChange}
        className="mt-1 block w-full"
      />
    </div>
  );
};
