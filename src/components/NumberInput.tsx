import { useEffect, useState } from "react";

type NumberInputProps = {
  id?: string;
  label?: string;
  min?: string;
  max?: string;
  step?: string;
  value?: string;
  memoize?: boolean;
  onChange?: (date: string) => void;
};

const NumberInput: React.FC<NumberInputProps> = ({
  id,
  label,
  min,
  max,
  step,
  value,
  memoize,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState(
    value ||
      (memoize && localStorage.getItem(`selected${id?.toUpperCase}Value`)) ||
      min ||
      "0"
  );

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  useEffect(() => {
    memoize &&
      localStorage.setItem(`selected${id?.toUpperCase}Value`, currentValue);
  }, [memoize, currentValue, id]);

  return (
    <>
      {label && <label htmlFor={id || "number"}>{`${label}:`}</label>}
      <input
        type="number"
        id={id || "number"}
        className="border border-gray-300 p-2 h-10 rounded-xl invalid:border-red-500 invalid:text-red"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleValueChange}
        required
      />
    </>
  );
};

export default NumberInput;
