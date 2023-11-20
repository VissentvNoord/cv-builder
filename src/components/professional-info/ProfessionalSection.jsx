function ProfessionalInfoSection({ position, company, startDate, endDate, description }) {
    return (
        <div className="education-info">
            <span className="education-details">
                <p>{company}</p>
                <p className="date">{startDate}-{endDate}</p>
            </span>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>)
}

export default ProfessionalInfoSection;