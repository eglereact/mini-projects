import { MdOutlineCatchingPokemon } from "react-icons/md";

function Header() {
  return (
    <div className="flex items-center justify-between h-20 mx-5">
      <div className="flex items-center space-x-1 cursor-pointer">
        <MdOutlineCatchingPokemon className="text-red-500 text-lg" />
        <h1 className="font-bold uppercase text-gray-800 hidden sm:block">
          Catching Po
        </h1>
      </div>

      <ul className="flex space-x-6 text-gray-500 font-medium hidden md:flex">
        <li className="cursor-pointer hover:text-blue-500">Home</li>
        <li className="text-gray-800 cursor-pointer">Pricing</li>
        <li className="cursor-pointer hover:text-blue-500">Services</li>
        <li className="cursor-pointer hover:text-blue-500">Blog</li>
      </ul>

      <div className="space-x-4">
        <button>Login</button>
        <button
          className="text-white bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-800
        transition duration-300 ease-out"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Header;
