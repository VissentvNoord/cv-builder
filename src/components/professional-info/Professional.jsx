import InputGroup from "../InputGroup.jsx";
import SectionInput from "../SectionInput.jsx";

function ProfessionalInput({ onChange, position, company, startDate, endDate, infoid, removeInfo, description }) {
    function removeClick() {
        removeInfo(infoid);
    }

    let title = company;
    if (title == "") {
        title = "-";
    }

    return (
        <SectionInput title={title} >
            <InputGroup
                onChange={onChange}
                label="Position:"
                id="position"
                dkey="position"
                type="text"
                value={position}
                infoid={infoid}
            />
            <InputGroup
                onChange={onChange}
                label="Company:"
                id="company"
                dkey="company"
                type="text"
                value={company}
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

export { ProfessionalInput };