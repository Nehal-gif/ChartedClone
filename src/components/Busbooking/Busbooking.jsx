import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function BusBooking() {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isReturn, setIsReturn] = useState(false);

  return (
    
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Background Image */} 
      <h1>HELLO SONA</h1>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg')" }}></div>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 mb-20px"></div>
      
      {/* Booking Form */}
      <div className="relative bg-white z-10  shadow-lg rounded-xl p-6 py-3 w-full max-w-4xl mb-70">
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-5 gap-4 ">
          {/* From Dropdown */}
          <select className="p-3 border rounded-md w-full">
            <option>From</option>
            <option>Indore</option>
            <option>Bhopal</option>
          </select>
          
          {/* To Dropdown */}
          <select className="p-3 border rounded-md w-full">
            <option>To</option>
            <option>City X</option>
            <option>City Y</option>
          </select>
          
          {/* Departure Date */}
          <div className="relative">
            <input
              type="date"
              className="p-3 border rounded-md w-full"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
            <FaCalendarAlt className="absolute top-3 right-3 text-gray-400" />
          </div>
          
          {/* Return Date */}
          <div className="relative">
            <input
              type="date"
              className={`p-3 border rounded-md w-full ${!isReturn ? 'opacity-50' : ''}`}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={!isReturn}
            />
            <FaCalendarAlt className="absolute top-3 right-3 text-gray-400" />
          </div>
          
          {/* Search Button */}
          <button className="bg-yellow-500 text-white rounded-md p-3 w-full font-semibold">Search</button>
        </div>
        
        {/* Return Booking Checkbox */}
        <div className="flex items-center mt-3">
          <input type="checkbox" id="return" className="mr-2" onChange={() => setIsReturn(!isReturn)} />
          <label htmlFor="return" className="text-gray-700">Return Booking</label>
        </div>
      </div>
    </div>
  );
}
