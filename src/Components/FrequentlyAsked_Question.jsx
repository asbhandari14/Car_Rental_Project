import React from 'react'




const FrequentlyAsked_Question = () => {
  return (
    <>

        <div className="frequently_asked_section w-full h-auto flex justify-center items-center p-8">
            <div className="container w-[95%] h-full flex flex-col justify-start items-center gap-4">
                <h3 className='text-2xl font-bold mt-6'>FAQ</h3>
                <h1 className='text-5xl font-bold'>Frequently Asked Questions</h1>
                <p className='text-lg w-[70%] text-center text-gray-400'>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>

{/*=========================================================Code for the Accordion ==================================================================== */}

<div className="accordion w-[80%] my-8 " id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header ">
      <button className="accordion-button text-lg font-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      1. What is special about comparing rental car deals?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body visible text-gray-600">
      Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-lg font-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      2. How do I find the car rental deals?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body visible text-gray-600">
      You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-lg font-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      3. How do I find such low rental car prices?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body visible text-gray-600">
      Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
      </div>
    </div>
  </div>
</div>

{/* =========================================================== End of the Accordion ================================================================== */}
            </div>
        </div>



    </>
  )
}

export default FrequentlyAsked_Question
