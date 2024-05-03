import React, {useState} from "react";
import { FaCarSide } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";




const Book_car=()=>{

    const [user_value, setUser_Value] = useState({
        car : "", 
        pick_up_location : "",
        drop_off_location : "",
        pick_up_date : "",
        drop_off_date : "",
    })

    return(
        <>

        <div className="book_car_section w-full h-[80vh] flex justify-center items-center">
            <div className="container w-[95%] flex flex-col justify-start items-start p-12 shadow-2xl gap-4 ">
                <h1 className="text-2xl font-bold">Book a Car</h1>
                <div className="book_car_inputsection_1 w-full grid grid-cols-3 gap-5 my-1.5">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-start items-center gap-3"> <FaCarSide className="text-xl" /> Select your Car <span className="text-lg font-bold text-[#FF4D30]">*</span></div>
   
                            <select id="cars" name="cars" className="px-3 py-2.5 border border-gray-600 rounded-sm">
                                <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                                <option value="VW Golf6">VW Golf6</option>
                                <option value="Toyota Camry">Toyota Camry</option>
                                <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                                <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                                <option value="VW Passcat CC">VW Passcat CC</option>
                            </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-start items-center gap-3"> <FaLocationDot className="text-xl" /> Pick up <span className="text-lg font-bold text-[#FF4D30]">*</span></div>
                        <select id="pick_up_location" name="cars" className="px-3 py-2.5 border border-gray-600 rounded-sm">
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kolkata">Kolkata </option>
                            <option value="Banglore">Banglore</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-start items-center gap-3"> <FaLocationDot className="text-xl"/>  Drof off <span className="text-lg font-bold text-[#FF4D30]">*</span></div>
                        <select id="drop_off_location" name="cars" className="px-3 py-2.5 border border-gray-600 rounded-sm">
                            <option value="Mumbai">Mumbai</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Kolkata">Kolkata </option>
                            <option value="Banglore">Banglore</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                </div>
                <div className="book_car_inputsection_1 w-full grid grid-cols-3 gap-5 my-1">
                    <div className="flex flex-col gap-3">
                    <div className="flex justify-start items-center gap-3"><SlCalender className="text-xl font-bold" />Pick up* </div>
                        <input id="pick_up_date" type="date" placeholder="Select your car type" className="px-3 py-2.5 border border-gray-600 rounded-sm"/>
                    </div>
                    <div className="flex flex-col gap-3">
                    <div className="flex justify-start items-center gap-3"> <SlCalender className="text-xl font-bold" />Drop-off* </div>
                        <input id="drop_off_date" type="date" placeholder="Select drop off location" className="px-3 py-2.5 border border-gray-600 rounded-sm"/>
                    </div>
                    <div className="flex flex-col py-7">
                        <button
                         onClick={()=>{setUser_Value({...user_value, 
                         drop_off_date: (document.querySelector("#drop_off_date").value),
                         pick_up_date: (document.querySelector("#pick_up_date").value),
                         drop_off_location: (document.querySelector("#drop_off_location").value),
                         pick_up_location: (document.querySelector("#pick_up_location").value),
                         car: (document.querySelector("#cars").value),
                        
                         })
                         console.log(document.querySelector("#pick_up_location").value)
                         }} 
                         className="px-5 py-3 bg-[#FF4D30] text-white text-lg font-semibold rounded-md">Search</button>
                    </div>
                    {console.log(user_value)}
                </div>
            </div>
        </div>


        </>
    )
}

export default Book_car