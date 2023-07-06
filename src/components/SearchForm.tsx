import Button from "./Button";
import DateInput from "./DateInput";
import NumberInput from "./NumberInput";

type SearchFormProps = {
  date?: string;
  duration?: string;
};

const SearchForm: React.FC<SearchFormProps> = ({ date, duration }) => {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="container max-w-lg bg-white bg-opacity-60 rounded-xl shadow-md p-10 mx-10  border-t-4 border-indigo-500">
      <div className="flex flex-row items-end space-x-2">
        <div className="basis-2">
          <DateInput
            id="bookingDate"
            label="Date"
            value={date}
            min={today}
            memoize={true}
          />
        </div>
        <div className="basis-2">
          <NumberInput
            id="duration"
            label="Duration (in minutes)"
            value={duration}
            min="15"
            step="15"
            memoize={true}
          />
        </div>
        <div className="basis-1">
          <Button text="Search" />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
