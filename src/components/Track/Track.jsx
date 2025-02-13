import { useState } from "react";

export default function Track() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSearch = () => {
    alert(`Tracking Number: ${trackingNumber}`);
  };

  return (
    <div className="w-full   flex items-center justify-center bg-gray-200 p-6">
      <div className=" bg-gray-200 p-8 w-full max-w-3xl flex flex-col md:flex-row items-center gap-6">

        {/* Left Section - Input & Button */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Track Your Shipment</h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Your Tracking Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSearch}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img 
            src="https://www.charteredbus.in/track-6aeec193d0cf86ae2f563e9f97be3925f361c1d7ad38eba064e578afe3dc9e02.jpg" 
            alt="Shipment Box" 
            className="w-32 md:w-40 mix-blend-multiply"
          />
        </div>

      </div>
    </div>
  );
}
