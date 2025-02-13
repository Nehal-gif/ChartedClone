import React from 'react';
import logo from'./logo/logo.png'
import{Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <>
          <div className='flex justify-around px-4 py-4'>
                      <div>
                        {/*logo*/}
                        <div>
                          <img src={logo} alt='logo' className='w-44'/>
                        </div>

        



                      </div>

                        <div className='w-[50%] mt-3'>

                                  {/*items*/}

                             <div >
                                <ul className='flex justify-evenly  align-middle items-center'>
                                    <li className='text-gray-700 hover:text-indigo-800 hover:font-semibold'><Link to= '/'>Home</Link></li>
                                    <li className='text-gray-700 hover:text-indigo-800 hover:font-semibold'><Link to= '/ManageBooking'>Manage Booking</Link></li>
                                    <li className='text-gray-700 hover:text-indigo-800 hover:font-semibold'><Link to= '/BusHireForm'>Bus Hire</Link></li>
                                    <li className='text-gray-700 hover:text-indigo-800 hover:font-semibold'><Link to= '/Track'>Track Cargo</Link></li>
                                    <li className='bg-yellow-500 px-2 py-1 rounded-sm'><Link to= '/Login'>Sign in</Link></li>
                                </ul>
                             </div>



                        </div>













          </div>
      
      
      
      
      
      
      
      
      
      
      
      
      </>
    </div>
  )
}

export default Header
