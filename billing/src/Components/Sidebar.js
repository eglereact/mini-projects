function Sidebar() {
  return (
    <section className="p-4 bg-gray-100 rounded-tl-lg">
      <div>
        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Profile Image"
            className="rounded-full w-16 h-16 p-1 border border-pink-700"
          />
          <div>
            <h4 className="font-bold text-gray-900">Isobel Young</h4>
            <p className="text-sm text-gray-600">Member since 2021</p>
          </div>
        </div>
        <ul>
          <li>billing</li>
        </ul>
      </div>
      <div>sign out</div>
    </section>
  );
}

export default Sidebar;
