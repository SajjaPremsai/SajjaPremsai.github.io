import React from 'react';
import "./Card.css";
import { FaGithub } from 'react-icons/fa';

export default function Card({ element }) {
  return (
    <div className='project-card-container'>
      <div className="project-card">
        <div className="card-top">
          <div className="card-title">{element.title}</div>
          <span className="card-badge">{element.deployed}</span>
        </div>

        <p className="card-description">{element.description}</p>

        <div className="tag-row">
          {element.tags?.map((tag, index) => (
            <span key={index} className="card-tag">{tag}</span>
          ))}
        </div>

        {element.contributors && element.contributors.length > 0 && (
          <div className="contributors-row">
            <div className="contributors-label">Collaborators</div>
            <div className="contributors-list">
              {element.contributors.map((contributor, index) => (
                <a
                  key={index}
                  href={contributor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contributor-link"
                >
                  <img src={contributor.image} alt={contributor.name} className="contributor-avatar" />
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="button-group">
          {element.link && (
            <a
              href={element.link}
              target='_blank'
              rel='noreferrer'
              className='action-button live-demo-button'
            >
              Live Demo
            </a>
          )}
          {element.github && (
            <a
              href={element.github}
              target='_blank'
              rel='noreferrer'
              className='action-button github-button'
            >
              <FaGithub size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
