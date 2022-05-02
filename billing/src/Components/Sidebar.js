import {
  MdMessage,
  MdNotifications,
  MdOutlineCreditCard,
  MdOutlineHistory,
  MdMiscellaneousServices,
  MdLogout,
} from "react-icons/md";

function Sidebar() {
  return (
    <section className="p-2 lg:p-4 bg-gray-100 rounded-l-3xl flex flex-col justify-between">
      <div>
        <div className="flex flex-col lg:flex-row items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Profile"
            className="rounded-full w-16 h-16 p-1 border border-pink-700"
          />
          <div>
            <h4 className="font-bold text-gray-900">Isobel Young</h4>
            <p className="text-sm text-gray-600">Member since 2021</p>
          </div>
        </div>
        <ul className="pt-6 text-gray-800 hover:text-black">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`flex items-center cursor-pointer border-l-4  py-2 my-2 hover:border-pink-700 transition duration-300 ${
                link.active && "border-pink-700 font-bold"
              }`}
            >
              <span
                className={`ml-2 mr-1 text-2xl ${
                  link.active && "text-pink-700 animate-pulse"
                }`}
              >
                {link.icon}
              </span>
              <span className="hidden md:inline-flex">{link.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="flex items-center text-gray-800 mt-4 hover:text-black 
      transition duration-150 ease-in-out"
      >
        <MdLogout className="text-2xl mr-1" />
        <span className="hidden md:inline-flex"> Sign Out</span>
      </button>
    </section>
  );
}

export default Sidebar;

const navLinks = [
  { id: 1, icon: <MdMessage />, text: "Messages", active: false },
  { id: 2, icon: <MdMiscellaneousServices />, text: "Services", active: false },
  { id: 3, icon: <MdOutlineCreditCard />, text: "Payments", active: true },
  { id: 4, icon: <MdOutlineHistory />, text: "History", active: false },
  { id: 5, icon: <MdNotifications />, text: "Notifications", active: false },
];
