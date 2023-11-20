import SectionInput from "../SectionInput.jsx";
import InputGroup from "../InputGroup.jsx";

function EducationInput({ onChange, degree, school, city, country, startDate, endDate, infoid, removeInfo, description }) {
    let t = "-";
    if (school != "") {
        t = school;
    }

    function removeClick() {
        removeInfo(infoid);
    }

    return (
        <SectionInput title={t} >
            <InputGroup
                onChange={onChange}
                label="Degree:"
                id="degree"
                dkey="degree"
                type="text"
                value={degree}
                infoid={infoid}
            />
            <InputGroup
                onChange={onChange}
                label="School:"
                id="school"
                dkey="school"
                type="text"
                value={school}
                infoid={infoid}
            />
            <InputGroup
                onChange={onChange}
                label="City:"
                id="city"
                dkey="city"
                type="text"
                value={city}
                infoid={infoid}
            />
            <InputGroup
                onChange={onChange}
                label="Country:"
                id="country"
                dkey="country"
                type="text"
                value={country}
                infoid={infoid}
            />
            <InputGroup
                onChange={onChange}
                label="Start date:"
                id="startDate"
                dkey="startDate"
                type="text"
                value={startDate}
                infoid={infoid}
            />
            <InputGroup
                onChange={onChange}
                label="End date:"
                id="endDate"
                dkey="endDate"
                type="text"
                value={endDate}
                infoid={infoid}
            />
            <InputGroup
                onChange={onChange}
                label="Description:"
                id="description"
                dkey="description"
                type="textarea"
                value={description}
                infoid={infoid}
            />
            <button onClick={removeClick}>Remove</button>
        </SectionInput>
    )
}

export { EducationInput };