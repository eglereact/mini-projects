import Profile from "./Profile";
import { buttons, people } from "./data.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function App() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const arrowStyle = {
    background: "transparent",
    border: 0,
    color: "#3E2B57",
    fontSize: "30px",
  };

  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
      <AiOutlineRight />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <AiOutlineLeft />
    </button>
  );

  return (
    <main className="bg-gray-100 h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center shadow-lg bg-white w-4/6 m-auto rounded-2xl">
        {/*Header part */}
        <h1 className="text-2xl font-bold text-[#3e2b57] py-8">
          Subscriptions
        </h1>
        <p className="text-gray-700 w-1/2 text-center">
          Support these creators by purchasing their monthly subscriptions, and
          get access to premium content.
        </p>
        <div className="flex my-6">
          {buttons.map((btn) => (
            <button
              className="flex text-sm items-center mx-2 hover:bg-gray-300 text-[#3e2b57] bg-gray-200 py-1 px-3 rounded-md"
              key={btn.id}
            >
              {btn.icon} <span className="ml-1">{btn.text}</span>
            </button>
          ))}
        </div>
        {/* Slider part */}
        <div className="w-10/12 mb-8">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            shouldResetAutoplay={false}
            customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}
          >
            {people.map((person) => (
              <Profile key={person.id} person={person} />
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
}

export default App;
