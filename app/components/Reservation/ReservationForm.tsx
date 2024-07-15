import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

const ReservationForm = ()=> {
  return (
    <div className='bg-green-700 p-6 rounded-lg'>
        <GrRestaurant className='w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto' />
        <h1 className="text-center font-bold text-[30px] md:text-[40px] lg:text-[50px] mt-[.5rem] *:text-white">
            رزرو
        </h1>
        <p className="text-[20px] md:text-[25px] text-white font-semibold text-center">
            میز خود را رزرو کنید
        </p>
        {/* inputs */}
        <div className="mt-[2rem]">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center w-[88%] mx-auto
            justify-between space-x-4">
                <select name="people" id="people" className="px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] 
                text-white border-[.2rem] border-gray-100">
                    <option value="1" className="text-black">
                        تک نفره
                    </option>
                    <option value="2" className="text-black">
                        2نفره
                    </option>
                    <option value="3" className="text-black">
                        3نفره
                    </option>
                    <option value="4" className="text-black">
                        4نفره
                    </option>
                </select>
                
                <input type="time" className='px-10 py-2.5 bg-transparent  w-[80%] mx-auto mt-[1rem] rounded-lg outline-none 
                font-bold text-[17px] text-white border-[.2px] border-gray-100' />
                <div className="mt-[2rem] w-[80%] text-center mx-auto ">
                    <button className="px-8 py-3 rounded-lg mb-[3rem]  text-[16px] block w-full bg-blue-950
                    transition-all duration-200 hover:bg-red-600 text-white">
                        رزرو کنید
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReservationForm