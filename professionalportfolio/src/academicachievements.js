import React from 'react';
import './academicachievements.css';

import cert1 from './Files/Certificates/ACAD/fruto (1) (1).PNG';

const ACHIEVEMENTS = [
  {
    title: 'Colaborative Project Presentation and Prototype Exhibition',
    org: 'FAITH Colleges',
    year: '2026',
    desc: 'Awarded for Excellence in Technical Presentation',
    rank: '1',
    icon: '📜',
    image: cert1,
  }
];

function AcademicAchievements() {
  return (
    <div className="section achievements-section">
      <div className="section-number">06</div>

      <div className="section-header">
        <h2 className="section-title">Academic Achievements<span className="dot">.</span></h2>
        <div className="section-divider" />
      </div>

      <div className="achievements-grid fade-up">
        {ACHIEVEMENTS.map((a, i) => (
          <div className="achievement-card card" key={i}>
            <div className="ach-rank-badge">{a.rank}</div>
            <div className="ach-icon">{a.icon}</div>
            <div className="ach-body">
              <h3 className="ach-title">{a.title}</h3>
              <div className="ach-org">{a.org}</div>
              <p className="ach-desc">{a.desc}</p>
              <div className="ach-footer">
                <span className="pill">{a.year}</span>
              </div>
            </div>

            {/* Photo placeholder for award/certificate */}
            {a.image ? (
              <img
                src={a.image}
                alt={a.title}
                style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain', borderRadius: '8px', marginTop: '10px' }}
              />
            ) : (
              <div className="photo-placeholder ach-photo">
                <span className="ph-icon">🏆</span>
                <span className="ph-text">Award Photo</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicAchievements;
