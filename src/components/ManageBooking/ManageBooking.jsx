import React from "react";
import Bus from "./Bus/bus.png";

const ManageBooking = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-200 px-20 py-10 w-full">
      {/* Form Section */}
      <div className="bg-white mix-blend-multiply  px-8  w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Manage Booking</h2>
        <input
          type="text"
          placeholder="Ticket Number"
          className="w-full px-4 py-1 bg-white border border-gray-400  mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="w-full  bg-white px-4 py-1 border border-gray-400  mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button className="w-40 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition py-1 px-1 p-6">
          Submit
        </button>
        <p className="text-gray-600 text-sm mt-4">
          Please enter the details for Print, Update, Cancel and Pre/Postpone Ticket.
        </p>
      </div>
      
      {/* Image Section */}
      <div className="flex justify-center mt-10 lg:mt-0">
        <img src={Bus} alt="Bus" className="max-w-xl w-full object-contain" />
      </div>
    </div>
  );
};

export default ManageBooking;

