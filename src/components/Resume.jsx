import PersonalInfoSection from "./personal-info/PersonalSection";
import EducationInfoSection from "./education-info/EducationSection";
import ProfessionalInfoSection from "./professional-info/ProfessionalSection";
import "../styles/resume.css";

function Resume({personalInfo, educationInfo, professionalInfo}){
    return(
        <div className="resume-container">
            <PersonalInfoSection 
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
            />
            <hr />
            <p>Personal motivations and stuff!</p>

            <h1>EDUCATION</h1>
            <hr />

            <div id="education-section">
            {educationInfo.map((info) =>{
                return(
                <EducationInfoSection 
                degree={info.degree}
                school={info.school}
                city={info.city}
                country={info.country}
                startDate={info.startDate}
                endDate={info.endDate}
                key={info.id}
                description={info.description}
                />);
            })}
            </div>

            <h1>PROFESSIONAL EXPERIENCE</h1>
            <hr />
            <div id="professional-section">
            {professionalInfo.map((info) =>{
                return(
                    <ProfessionalInfoSection 
                    position={info.position}
                    company={info.company}
                    startDate={info.startDate}
                    endDate={info.endDate}
                    description={info.description}
                    />
                )
            })}
            </div>
        </div>
    );
}

export default Resume;