import React from 'react'
import { FaCar } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaCarSide } from "react-icons/fa";

const Quick_and_Easy_section = () => {
  return (
    <>
        <div className="quick_and_easy_section w-full h-[100vh] flex justify-center items-center">
            <div className="container w-[95%] h-full flex flex-col justify-start items-center gap-8 p-12">
                <h3 className='text-2xl font-bold'>Plan your trip now</h3>
                <h1 className='text-5xl font-bold'>Quick & easy car rental</h1>

                <div className="w-full grid grid-cols-3 my-8">
                    <div className=' flex flex-col justify-center items-center gap-3 py-10 px-8'>
                        <FaCar className='text-5xl text-[#FF4D30]'/>
                        <h3 className='text-2xl font-bold'>Select Car</h3>
                        <p className='text-lg text-center text-gray-600'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-3 p-8'>
                        <TfiHeadphoneAlt className='text-5xl text-[#FF4D30]'/>
                        <h3 className='text-2xl font-bold'>Contact Operator</h3>
                        <p className='text-lg text-center text-gray-600'>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-3 p-8'>
                        <FaCarSide className='text-5xl text-[#FF4D30]'/>
                        <h3 className='text-2xl font-bold'>Let's Drive</h3>
                        <p className='text-lg text-center text-gray-600'>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Quick_and_Easy_section;
