import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className=" flex justify-between items-start">
      <Sidebar />
      <div className="h-screen w-full p-5">
        <h1 className=" font-semibold text-gray-600 text-3xl">Orders : </h1>
        <table className="">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-4">
                Order ID
              </th>
              <th scope="col" className="px-6 py-4">
                First
              </th>
              <th scope="col" className="px-6 py-4">
                Last
              </th>
              <th scope="col" className="px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200 dark:border-white/10">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Otto</td>
              <td className="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
