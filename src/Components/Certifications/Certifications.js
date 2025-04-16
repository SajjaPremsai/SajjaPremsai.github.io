import React from 'react'
import Card from './Card/Card'
import "./Certifications.css"
import timelineElements from './data'

export default function Certifications() {
  return (
      <section className='Certifications reveal' id='Certifications'>
            <div className='Certi-Header'>
                <header>Certifications</header>
            </div>
            <div className='Certi-Card'>
                {
                    timelineElements.map((element)=>{
                        return(
                            <Card element={element} key={element.id} className="CardItem"/>
                        )
                    })
                }
            </div>
        </section>
  )
}
