import PersonalInfoSection from "./personal-info/PersonalSection";

function Resume({personalInfo}){
    return(
        <div className="resume-container">
            <PersonalInfoSection 
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
            />
        </div>
    );
}

export default Resume;