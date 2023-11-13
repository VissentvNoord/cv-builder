import PersonalInfoSection from "./personal-info/PersonalSection";
import EducationInfoSection from "./education-info/EducationSection";
import ProfessionalInfoSection from "./professional-info/ProfessionalSection";

function Resume({personalInfo, educationInfo, professionalInfo}){
    return(
        <div className="resume-container">
            <PersonalInfoSection 
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
            />
            <h1>Education</h1>
            <EducationInfoSection 
            degree={educationInfo.degree}
            school={educationInfo.school}
            city={educationInfo.city}
            country={educationInfo.country}
            startDate={educationInfo.startDate}
            endDate={educationInfo.endDate}
            />
            <h1>Professional Career</h1>
            <ProfessionalInfoSection 
            position={professionalInfo.position}
            company={professionalInfo.company}
            startDate={professionalInfo.startDate}
            endDate={professionalInfo.endDate}
            />

        </div>
    );
}

export default Resume;