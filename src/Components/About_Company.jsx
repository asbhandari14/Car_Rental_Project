import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { MdCarRental } from "react-icons/md";
import { MdOutlineGarage } from "react-icons/md";




const About_Company = () => {
  return (
    <>
      <div className="About_company_section w-full h-[100vh] flex justify-center items-center my-12">
        <div className="container w-[80%] h-full grid grid-cols-2 py-4 gap-4">
            <div className='w-full h-full flex justify-end items-center '>
                <img src="../public/images/img9.jpg" alt=""/>
            </div>
            <div className=' w-full h-full flex flex-col justify-start items-start gap-2'>
                <h3 className='text-2xl font-semibold'>About Company</h3>
                <h1 className='text-5xl font-bold'>You start the engine and your adventure begins</h1>
                <p className='my-3 text-lg text-gray-600'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                <div className="w-full h-full grid grid-cols-3 gap-5">
                    <div className="flex flex-col justify-center items-start">
                        <FaCarSide className='text-6xl text-[#FF4D30]'/>
                        <div className='flex justify-center items-center gap-4'>
                            <h1 className='text-5xl font-bold'>20</h1>
                            <p className='text-lg text-gray-600 text-center'>Car Type</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <MdCarRental className='text-6xl text-[#FF4D30]'/>
                        <div className='flex justify-center items-center gap-4'>
                            <h1 className='text-5xl font-bold'>85</h1>
                            <p className='text-lg text-gray-600 text-center'>Rental Shop</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <MdOutlineGarage className='text-6xl text-[#FF4D30]'/>
                        <div className='flex justify-center items-center gap-4'>
                            <h1 className='text-5xl font-bold'>75</h1>
                            <p className='text-lg text-gray-600 text-center'>Repair Shop</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About_Company
