import jsPDF from "jspdf";

const generatePDF = () => {
    const resume = new jsPDF('resume', 'pt', 'a4');
    resume.html(document.getElementById('output')).then(() =>{
        resume.save('resume.pdf');
    });
}

export default generatePDF;