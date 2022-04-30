import { MdAdd, MdSearch } from "react-icons/md";
import data from "../data.js";

function Table() {
  return (
    <div className="my-10">
      {/* Add */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-bold text-gray-800">Invoices</h4>
          <p className="text-sm text-gray-600">
            List of all your recent transactions.
          </p>
        </div>
        <div>
          <button class="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-medium tracking-tighter text-white bg-blue-800 rounded-lg group">
            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blue-800"></span>
            <span class="relative uppercase flex items-center">
              <MdAdd />
              New invoice
            </span>
          </button>
        </div>
      </div>
      {/* search */}
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-1  rounded w-full border border-gray-200 my-4">
          <MdSearch className="text-xl ml-1 text-gray-800" />
          <input
            type="text"
            placeholder="Search an Invoice"
            className="inline-flex h-8 bg-transparent text-sm focus:outline-none placeholder-black/70
          flex-grow"
          />
        </div>
        <select className="border border-gray-200 h-8 rounded px-2 focus:outline-none">
          <option>Pending</option>
          <option>Paid</option>
          <option>Draft</option>
        </select>
      </div>
      {/* table */}
      <div>
        <div className="w-full">
          <div className="flex px-2 text-xs">
            <p className="w-1/6 ">No.</p>
            <p className="w-1/6 ">Date</p>
            <p className="w-2/6 ">Client</p>
            <p className="w-1/6 ">Amount</p>
            <p className="w-1/6 ">Status</p>
          </div>
          {data.map((invoice) => (
            <div
              className="border border-gray-200 bg-white rounded-lg px-2 py-3 shadow-md my-2 flex items-center
            text-gray-800 hover:shadow-lg hover:bg-gray-100"
            >
              <p className="w-1/6 font-medium">{invoice.nr}</p>
              <p className="w-1/6 ">{invoice.date}</p>
              <p className="w-2/6 ">{invoice.client}</p>
              <p className="w-1/6">€{invoice.amount.toFixed(2)}</p>
              <p
                className={`w-1/6 capitalize font-medium text-sm text-center rounded-lg ${
                  invoice.status === "draft" && "text-orange-600 bg-orange-100"
                } ${
                  invoice.status === "pending" && "text-blue-600 bg-blue-100"
                } ${
                  invoice.status === "paid" && "text-green-600 bg-green-100"
                }`}
              >
                {invoice.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
