
function FullName({ onChange, value }){
    return(
        <div className="input-group">
            <label htmlFor="full-name"></label>
            <input onChange={onChange} type="text" id="full-name" value={value} data-key="fullName" />
        </div>
    )
}

function Email({ onChange, value }){
    return(
        <div className="input-group">
            <label htmlFor="email"></label>
            <input onChange={onChange} type="text" id="email" value={value} data-key="email" />
        </div>
    )
}

function PersonalDetails({ onChange, fullName, email, phoneNumber, adress }){
    return(
        <form className="personal-details">
            <h2>Personal Details</h2>
            <FullName onChange={onChange} value={fullName} />
            <Email onChange={onChange} value={email} />
        </form>
    )
}

export default PersonalDetails;