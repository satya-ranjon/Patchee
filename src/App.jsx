import Sidebar from "./components/Sidebar";
import Orders from "./components/orders";

const App = () => {
  return (
    <>
      <div className=" flex justify-between items-start">
        <Sidebar />
        <div className="h-screen w-full p-5">
          <h1 className=" font-semibold text-gray-600 text-3xl">Orders : </h1>
          <Orders />
        </div>
      </div>
    </>
  );
};

export default App;
