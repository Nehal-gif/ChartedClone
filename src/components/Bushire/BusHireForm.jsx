import { useState } from "react";

export default function BusHireForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    busType: "AC",
    seats: "",
    remarks: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white min-h-screen flex items-center justify-center  p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800">Bus Hire</h2>
        
        {/* Contact Details */}
        <h3 className="mt-4 text-lg font-semibold text-blue-900">Contact Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <input type="text" name="name" placeholder="Enter Your Name" className="p-3 border rounded-md w-full" required onChange={handleChange} />
          <input type="email" name="email" placeholder="E-mail" className="p-3 border rounded-md w-full" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone No." className="p-3 border rounded-md w-full" required onChange={handleChange} />
        </div>

        {/* Travel Details */}
        <h3 className="mt-4 text-lg font-semibold text-blue-900">Travel Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <input type="text" name="busHire" value="Bus Hire" disabled className="p-3 border rounded-md w-full bg-gray-200" />
          <input type="text" name="from" placeholder="From" className="p-3 border rounded-md w-full" required onChange={handleChange} />
          <input type="text" name="to" placeholder="To" className="p-3 border rounded-md w-full" required onChange={handleChange} />
        </div>

        {/* Bus Type */}
        <h3 className="mt-4 text-lg font-semibold text-blue-900">Bus Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <select name="busType" className="p-3 border rounded-md w-full" onChange={handleChange}>
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </select>
          <input type="number" name="seats" placeholder="No. of Seats" className="p-3 border rounded-md w-full" required onChange={handleChange} />
        </div>

        {/* Remarks */}
        <h3 className="mt-4 text-lg font-semibold text-blue-900">Remarks</h3>
        <textarea name="remarks" placeholder="Enter Your Message" className="p-3 border rounded-md w-full h-24" onChange={handleChange}></textarea>
        
        {/* Submit Button */}
        <button className="bg-blue-600 text-white font-semibold rounded-md p-3 w-full mt-4">Submit</button>
      </div>
    </div>
  );
}
