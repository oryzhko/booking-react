import { useEffect, useState } from "react";

type DateInputProps = {
  id?: string;
  label?: string;
  min?: string;
  max?: string;
  value?: string;
  memoize?: boolean;
  onChange?: (date: string) => void;
};

const DateInput: React.FC<DateInputProps> = ({
  id,
  label,
  min,
  max,
  value,
  memoize,
  onChange,
}) => {
  const today = new Date().toISOString().slice(0, 10);
  const [currentDate, setCurrentDate] = useState(
    value || (memoize && localStorage.getItem("selectedDate")) || today
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(event.target.value);
    onChange && onChange(event.target.value);
  };

  useEffect(() => {
    memoize && localStorage.setItem("selectedDate", currentDate);
  }, [memoize, currentDate]);

  return (
    <>
      {label && <label htmlFor={id || "date"}>{`${label}:`}</label>}
      <input
        type="date"
        id={id || "date"}
        className="border border-gray-300 p-2 h-10 rounded-xl invalid:border-red-500"
        min={min}
        max={max}
        value={currentDate}
        onChange={handleDateChange}
        required
      />
    </>
  );
};

export default DateInput;
