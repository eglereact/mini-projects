import Table from "./Table";
import { MdOutlineModeEditOutline, MdWysiwyg } from "react-icons/md";

function Billing() {
  const sum = 8070.5878;

  return (
    <div className="bg-white rounded-3xl w-full ">
      <div className="mx-4 lg:mx-8">
        <h1 className="text-gray-800 font-bold py-5 text-lg ">Payments</h1>
        <div className=" flex flex-col lg:flex-row items-center lg:space-x-6 ">
          <div className="bg-gray-100 mb-2 lg:mb-0 shadow-md rounded-lg flex h-36 items-center w-5/6 sm:w-4/6 lg:w-3/6 justify-center">
            <div className="px-1">
              <h4 className="uppercase text-xs text-gray-600">
                Total Received
              </h4>
              <h1 className="text-3xl font-bold text-gray-800 py-1">
                {(Math.round(sum * 100) / 100).toFixed(2)}
                <span className="text-lg text-gray-600 ml-1">€</span>
              </h1>
              <div className="bg-[#c4f3b8] py-0.5 px-1 rounded-lg">
                <p className="text-xs text-green-600">+10% since last month</p>
              </div>
            </div>
            <div className="p-3">
              <p className="text-blue-800 text-xs font-bold">• Pending</p>
              <h4 className="text-gray-800 font-medium">542,29€</h4>
              <p className="text-orange-600 text-xs font-bold">• In Draft</p>
              <h4 className="text-gray-800 font-medium">00,00€</h4>
            </div>
          </div>
          <div className="bg-gray-100 shadow-md rounded-lg px-2 lg:h-36 w-5/6 sm:w-4/6">
            <div className="flex items-center justify-between py-3">
              <h4 className="text-gray-600 font-bold text-sm md:text-lg">
                quickpay.com/<span className="text-gray-800">publicnote</span>
              </h4>
              <div className="flex text-lg space-x-2">
                <MdOutlineModeEditOutline className="text-blue-800 cursor-pointer hover:text-blue-600" />
                <MdWysiwyg className="text-blue-800 cursor-pointer hover:text-blue-600" />
              </div>
            </div>
            <div>
              <div className="bg-blue-100 rounded-lg p-2 mb-2  text-gray-800">
                <p className="text-sm ">
                  It let's you receive payments on the fly. You can generate
                  invoice or share the payment link.
                </p>
                <h4 className="cursor-pointer text-sm text-blue-800 font-medium">
                  Learn More
                </h4>
              </div>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}

export default Billing;
