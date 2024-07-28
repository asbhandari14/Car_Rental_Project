import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { FaHandHoldingDollar } from "react-icons/fa6";



const BestValueDeal = () => {
  return (
    <>
      <div className="bestvalue_deal_img_section w-full h-auto  flex justify-center items-center my-6">
        <div className="container w-[95%] h-auto flex justify-center items-center">
            <img src="../images/img8.png" alt="car_img" className='w-full h-auto' />
        </div>
      </div>


      <div className="bestvalue_deal_info_section w-full h-auto flex justify-center items-center">
        <div className="container w-[95%] h-auto grid grid-cols-[2fr_1.5fr] p-12">
            <div className=' flex flex-col justify-start items-start p-8 gap-4'>
                <h3 className='text-2xl font-bold'>Why Choose Us</h3>
                <h1 className='text-5xl font-bold'>Best valued deals you will ever find</h1>
                <p className='text-lg mt-2 text-gray-400'>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                <button className="px-6 py-3 bg-red-600 text-white flex justify-center items-center gap-2 text-lg rounded-md mt-4">Find Detail <FaAngleRight /></button>
            </div>
            <div className='flex flex-col justify-start items-start p-8 gap-4'>
                <div className='flex justify-center items-center gap-6'> 
                    <FaCarSide className='text-9xl text-[#FF4D30]'/>
                    <div className="flex flex-col gap-2">
                        <h1 className='text-xl font-bold'>Cross Country Drive</h1> 
                        <p className='text-gray-400'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-6'> 
                    <BiDollarCircle className='text-9xl text-[#FF4D30]'/>
                    <div className="flex flex-col gap-2">
                        <h1 className='text-xl font-bold'>All Inclusive Pricing</h1> 
                        <p className='text-gray-400'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-6'> 
                    <FaHandHoldingDollar className='text-9xl text-[#FF4D30]'/>
                    <div className="flex flex-col gap-2">
                        <h1 className='text-xl font-bold'>No Hidden Charges</h1> 
                        <p className='text-gray-400'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BestValueDeal
