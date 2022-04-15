import Sidebar from "./Components/Sidebar";
import Billing from "./Components/Billing";
import Ad from "./Components/Ad";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex bg-white shadow-xl rounded-lg w-10/12">
        <Sidebar />
        {/* <Billing />
        <Ad /> */}
      </div>
    </div>
  );
}

export default App;
