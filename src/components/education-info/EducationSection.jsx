function EducationInfoSection({ degree, school, city, country, startDate, endDate }){
    return(
    <div className="education-info">
        <h2>{school}</h2>
        <p>{degree}</p>
        <p>{city}</p>
        <p>{country}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
    </div>)
}

export default EducationInfoSection;