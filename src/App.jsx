import React, { useState } from "react";
import "./styles/main.css";
import "./styles/section.css";
import { exampleData } from "./components/example-data";

import SectionInput from "./components/SectionInput";
import { EducationInput } from "./components/education-info/Education";
import { ProfessionalInput } from "./components/professional-info/Professional";
import PersonalDetails from "./components/personal-info/PersonalDetails";

import Resume from "./components/Resume";
import { CreateInfo } from "./components/createinfo";

import generatePDF from "./components/PDFgenerator";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [educationInfo, setEducationInfo] = useState(exampleData.educationInfo);
  const [professionalInfo, setProfessionalInfo] = useState(exampleData.professionalInfo);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleEducationInfoChange(e) {
    const { key } = e.target.dataset;
    const { infoid } = e.target.dataset;

    const updatedInfo = educationInfo.map((info => {
      if (info.id == infoid) {
        return { ...info, [key]: e.target.value };
      }
      return info;
    }));

    setEducationInfo(updatedInfo);
  }

  function handleProfessionalInfoChange(e) {
    const { key } = e.target.dataset;
    const { infoid } = e.target.dataset;

    const updatedInfo = professionalInfo.map((info => {
      if (info.id == infoid) {
        return { ...info, [key]: e.target.value };
      }
      return info;
    }));

    setProfessionalInfo(updatedInfo);
  }

  function addNewProfessionalInfo() {
    const newData = CreateInfo().professional();
    const newInfoList = [...professionalInfo, newData];

    setProfessionalInfo(newInfoList);
  }

  function addNewEducationInfo() {
    const newData = CreateInfo().education();
    const newInfoList = [...educationInfo, newData];

    setEducationInfo(newInfoList);
  }

  function removeEducationInfo(id) {
    const updatedInfo = educationInfo.filter(info => info.id !== id);
    setEducationInfo(updatedInfo);
  }

  function removeProfessionalInfo(id) {
    const updatedInfo = professionalInfo.filter(info => info.id !== id);
    setProfessionalInfo(updatedInfo);
  }

  return (
    <div
      className="App"
    >
      <h1>CV Builder!</h1>
      <button onClick={generatePDF}>Save PDF</button>
      <div id="canvas">
        <div id="input">
          <PersonalDetails
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
          />

          <SectionInput title="Education" addNew={addNewEducationInfo}>
            {educationInfo.map((info) => {
              return (<EducationInput
                onChange={handleEducationInfoChange}
                degree={info.degree}
                school={info.school}
                city={info.city}
                country={info.country}
                startDate={info.startDate}
                endDate={info.endDate}
                infoid={info.id}
                key={info.id}
                removeInfo={removeEducationInfo}
                description={info.description}
              />);
            })}
          </SectionInput>

          <SectionInput title="Professional" addNew={addNewProfessionalInfo}>
          {professionalInfo.map((info) => {
              return (<ProfessionalInput
                onChange={handleProfessionalInfoChange}
                position={info.position}
                company={info.company}
                startDate={info.startDate}
                endDate={info.endDate}
                infoid={info.id}
                key={info.id}
                removeInfo={removeProfessionalInfo}
                description={info.description}
              />);
            })}
          </SectionInput>
        </div>

        <div id="output">
          <Resume personalInfo={personalInfo} educationInfo={educationInfo} professionalInfo={professionalInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
