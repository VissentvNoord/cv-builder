import SectionInput from "../SectionInput.jsx";
import InputGroup from "../InputGroup.jsx";

function ProfessionalDetails({children, addEvent}){
    return(
        <SectionInput title={"Professional Details"} >
            {children}
        </SectionInput>
    )
}

export default ProfessionalDetails;