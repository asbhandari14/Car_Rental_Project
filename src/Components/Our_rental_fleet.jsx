import React, { useState } from 'react'
import all_car_product from '../assets/all_car_product'


const Our_rental_fleet = () => {

    const [info, setInfo] = useState(all_car_product[0]);
    const [val, setVal] = useState(0);


  return (
    <>
      <div className="our_rental_fleet_section w-full h-auto flex justify-center items-center">
      <div className="container w-[95%] h-auto flex flex-col justify-start items-center gap-3">
            <h3 className='text-2xl font-bold'>Vehicle Models</h3>
            <h1 className='text-4xl font-bold'>Our rental fleet</h1>
            <p className='text-center w-[45%] text-lg text-gray-400'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        <div className="car_box w-[95%] h-[80%] grid grid-cols-[1.5fr_2fr_1.5fr] gap-5 my-8">
            <div className=" w-full flex flex-col justify-center items-center gap-2" onClick={(event)=>{if(event.target.classList[0] == "li") setInfo(all_car_product[event.target.id - 1]), setVal(event.target.id-1), console.log(event.target.classList[0])}}>
                {
                    all_car_product.map((currElem, index)=>{
                        return(
                            <>
                                <div key={index} id={currElem.id} className=" li w-[90%] bg-[#f2f2f2] text-xl font-semibold py-3 px-4 hover:bg-[#FF4D30] hover:text-white" style={{backgroundColor: val == currElem.id - 1?"#FF4D30":""}}>{currElem.name}</div>
                                {/* {console.log(val, index, currElem.id)} */}
                            </>
                        )
                    })
                }
                
            </div>
            <div className=" w-full h-full flex justify-center items-center">
                <img src={info.image} alt="" />
            </div>
            <div className= "w-full h-full flex flex-col justify-center item-center">
                <div className="border-2 border-gray-400 py-2 flex justify-between items-center px-12">
                    <p>Model</p>
                    <p className='text-center'>{info.model}</p>
                </div>
                <div className="border-2 border-gray-400 py-2 flex justify-between items-center px-12">
                    <p>Mark</p>
                    <p className='text-center'>{info.mark}</p>
                </div>
                <div className="border-2 border-gray-400 py-2 flex justify-between items-center px-12">
                    <p>Year</p>
                    <p className='text-center'>{info.year}</p>
                </div>
                <div className="border-2 border-gray-400 py-2 flex justify-between items-center px-12">
                    <p>Doors</p>
                    <p className='text-center'>{info.doors}</p>
                </div>
                <div className="border-2 border-gray-400 py-2 flex justify-between items-center px-12">
                    <p>AC</p>
                    <p className='text-center'>{info.ac}</p>
                </div>
                <div className="border-2 border-gray-400 py-2 flex justify-between items-center px-12">
                    <p>Transmission</p>
                    <p className='text-center'>{info.transmission}</p>
                </div>
                <div className="border-2 border-gray-400 py-2 flex justify-between items-center px-12">
                    <p>Fuel</p>
                    <p className='text-center'>{info.fuel}</p>
                </div>

                <button className="px-6 py-3 bg-[#FF4D30] flex justify-center items-center gap-2 text-xl font-bold text-white rounded-md mt-4">Register Now</button>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Our_rental_fleet
