import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-start items-center gap-3 ">
      <img className=" w-14 h-14" src={logo} alt="logo" />
      <h1 className="text-xl text-gray-600">E-Shop</h1>
    </div>
  );
};

export default Logo;
