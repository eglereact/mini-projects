function Profile({ person }) {
  const { img, name, job } = person;
  return (
    <div className="flex flex-col items-center justify-center h-60 ">
      <img
        className="rounded-full h-24 w-24 border-2 p-1 border-gray-300"
        alt=""
        src={img}
      />
      <h4 className="text-[#3e2b57] font-bold md:text-lg text-sm">{name}</h4>
      <p className="text-[#3e2b57] font-light text-sm">{job}</p>
      <button
        className="bg-[#3e2b57] text-white py-1 px-3 m-2 rounded-2xl hover:bg-opacity-95 transition
       duration-150 hover:scale-105 shadow-md"
      >
        View Content
      </button>
    </div>
  );
}

export default Profile;
