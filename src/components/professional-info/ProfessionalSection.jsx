function ProfessionalInfoSection({ position, company, startDate, endDate }){
    return(
    <div className="professional-info">
        <h2>{position}</h2>
        <p>{company}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
    </div>)
}

export default ProfessionalInfoSection;