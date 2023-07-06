type ButtonProps = {
  className?: string;
  text: string;
  onClick?: () => void;
};

const Button = ({ className, text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        className ||
        "bg-indigo-500 hover:bg-indigo-700 active:scale-95 text-white mx-5 mb-0 p-2 h-10 rounded-xl"
      }
    >
      {text}
    </button>
  );
};

export default Button;
