import { mdiPhone } from "@mdi/js";
import Icon from "@mdi/react";


function PersonalInfoSection({ fullName, email, phoneNumber, address }){
    return(
    <div id="personal-section">
        <h1>{fullName}</h1>

        <div className="details">
            <p>{email}</p>
            <p><Icon className="phone" path={mdiPhone}/> {phoneNumber}</p>
            <p>{address}</p>
        </div>
    </div>)
}

export default PersonalInfoSection;