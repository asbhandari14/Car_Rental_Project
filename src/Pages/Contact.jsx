import React from "react";
import SaveBig from "../Components/SaveBig";
import { FaMessage } from "react-icons/fa6";



const Contact=()=>{
    return(
        <>
        <div className="contact_section w-full h-auto flex justify-center items-center my-12">
            <div className="container w-[95%] h-auto grid grid-cols-[1.5fr_2fr]">
                <div className=" flex flex-col justify-start items-start gap-6 p-8">
                    <h1 className="text-4xl font-bold">Need additional information ?</h1>
                    <p className="text-lg text-gray-400">A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                    <p className="font-semibold">(123) 456 7890</p>
                    <p className="font-semibold">car-rental@gmail.com</p>
                    <p className="font-semibold">Ghaziabad, Noida</p>
                </div>
                <div className=" w-full h-full flex flex-col justify-start items-start p-8">
                        <label htmlFor="name" className="text-lg font-semibold my-2">Full Name * </label>
                        <input type="text" className="w-full py-3 px-4 rounded-md bg-[#f2f2f2] mb-3" placeholder="E.g - John Doe" id="name"  />
                        <label htmlFor="name" className="text-lg font-semibold my-2">Email * </label>
                        <input type="text" className="w-full py-3 px-4 rounded-md bg-[#f2f2f2] mb-3" placeholder="E.g - John Doe" id="name"  />
                        <label htmlFor="name" className="text-lg font-semibold my-2">Message * </label>
                        <textarea type="text" className="w-full h-[30%] py-3 px-4 rounded-md bg-[#f2f2f2] mb-4" placeholder="E.g - John Doe" id="name"  />

                        <button className="w-full px-6 py-3 bg-[#FF4D30] flex justify-center items-center gap-4 text-lg text-white font-semibold rounded-md"> Send Message </button>
                  
                </div>
            </div>
        </div>

        <SaveBig heading="Book a car by getting in touch with us" number="(123) 456-7869"/>

        </>
    )
}

export default Contact;