import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import "./Card.css";
import { CCard, CCardHeader, CCardBody, CCardText, CCardFooter, CButton } from '@coreui/react';
import { FaGithub } from 'react-icons/fa';

export default function Card({ element }) {
  return (
    <div className='CCard-Container'>
      <CCard className="project-card">
        <CCardHeader className="card-header">{element.title}</CCardHeader>
        <CCardBody className="card-body">
          <CCardText className="card-text">{element.description}</CCardText>
          <div className="button-group">
            {element.link && (
              <CButton 
                href={element.link} 
                target='_blank' 
                className="live-demo-button"
              >
                Live Demo
              </CButton>
            )}
            {element.github && (
              <CButton 
                href={element.github} 
                target='_blank' 
                className="github-button"
              >
                <FaGithub size={18} style={{ marginRight: "8px" }} />
                GitHub
              </CButton>
            )}
          </div>
        </CCardBody>
        <CCardFooter className="card-footer">
          {element.deployed}
        </CCardFooter>
      </CCard>
    </div>
  )
}
