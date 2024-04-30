import React from 'react'




const SaveBig = (props) => {
  return (
    <>
      <div className="savebig_section w-full h-[45vh] flex justify-center items-center bg-black text-white mt-8">
        <div className="container w-[80%] h-full flex flex-col justify-center items-center gap-2">
            <h1 className='text-4xl font-bold'>{props.heading} <span className='text-[#FF4D30] text-2xl'>{props.number}</span></h1>
            <p className='text-2xl'>{props.subheading}<span className='text-[#FF4D30]'>{(props.subheading)?" 24/7 Support.":""}</span> </p>
            {/* {console.log(props.heading)} */}
        </div>
      </div>
    </>
  )
}

export default SaveBig
