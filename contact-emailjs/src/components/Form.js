import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import envelope from "../images/mail.svg";
import { AiOutlineMail, AiOutlineUser, AiOutlineBulb } from "react-icons/ai";

function Form() {
  const form = useRef();
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
    setTimeout(() => setOpenModal(false), 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    showModal();
  };

  return (
    <>
      <div className="bg-image relative h-screen flex items-center justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex bg-white w-5/6 lg:w-4/6 mx-auto opacity-90 rounded-lg"
        >
          <div className="flex flex-col w-full sm:w-1/2 m-3">
            <h1 className="font-bold text-2xl text-[#75135dba] mb-3">
              Get in touch
            </h1>
            <label htmlFor="email" className="input-label">
              <AiOutlineUser className="input-icon" />
              <input
                type="text"
                placeholder="Jon Doe"
                className="input"
                name="name"
                autoComplete="off"
              />
            </label>
            <label htmlFor="email" className="input-label">
              <AiOutlineBulb className="input-icon" />
              <input
                type="text"
                className="input"
                autoComplete="off"
                name="subject"
                placeholder="Subject"
              />
            </label>
            <label htmlFor="email" className="input-label">
              <AiOutlineMail className="input-icon" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@example.com"
                className="input"
                autoComplete="off"
                required
              />
            </label>
            <textarea
              className="input h-20 md:h-32 rounded-2xl pl-4 py-2"
              name="message"
              placeholder="Send me a message!"
              required
            />
            <button
              type="submit"
              className="bg-[#F2AB46] rounded-full py-2 text-white font-bold hover:bg-[#75135dba] transition
              duration-300 ease-in-out"
            >
              Send
            </button>
          </div>
          <div className="hidden w-1/2 bg-[#75135dba] rounded-r-lg sm:flex justify-center items-center ">
            <img className="w-2/3 p-5" src={envelope} alt="" />
          </div>
        </form>
        {openModal && (
          <div
            className="bg-white absolute z-100 flex justify-center w-2/3 lg:w-1/3 mx-auto items-center px-6 py-4 border-2
          border-[#F2AB46] rounded-3xl shadow-lg"
          >
            <h1 className="text-sm lg:text-lg text-center font-medium text-gray-800">
              Thank you for your message. I will respond as soon as possible!
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
