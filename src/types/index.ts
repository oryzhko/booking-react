export interface InputElementProps {
  id?: string;
  label?: string;
  value?: string;
  memoize?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};