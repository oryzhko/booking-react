import SearchForm from "./components/SearchForm";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-5 mx-10">Time Booking</h1>
      <div className="flex flex-col">
        <SearchForm />
      </div>
    </div>
  );
};

export default App;
