import React from 'react'
import "./Experience.css"
import timelineElements from "./data"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import  "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from './work.svg';
import github from "./github.png"

export default function Experience() {
    let WorkIconStyle = { background : "#EC4D37" }
  return (
    <section className='Experience reveal' id='Experience'>
        <div className='Experience-Header'>
            <header>Internships</header>
        </div>
        <div className='Experience-data'>
                 <VerticalTimeline>
                    {
                        timelineElements.map((element) => {
                            return (
                                <VerticalTimelineElement
                              key={element.id}
                              date={element.date}
                              dateClassName="date"
                              iconStyle={WorkIconStyle}
                              icon={<WorkIcon />}
                            >
                              <img src={element.path} alt="Logo" width={element.width} height={element.height}/>
                              <h3 className="vertical-timeline-element-title">{element.Name}</h3>
                              <h4 className="vertical-timeline-element-subtitle">{element.Location}</h4>
                              <p id='description'>{element.description}</p>
                                <a className="button" href={element.buttonlink} target="_blank" rel="noreferrer"><img src={github} width={20} height={20} alt="GitHub Logo" /> <span>View Project on Github</span></a>
                            </VerticalTimelineElement>
                             )
                        })
                    }
                 </VerticalTimeline>
            </div>
    </section>
  )
}
