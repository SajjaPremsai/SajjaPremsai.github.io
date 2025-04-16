import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills';
import About from "./Components/About/About";
import Experience from './Components/Experience/Experience';
import Certifications from './Components/Certifications/Certifications';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <div>
    <NavBar/>
    <Home/>
    <About/>
    <Skills/>
    <Experience/>
    <Certifications/>
    <Projects/>
    <ContactMe/>
    <Footer/>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
 </div>
    </>
  );
}

export default App;
