import SectionInput from "../SectionInput.jsx";
import InputGroup from "../InputGroup.jsx";

function EducationDetails({ onChange, degree, school, city, country, startDate, endDate }){
    return(
        <SectionInput title={"Educational Details"} >
            <InputGroup 
            onChange={onChange}
            label="Degree:"
            id="degree"
            dkey="degree"
            type="text"
            value={degree}
            />
            <InputGroup 
            onChange={onChange}
            label="School:"
            id="school"
            dkey="school"
            type="text"
            value={school}
            />
            <InputGroup 
            onChange={onChange}
            label="City:"
            id="city"
            dkey="city"
            type="text"
            value={city}
            />
            <InputGroup 
            onChange={onChange}
            label="Country:"
            id="country"
            dkey="country"
            type="text"
            value={country}
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

export default EducationDetails;