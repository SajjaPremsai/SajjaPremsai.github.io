import React from 'react';
import "./About.css";
import { ReactComponent as WorkIcon } from './school.svg';
import timelineElements from "./data"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import  "react-vertical-timeline-component/style.min.css";

export default function About() {
    let SchoolIconStyle = { background : "#EC4D37"}
    return (
        <section className='About reveal' id='About'>
            <div className='About-Header'>
                <header>About</header>
            </div>
            <div className='About-Des'>
                <p>
                    Sajja Prem Sai is a final year student pursuing a B.Tech in Computer Science, specializing in Artificial Intelligence and Machine Learning at Avanthi Institute of Engineering and Technology. 
                    Proficient in Java, Python, Node.js, HTML, CSS, and React, Prem also has a basic understanding of Docker and Kubernetes, with knowledge of creating images and containers. 
                    Additionally, Prem possesses a grasp of Kubernetes architecture and the retrieval of data from running nodes, along with a solid foundation in Data Structures and Algorithms(DSA).
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
