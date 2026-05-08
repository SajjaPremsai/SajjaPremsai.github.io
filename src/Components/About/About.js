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
                    My experience mainly revolves around full-stack development, AI engineering, and building intelligent applications using technologies like Python, JavaScript, React.js, FastAPI, and modern backend tools. I’ve worked with frameworks and technologies such as LangChain, LangGraph, MCP Servers, TensorFlow, and vector databases to develop conversational AI systems, operational dashboards, and enterprise integrations. I enjoy experimenting with ideas and building small prototypes to better understand how systems work behind the scenes. Beyond tech, I like writing blogs, playing BattleGrounds Mobile India (formerly PUBG), collaborating with people on projects, and continuously learning through hands-on building and exploration.
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

