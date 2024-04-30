import React from "react";
import SaveBig from "../Components/SaveBig";
import all_team from "../../public/images/all_team";


const Our_team=()=>{
    return(
        <>

        <div className="contact_section w-full h-[100vh] flex justify-center items-center">
            <div className="container w-[85%] h-full grid grid-cols-3 place-items-center gap-6">
                {
                    all_team.map((currElem)=>{
                       return(
                        <>
                             <img src={currElem.img} alt="" className="h-full p-3" />
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

export default Our_team;