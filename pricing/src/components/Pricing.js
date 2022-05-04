import { useState } from "react";
import data from "../data";
import PriceCard from "./PriceCard";

function Pricing() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="my-10">
      <div className="flex flex-col items-center w-11/12 lg:w-1/2 mx-auto text-center space-y-4">
        <h1 className="text-gray-800 text-3xl ">
          Our <strong>plans</strong> for your <strong>strategies.</strong>
        </h1>
        <p className="text-sm text-gray-500 ">
          See below our main three plans for your bussiness for you statup or
          agency. It starts from here. You can teach yourself what you really
          like.
        </p>
        <div className="flex items-center">
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-blue-500 mr-3">
            Bill monthly
          </span>
          <label
            htmlFor="default-toggle"
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="default-toggle"
              className="sr-only peer "
            />
            <div
              onClick={() => setToggle(!toggle)}
              className="w-11 h-6 bg-gray-800 rounded-full peer peer-checked:after:translate-x-full
             peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
              after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
              after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Bill Annually
            </span>
          </label>
        </div>
      </div>

      <div className="mx-5 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:mx-20 lg:space-x-10 my-10">
        {data.map((card) => (
          <PriceCard key={card.id} card={card} toggle={toggle} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
