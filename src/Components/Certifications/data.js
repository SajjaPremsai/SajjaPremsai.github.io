import FullStack from "../../assets/Certificates/Full Stack Professional.jpg"
import java from "../../assets/Certificates/NPTEL/Programming In Java.jpg"
import tensorflow from "../../assets/Certificates/Tensorflow Developer Certificate.jpg"
const timelineElements = [
    {
        id: 1,
        image: tensorflow, // Ensure this path is correct
        title: "TensorFlow Developer Certificate",
        company: "Google",
        issuedOn: "29-May-2024",
        tags: ["TensorFlow", "Neural Networks", "RNN", "CNN", "Word Embeddings", "Time Series",]
    },
    {
        id: 2,
        image: FullStack, // Ensure this path is correct
        title: "IBM Full Stack Software Developer",
        company: "Coursera",
        issuedOn: "01-Jan-2024",
        tags: ["ReactJs", "Nodejs", "Express" ,"Containers", "Cloud-Computing","Docker",]
    },
    {
        id: 3,
        image: java, // Ensure this path is correct
        title: "Programming in Java",
        company: "NPTEL",
        issuedOn: "22-May-2023",
        tags: ["Core Java","OOPS","Interfaces","Classes & Objects"]
    }
];

export default timelineElements;