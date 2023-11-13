import SectionInput from "../SectionInput.jsx";
import InputGroup from "../InputGroup.jsx";

function ProfessionalDetails({ onChange, position, company, startDate, endDate }){
    return(
        <SectionInput title={"Professional Career"} >
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

export default ProfessionalDetails;