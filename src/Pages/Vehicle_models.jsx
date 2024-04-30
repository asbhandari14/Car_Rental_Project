import React from "react";
import all_car_product from "../assets/all_car_product";
import SaveBig from "../Components/SaveBig";

import { CiCircleCheck } from "react-icons/ci";



const Vehicle_model=()=>{
    return(
        <>
            <div className="vehicle_model_section w-full h-auto flex justify-center items-center my-12">
                <div className="container w-[95%] h-auto grid grid-cols-3 place-items-center gap-6">
                    {
                        all_car_product.map((currElem)=>{
                            return(
                                <>
                                    <div className="w-full h-auto flex flex-col justify-center items-center px-5 py-2 border shadow-md">
                                        <img src={currElem.image} alt="" className="w-full" />
                                        <div className="w-full flex justify-between items-start ">
                                            <div className="w-full info flex flex-col justify-start items-start gap-3">
                                                <p>{currElem.name}</p>
                                                <p>{currElem.rating}</p>
                                                <p>{currElem.model}</p>
                                                <p>{currElem.transmission}</p>
                                            </div>
                                            <div className="price w-full flex flex-col justify-start items-end gap-3">
                                                <p>{currElem.price}</p>
                                                <p>per day</p>
                                                <p>{currElem.rating}</p>
                                                <p>{currElem.fuel}</p>
                                            </div>
                                        </div>
                                        <hr className="w-full my-4" />
                                        <button className="px-6 py-3 bg-[#FF4D30] text-white w-[80%] flex justify-center items-center gap-2 text-lg rounded-md">Book Ride <CiCircleCheck  className="text-2xl"/></button>
                                    </div>

                                    
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <SaveBig heading="Book a car by getting in touch with us" number="(123) 456-7869"/>
        

        </>
    )
}

export default Vehicle_model;