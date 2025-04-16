import todo from "./Assests/Todo.png"
import weather from "./Assests/Weather.png"
import jwt from "./Assests/icons8-jwt-96.png"
const timelineElements = [
    {
        id: 1,
        link: "https://weather-8938.web.app/",
        image: weather,
        title: "The Weather Forecast Application",
        description: "The Weather Forecast Application is a web-based platform that allows users to retrieve weather information for a specific location. The application leverages the Axios library for making HTTP requests and integrates with a third-party weather API to fetch current weather data, including temperature, humidity, wind speed, and atmospheric conditions. Users can input a location, such as a city or geographic coordinates, to receive the latest weather forecast for that location.",
        deployed: "Deployed on 21st July 2023",
        tags: [
            "Axios", "React", "Hooks", "Node.js"
        ]
    },
    {
        id: 2,
        link: "https://mytodo-8938.web.app/",
        image: todo,
        title: "React Redux Todo Application",
        description: "The React Redux Todo Application is a web-based application that allows users to create, manage, and delete tasks or to-dos. It employs React for building the user interface and Redux for managing the application state. The project includes features such as adding new tasks, marking tasks as completed, filtering tasks based on their status, and removing completed tasks. Users can interact with the application to efficiently organize their tasks and improve productivity.",
        deployed: "Deployed on 4th September 2023",
        tags: [
            "Redux", "React", "Hooks", "Node.js"
        ]
    },
    {
        id: 3,
        link: "https://express-authentication-client.onrender.com",
        image: jwt,
        title: "React-Express JWT Authentication App",
        description: "The React-Express JWT Authentication App is a full-stack web application designed for secure user authentication. React is employed to build a dynamic and responsive user interface, while Express.js serves as the robust backend framework. Authentication is implemented using JSON Web Tokens (JWT), ensuring stateless and scalable user verification.",
        deployed: "Deployed on 31st January 2024",
        tags: [
            "React", "Express", "cors", "Authentication" , "jsonwebtoken"
        ]
    }
];

export default timelineElements;