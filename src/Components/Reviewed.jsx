import React from 'react'

const Reviewed = () => {
  return (
    <>

        <div className="review_section w-full h-[100vh] flex justify-center items-center my-8">
            <div className="container w-[80%] h-full flex flex-col justify-center items-center p-8 gap-4">
                <h3 className='text-2xl font-bold'>Reviewed by People</h3>
                <h1 className='text-4xl font-bold'>Client's Testimonials</h1>
                <p className='text-lg my-4 text-gray-400 text-center'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>

                <div className=" w-full h-full grid grid-cols-2 text-xl font-semibold gap-8">
                  <div className=" w-full h-full flex flex-col justify-start items-start p-12  shadow-lg">
                      <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                      <div className="w-full h-full flex flex-row justify-between items-center pt-6">

                        <div className='flex justify-start items-center gap-4'>
                          <img src="../images/human_img1.webp" alt="" className='h-[4rem] rounded-[50%]' />
                          <div className="flex flex-col">
                              <h3 className='font-semibold'>Human1 </h3>
                              <p className='text-sm text-gray-600'>Norway</p>
                          </div>
                        </div>
                        <p className='text-5xl text-[#FF4D30]'>"</p>
                      </div>
                  </div>

      
                  <div className=" w-full h-full flex flex-col justify-start items-start p-12 shadow-lg">
                      <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
                      <div className="w-full h-full flex flex-row justify-between items-center pt-6">

                        <div className='flex justify-start items-center gap-4'>
                          <img src="../images/human_img2.jpg" alt="" className='h-[4rem] rounded-[50%]' />
                          <div className="flex flex-col">
                              <h3 className='font-semibold'>Human2 </h3>
                              <p className='text-sm text-gray-600'>Seberia</p>
                          </div>
                        </div>
                        <p className='text-5xl text-[#FF4D30]'>"</p>
                      </div>
                  </div>
              </div>

                
            </div>
        </div>

   
      
    </>
  )
}

export default Reviewed
