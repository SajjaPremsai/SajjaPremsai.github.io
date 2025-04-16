import React from 'react'
import "./Projects.css"
import Card from "./Card/Card"
import timelineElements from "./data"

export default function Projects() {
  return (
    <section className='Projects reveal' id='Projects'>
      <div className='Projects-header'>
        <header className='Projects-header' style={{ color:"#EC4D37" }}>Projects</header>
      </div>
      <div className='Project-Card'>
        {

          timelineElements.map((element)=>{
            return(
              <Card className="CardItem" element={element} key={element.id}/>
            )
          })


        }
      </div>
    </section>
  )
}
