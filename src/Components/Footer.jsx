import React from 'react'




const Footer = () => {
  return (
    <>
      <div className="footer_section w-full h-auto flex justify-center items-center bg-slate-100">
        <div className="container w-[95%] h-auto grid grid-cols-4 py-12 px-4 gap-8">
            <div className='w-full flex flex-col justify-start items-start gap-3 text-lg'>
                <h1 className='text-2xl font-bold'>CAR Rental</h1>
                <p className='text-gray-600'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
            </div>
            <div className='w-full   flex flex-col justify-start items-start gap-3 text-lg'>
                <h1 className='text-2xl font-bold'>COMPANY</h1>
                <p>New York</p>
                <p>Careers</p>
                <p>Mobile</p>
                <p>Blog</p>
                <p>How we work</p>
            </div>
            <div className='w-full  flex flex-col justify-start items-start gap-3 text-lg'>
                <h1 className='text-2xl font-bold'>WORKING HOURS</h1>
                <p>Mon - Fri: 9:00AM - 9:00PM</p>
                <p>Sat: 9:00AM - 19:00PM</p>
                <p>Sun: Closed</p>
            </div>
            <div className='w-full  flex flex-col justify-start items-start gap-2 text-lg'>
                <h1 className='text-2xl font-bold'>SUBSCRIPTION</h1>
                <p>Subscribe your Email address for latest news & updates.</p>
                <input type="email" className='w-full h-[17%] border mt-3 px-3' placeholder="Enter Email Address" />
                <button className="w-full py-3 bg-[#FF4D30] flex justify-center items-center text-lg text-white font-semibold rounded-md">Book Ride</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
