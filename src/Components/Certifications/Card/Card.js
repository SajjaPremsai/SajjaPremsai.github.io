import React from 'react';
import { CCard, CRow, CCol, CCardBody, CCardImage, CCardTitle, CCardText } from '@coreui/react';
import './Card.css';

export default function Card({ element }) {
  return (
      <CCard className="mb-3" style={{ maxWidth: '900px' }}> {/* Increased maxWidth */}
        <CRow className="g-0">
          <CCol md={4}>
            <CCardImage src={element.image} alt={element.title} style={{padding:"10px"}}/> {/* Added alt text */}
          </CCol>
          <CCol md={8}>
            <CCardBody>
            <CCardTitle><span style={{ color:"#EC4D37"}}>{element.title}</span></CCardTitle>
              <CCardText>
                <strong>{element.company}</strong><br />
                Issued on {element.issuedOn}
              </CCardText>
              <CCardText>
                {element.tags.map((tag, index) => (
                  <span key={index} className="badge bg-secondary me-1">{tag}</span>
                ))}
              </CCardText>
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>
  );
}
