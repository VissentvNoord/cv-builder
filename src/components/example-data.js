import uniqid from "uniqid";
import { CreateInfo } from "./createinfo";

const exampleData = {
    personalInfo:{
        fullName: "Your Name",
        email: "your-email@gmail.com",
        phoneNumber: "06-12345678",
        address: "City, Province/State"
    },
    educationInfo:[
        CreateInfo().education()
    ],
    professionalInfo:[
        CreateInfo().professional()
    ]
}

export{ exampleData };