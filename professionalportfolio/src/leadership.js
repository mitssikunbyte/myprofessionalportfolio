import React from 'react';
import './leadership.css';

const ROLES = [
  {
    role: 'Community Engagement Officer',
    org: 'ICPEP.SE Faith Chapter',
    period: '2025 – 2026',
    icon: '🤝',
    type: 'Student Organization',
  },
  {
    role: 'DCO',
    org: 'ICPEP.SE Faith Chapter',
    period: '2024 – 2025',
    icon: '⚡',
    type: 'Student Organization',
  },
  {
    role: 'City Youth 10th Councilor',
    org: 'Lipa City Government',
    period: '2022',
    icon: '🏛️',
    type: 'Government',
  },
  {
    role: 'Class President',
    org: 'APEC Schools',
    period: '2018 – 2019',
    icon: '👑',
    type: 'Class Council',
  },
];

function Leadership() {
  return (
    <div className="section leadership-section">
      <div className="section-number">08</div>

      <div className="section-header">
        <h2 className="section-title">Leadership<span className="dot">.</span></h2>
        <div className="section-divider" />
      </div>

      <div className="leadership-grid fade-up">
        {ROLES.map((r, i) => (
          <div className="leader-card card" key={i}>
            {/* Decorative top bar */}
            <div className="leader-top-bar" />

            <div className="leader-icon-wrap">
              <span className="leader-icon">{r.icon}</span>
            </div>

            <span className="leader-type">{r.type}</span>
            <h3 className="leader-role">{r.role}</h3>
            <div className="leader-org">{r.org}</div>
            <div className="leader-period">🗓 {r.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leadership;
