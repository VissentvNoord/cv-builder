import React, { useState } from "react";
import "./styles/main.css";
import "./styles/section.css";
import { exampleData } from "./components/example-data";
import PersonalDetails from "./components/personal-info/PersonalDetails";
import Resume from "./components/Resume";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);

  function handlePersonalInfoChange(e){
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key]: e.target.value});
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
          adress={personalInfo.adress} />
        </div>

        <div id="output">
          <Resume personalInfo={personalInfo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
