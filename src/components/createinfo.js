import uniqid from "uniqid";

function CreateInfo(){
    const education = () =>{
        const id = uniqid();
        return({
            id: id,
            degree: "Degree",
            school: "School",
            city: "City",
            country: "Country",
            startDate: "2021",
            endDate: "2023",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dictum arcu, ac sollicitudin arcu. Nunc cursus eleifend libero nec commodo. Proin condimentum scelerisque ligula at venenatis. Curabitur est sapien, tristique quis bibendum in, dignissim non orci. Integer convallis efficitur enim dapibus facilisis. Praesent vitae sem elementum, aliquam odio nec, lobortis diam."
        });
    }

    const professional = () =>{
        const id = uniqid();
        return({
            id: id,
            position: "Position",
            company: "Company",
            startDate: "2000",
            endDate: "2008",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dictum arcu, ac sollicitudin arcu. Nunc cursus eleifend libero nec commodo. Proin condimentum scelerisque ligula at venenatis. Curabitur est sapien, tristique quis bibendum in, dignissim non orci. Integer convallis efficitur enim dapibus facilisis. Praesent vitae sem elementum, aliquam odio nec, lobortis diam."
    })
    }

    return{education, professional};
}

export {CreateInfo};