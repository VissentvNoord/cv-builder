import { useState } from "react"
import SectionInput from "../SectionInput.jsx"
import InputGroup from "../InputGroup.jsx";

function PersonalDetails({ onChange, fullName, email, phoneNumber, address }){
    return(
        <SectionInput title={"Personal Details"} >
            <InputGroup 
            onChange={onChange}
            label="Full name:"
            id="fullName"
            dkey="fullName"
            type="text"
            value={fullName}
            />
            <InputGroup 
            onChange={onChange}
            label="E-mail:"
            id="email"
            dkey="email"
            type="email"
            value={email}
            />
            <InputGroup 
            onChange={onChange}
            label="Phone number:"
            id="phoneNumber"
            dkey="phoneNumber"
            type="tel"
            value={phoneNumber}
            />
            <InputGroup 
            onChange={onChange}
            label="Place of residence:"
            id="address"
            dkey="address"
            type="text"
            value={address}
            />
        </SectionInput> 
    )
}

export default PersonalDetails;