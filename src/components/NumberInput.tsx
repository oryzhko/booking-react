import { useEffect, useState } from "react";
import Label from "./Label";

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
    (memoize && localStorage.getItem(`${id}Value`)) || value || min || "0"
  );

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  useEffect(() => {
    memoize && localStorage.setItem(`${id}Value`, currentValue);
  }, [memoize, currentValue, id]);

  return (
    <>
      {label && <Label htmlFor={id} text={label} />}
      <input
        type="number"
        id={id}
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
