import Sidebar from "./Components/Sidebar";
import Billing from "./Components/Billing";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center my-6">
      <div className="flex bg-gray-100 shadow-xl rounded-3xl w-11/12 lg:w-10/12">
        <Sidebar />
        <Billing />
      </div>
    </div>
  );
}

export default App;
