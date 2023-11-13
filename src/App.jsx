import React, { useState } from "react";
import "./styles/main.css";
import "./styles/section.css";
import { exampleData } from "./components/example-data";
import PersonalDetails from "./components/personal-info/PersonalDetails";
import EducationDetails from "./components/education-info/EducationDetails";
import ProfessionalDetails from "./components/professional-info/ProfessionalDetails";
import Resume from "./components/Resume";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [educationInfo, setEducationInfo] = useState(exampleData.educationInfo);
  const [professionalInfo, setProfessionalInfo] = useState(exampleData.professionalInfo);

  function handlePersonalInfoChange(e){
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  }

  function handleEducationInfoChange(e){
    const { key } = e.target.dataset;
    setEducationInfo({...educationInfo, [key]: e.target.value});
  }

  function handleProfessionalInfoChange(e){
    const { key } = e.target.dataset;
    setProfessionalInfo({...professionalInfo, [key]: e.target.value});
  }

  return (
    <div
      className="App"
    >
      <h1>CV Builder!</h1>
      <div id="canvas">
        <div id="input">      
          <PersonalDetails
          onChange={handlePersonalInfoChange}
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address} 
          />

          <EducationDetails 
          onChange={handleEducationInfoChange}
          degree={educationInfo.degree}
          school={educationInfo.school}
          city={educationInfo.city}
          country={educationInfo.country}
          startDate={educationInfo.startDate}
          endDate={educationInfo.endDate}
          />

          <ProfessionalDetails 
          onChange={handleProfessionalInfoChange}
          position={professionalInfo.position}
          company={professionalInfo.company}
          startDate={professionalInfo.startDate}
          endDate={professionalInfo.endDate}
          />
        </div>

        <div id="output">
          <Resume personalInfo={personalInfo} educationInfo={educationInfo} professionalInfo={professionalInfo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
