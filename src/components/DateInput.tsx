import { useEffect, useState } from "react";
import { InputElementProps } from "../types";
import Label from "./Label";

interface DateInputProps extends InputElementProps {
  min?: string;
  max?: string;
}

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
    (memoize && localStorage.getItem(`${id}Value`)) || value || today
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(event.target.value);
    onChange && onChange(event);
  };

  useEffect(() => {
    memoize && localStorage.setItem(`${id}Value`, currentDate);
  }, [memoize, currentDate, id]);

  return (
    <>
      {label && <Label htmlFor={id} text={label} />}
      <input
        type="date"
        id={id}
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
