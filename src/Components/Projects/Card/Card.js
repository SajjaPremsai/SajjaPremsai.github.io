import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import "./Card.css"
import { CCard , CCardHeader , CCardBody  , CCardText , CButton , CCardFooter} from '@coreui/react' 


export default function Card({element}) {
  return (
    <div className='CCard-Container'>
      <CCard className="text-center">
        <CCardHeader style={{ color:"#EC4D37"}}>{element.title}</CCardHeader>
        <CCardBody>
          <img src={element.image} width={100} height={100} alt='Certificate' />
          <CCardText>{element.description}</CCardText>
          <CButton href={element.link} target='_blank' style={{ backgroundColor: "#EC4D37", borderColor: "#EC4D37" ,  fontSize : "18px"}}>Live Demo</CButton>
        </CCardBody>
        <CCardFooter className="text-medium-emphasis">
          {element.deployed}
        </CCardFooter>
      </CCard>
    </div>
  )
}
