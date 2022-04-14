function App() {
  return (
    <main className="flex flex-col sm:flex-row justify-center items-center min-h-screen lg:w-2/3  mx-auto">
      <div className="mx-10 sm:w-[300px]  my-5 sm:my-0 sm:m-4 bg-purple-900/90 text-white rounded-lg p-4">
        <h1 className=" text-3xl font-bold">Get In Touch</h1>
        <p>
          Feel free to contact me on your queries and I will contact you as soon
          as possible.
        </p>
      </div>
      <div className="flex items-center justify-center mx-10 sm:mr-10">
        <div
          className="bg-purple-900/90 h-[400px] rounded-tl-lg w-[60px] rounded-bl-lg flex overflow-hidden
         whitespace-nowrap items-center justify-center "
        >
          <h4 className="text-white text-2xl -rotate-90 ">Contact Info</h4>
        </div>
        <div className="bg-white h-[500px] flex flex-col rounded-lg w-full py-6 px-10 my-2">
          <h1 className="text-2xl text-gray-800 mb-6">Send us a Message</h1>
          <div className="flex flex-col items-center  w-full">
            <input
              type="text"
              placeholder="Name"
              className="border-b w-full border-gray-300 outline-none mb-8"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b w-full border-gray-300 outline-none mb-8"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="border-b w-full border-gray-300 outline-none mb-8"
            />
          </div>
          <p className="text-gray-800 text-lg mb-2">
            Preferred code of Communication:
          </p>
          <div className="flex items-center mb-6">
            <input type="radio" id="email" name="drone" value="email" />
            <label htmlFor="email" className="mr-4 ml-1 text-lg text-gray-800">
              Email
            </label>
            <input type="radio" id="phone" name="drone" value="phone" />
            <label htmlFor="phone" className="mr-4 ml-1 text-lg text-gray-800">
              Phone
            </label>
          </div>
          <p className="text-lg text-gray-800">Message</p>
          <textarea className="outline-none border-b w-full border-gray-300 mb-4" />
          <button className="relative  inline-flex items-center justify-center p-4 px-5 py-5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">Button Text</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
