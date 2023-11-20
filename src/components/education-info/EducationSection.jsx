function EducationInfoSection({ degree, school, city, country, startDate, endDate, description }){
    return(
    <div className="education-info">
        <span className="education-details">
            <p>{school}, {city}, {country}</p>
            <p className="date">{startDate}-{endDate}</p>
        </span>
        <h3>{degree}</h3>
        <p>{description}</p>
    </div>)
}

export default EducationInfoSection;