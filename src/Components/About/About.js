import React from 'react';
import "./About.css";
import { ReactComponent as WorkIcon } from './school.svg';
import timelineElements from "./data"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

export default function About() {
    let SchoolIconStyle = { background: "#EC4D37" }
    return (
        <section className='About reveal' id='About'>
            <div className='About-Header'>
                <header>About</header>
            </div>
            <div className='About-Des'>
                <p>
                    I’m <b>Sajja Prem Sai</b>, a B.Tech graduate in <b>Computer Science and Engineering (AI & ML)</b> from 
                    Avanthi Institute of Engineering and Technology, with a CGPA of <b>8.31</b>.  
                    I specialize in <b>Java, Python, Node.js, React.js, Spring Boot, and SQL</b>, and have hands-on 
                    experience with tools like <b>Docker</b> and <b>Git</b>.  
                    With a strong foundation in <b>Data Structures and Algorithms</b>, I enjoy solving challenging 
                    problems and building scalable solutions. My projects range from <b>AI-powered platforms</b> to 
                    <b> full-stack web applications</b>, showcasing both creativity and technical expertise.  
                    Passionate about continuous learning, I’m eager to contribute to impactful projects in the 
                    software industry.
                </p>
            </div>
            <div className='Education'>
                <h1 className='Title'>Education</h1>
            </div>
            <div className='Education-data'>
                <VerticalTimeline>
                    {
                        timelineElements.map((element) => {
                            return (
                                <VerticalTimelineElement
                                    key={element.id}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={SchoolIconStyle}
                                    icon={<WorkIcon />}
                                >
                                    <h3 className="vertical-timeline-element-title">{element.Name}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{element.Degree}</h4>
                                    <p id='description'>{element.description}</p>
                                </VerticalTimelineElement>
                            )
                        })
                    }
                </VerticalTimeline>
            </div>
        </section>
    )
}

