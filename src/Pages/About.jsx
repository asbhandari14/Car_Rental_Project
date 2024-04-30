import React from "react";
import About_Company from "../Components/About_Company";
import Quick_and_Easy_section from "../Components/Quick_and_Easy_section";
import SaveBig from "../Components/SaveBig";



const About=()=>{
    return(
        <>

        <About_Company/>
        <Quick_and_Easy_section/>
        <SaveBig heading="Book a car by getting in touch with us" number="(123)-456-7890"
        />


        </>
    )
}

export default About;