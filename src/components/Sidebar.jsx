import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="h-screen w-72 py-10 border-r-2">
      <div className="flex justify-start items-center gap-3 px-5">
        <img className=" w-14 h-14" src={logo} alt="logo" />
        <h1 className="text-xl text-gray-600">E-Shop</h1>
      </div>
      <div className="mt-10 text-lg font-semibold text-gray-600">
        <ul>
          <li className="py-2 px-5 bg-blue-50 cursor-pointer flex justify-start items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span>Products</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
