import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";

const Hero_section=()=>{
    return(
        <>

        <div className="hero_section w-full h-auto  flex justify-center items-start py-12 ">
            <div className="container w-[95%] h-auto grid grid-cols-[1.7fr_2fr] place-items-start">
                <div className="container_info  w-full h-full flex flex-col justify-center items-start gap-4">
                    <h3 className="text-xl font-bold"> Plan your Trip now </h3>
                    <h1 className="text-6xl font-bold"> Save <span className="text-[#FF4D30]"> big </span> with our car rental </h1>
                    <p className="text-lg text-gray-600">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>

                    <div className="info_Btn my-4 flex gap-6 text-white font-bold">
                        <button className="px-6 py-3 bg-[#FF4D30] flex justify-center items-center gap-2 text-lg rounded-md">Book Ride <CiCircleCheck  className="text-2xl"/></button>
                        <button className="px-6 py-3 bg-black flex justify-center items-center gap-2 text-lg rounded-md ">Learn More <FaAngleRight /></button>
                    </div>
                </div>
                <div className="container_icon w-[100%] h-full">
                    <img src="/images/img7.png" alt="" className="w-full h-auto bg-transparent" />
                </div>
            </div>
        </div>


        </>
    )
}

export default Hero_section;