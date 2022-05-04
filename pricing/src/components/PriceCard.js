import { BsCheck } from "react-icons/bs";

function PriceCard({ card, toggle }) {
  return (
    <div className="w-full mb-2 lg:w-1/3 bg-gray-50 rounded-lg p-4">
      <h1 className="text-3xl font-bold text-blue-500">
        $
        {toggle
          ? card.priceMonthly
          : Math.floor(card.priceMonthly * 12 - (card.priceMonthly * 12) / 10)}
        <span className="text-sm font-normal text-gray-500">
          {toggle ? "/month" : "/year"}
        </span>
      </h1>
      {!toggle && (
        <p className="text-xs bg-blue-100 inline px-2 py-0.5 rounded-full text-gray-500">
          Save 10%
        </p>
      )}
      <h1 className="capitalize text-medium text-2xl py-2">{card.status}</h1>
      <p className="text-sm text-gray-500 ">{card.text}</p>
      <hr className="my-5" />
      {card.bonuses.map((bon, index) => (
        <div
          key={index}
          className="flex items-center space-x-1 mb-4 text-gray-800 font-medium"
        >
          <BsCheck className="text-green-600 bg-green-100 rounded-full" />
          <p>{bon}</p>
        </div>
      ))}
      <button className="relative w-full px-5 py-3 overflow-hidden font-medium text-blue-500 bg-gray-100 border border-gray-100 rounded-full shadow-inner group">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-500 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-500 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-500 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-500 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-500 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          {card.button}
        </span>
      </button>
    </div>
  );
}

export default PriceCard;
