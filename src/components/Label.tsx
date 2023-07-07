type LabelProps = {
  htmlFor?: string;
  text: string;
};

const Label: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return <label htmlFor={htmlFor}>{`${text}:`}</label>;
};

export default Label;
