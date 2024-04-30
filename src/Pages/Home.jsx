import React from 'react'
import all_car_product from '../assets/all_car_product';
import Hero_section from '../Components/Hero_section';
import Book_car from '../Components/Book_car';
import Quick_and_Easy_section from '../Components/Quick_and_Easy_section';
import SaveBig from '../Components/SaveBig';
import BestValueDeal from '../Components/BestValueDeal';
import Reviewed from '../Components/Reviewed';
import FrequentlyAsked_Question from '../Components/FrequentlyAsked_Question';





const Home = () => {


  return (
    <>
      <Hero_section/> 
      <Book_car/>
      <Quick_and_Easy_section/>
      <SaveBig heading="Save big with our cheap car rental!" subheading="Top Airports. Local Suppliers ."/>
      <BestValueDeal/>
      <Reviewed/>
      <FrequentlyAsked_Question/>
  
    </>
  )
}

export default Home;
