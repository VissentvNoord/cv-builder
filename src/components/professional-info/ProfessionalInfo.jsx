import { useState } from "react";
import InputGroup from "../InputGroup.jsx";
import SectionInput from "../SectionInput.jsx";

function ProfessionalInfo(startInfo){
    const [info, setInfo] = useState(startInfo);

    function onInfoChange(e){
        const { key } = e.target.dataset;
        setInfo({...info, [key]: e.target.value});
    }

    let input = new ProfessionalInput(onInfoChange, info);

    return {input, info, setInfo};
}

function ProfessionalInput(onChange, { position, company, startDate, endDate }){
    return(
        <SectionInput title={"Test input"} >
            <InputGroup 
            onChange={onChange}
            label="Position:"
            id="position"
            dkey="position"
            type="text"
            value={position}
            />
            <InputGroup 
            onChange={onChange}
            label="Company:"
            id="company"
            dkey="company"
            type="text"
            value={company}
            />
            <InputGroup 
            onChange={onChange}
            label="Start date:"
            id="startDate"
            dkey="startDate"
            type="text"
            value={startDate}
            />
            <InputGroup 
            onChange={onChange}
            label="End date:"
            id="endDate"
            dkey="endDate"
            type="text"
            value={endDate}
            />
        </SectionInput>
    )
}

export default ProfessionalInfo;
