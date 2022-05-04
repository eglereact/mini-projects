import Header from "./components/Header";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="bg-gray-300 flex justify-center items-center">
      <div className="bg-white rounded-2xl w-11/12 md:w-5/6 my-10">
        <Header />
        <Pricing />
      </div>
    </div>
  );
}

export default App;
