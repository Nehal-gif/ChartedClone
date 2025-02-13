import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B4E] text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-bold">CHARTERED BUS</h2>
          <p className="mt-2 text-sm">EMAIL:</p>
          <p className="text-gray-300">SUPPORT@CHARTEREDBUS.IN</p>
          <p className="mt-2 text-sm">BUSINESS:</p>
          <p className="text-gray-300">0731-4288888 (10AM to 7PM)</p>
          <p className="text-gray-300">9993288888 (24x7)</p>
        </div>
        
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h3 className="font-bold mb-2">QUICK LINK</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>OFFERS</li>
              <li>GALLERY</li>
              <li>BUS HIRE</li>
              <li>TESTIMONIALS</li>
              <li>SCHEDULES</li>
              <li>TERMS & CONDITIONS</li>
              <li>DOWNLOAD APP</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2"> </h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>CONFIRM PHONE BOOKING</li>
              <li>ABOUT US</li>
              <li>CONTACT</li>
              <li>FEEDBACK</li>
              <li>PRIVACY POLICY</li>
              <li>REFUND STATUS</li>
              <li>SITEMAP</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-2">ABOUT US</h3>
          <p className="text-gray-300 text-sm">READ MORE...</p>
          <h3 className="font-bold mt-5 mb-2">SOCIAL</h3>
          <div className="flex space-x-4 text-lg">
            <FaInstagram />
            <FaLinkedin />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-600 pt-5">
        <p>Copyright © 2025 | <span className="text-white">CHARTERED SPEED LIMITED</span>. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <span>SITEMAP</span>
          <span>TERMS</span>
          <span>PRIVACY POLICY</span>
        </div>
      </div>
    </footer>
  );
}
