import React from 'react';
import './competitions.css';

import bpi_cert from './Files/Certificates/Seminars/Screenshot 2026-04-24 165239.png';

const COMPETITIONS = [
  {
    name: 'BPI DATA Wave 2025',
    event: 'Hackathon',
    org: 'ESKWELABS / BPI',
    level: 'National',
    result: 'Participant',
    year: '2025',
    desc: 'AI Integration for a project focused on workers from banks.',
    medal: '🏅',
    image: bpi_cert,
  }
];

const LEVEL_COLOR = {
  National: '#ef4444',
  Regional: '#f97316',
  School:   '#6366f1',
  International: '#8b5cf6',
};

function Competitions() {
  return (
    <div className="section competitions-section">
      <div className="section-number">07</div>

      <div className="section-header">
        <h2 className="section-title">Competitions<span className="dot">.</span></h2>
        <div className="section-divider" />
      </div>

      <div className="competitions-list fade-up">
        {COMPETITIONS.map((comp, i) => (
          <div className="comp-card card" key={i}>
            {/* Medal */}
            <div className="comp-medal">{comp.medal}</div>

            {/* Main info */}
            <div className="comp-info">
              <div className="comp-header-row">
                <h3 className="comp-name">{comp.name}</h3>
                <div className="comp-badges">
                  <span
                    className="comp-level-badge"
                    style={{ background: LEVEL_COLOR[comp.level] + '18', color: LEVEL_COLOR[comp.level] }}
                  >
                    {comp.level}
                  </span>
                  <span className="pill">{comp.result}</span>
                </div>
              </div>
              <div className="comp-event">{comp.event}</div>
              <div className="comp-org">🏛 {comp.org} · {comp.year}</div>
              <p className="comp-desc">{comp.desc}</p>
            </div>

            {/* Photo placeholder or image */}
            {comp.image ? (
              <img 
                src={comp.image} 
                alt={comp.name} 
                style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain', borderRadius: '8px', marginTop: '10px' }} 
              />
            ) : (
              <div className="photo-placeholder comp-photo">
                <span className="ph-icon">📸</span>
                <span className="ph-text">Competition Photo</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Competitions;
