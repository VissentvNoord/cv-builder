
function PersonalInfoSection({ fullName, email, phoneNumber, address }){
    return(
    <div className="personal-info">
        <h1>{fullName}</h1>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{address}</p>
    </div>)
}

export default PersonalInfoSection;