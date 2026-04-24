import React from 'react';
import './certificates.css';

import sem1 from './Files/Certificates/Seminars/Certificate of Appreciation – John Mitchell Fruto.png';
import sem2 from './Files/Certificates/Seminars/Screenshot 2026-04-24 165223.png';
import sem3 from './Files/Certificates/Seminars/Screenshot 2026-04-24 165239.png';
import sem4 from './Files/Certificates/Seminars/Screenshot 2026-04-24 171132.png';
import sem5 from './Files/Certificates/Seminars/Screenshot 2026-04-24 171244.png';
import sem6 from './Files/Certificates/Seminars/Screenshot 2026-04-24 171313.png';

const CERTIFICATES = [
  {
    title: 'C Programming Workshop',
    issuer: 'Seminar Organizer',
    date: '2025',
    category: 'Seminars',
    id: '',
    desc: 'Awarded for active participation and contribution in the seminar.',
    icon: '🎤',
    image: sem1,
  },
  {
    title: 'CIDR CON',
    issuer: 'Seminar Series',
    date: '2025',
    category: 'Seminars',
    id: '',
    desc: 'Certificate of attendance for professional seminar.',
    icon: '🎤',
    image: sem2,
  },
  {
    title: 'BPI DATA Wave 2025',
    issuer: 'ESKWELABS',
    date: '2025',
    category: 'Competitions',
    id: 'National Level',
    desc: 'Participant – AI Integration for a project focused on workers from banks.',
    icon: '🏆',
    image: sem3,
  },
  {
    title: 'Backend Development Foundations: From Concepts to Practice',
    issuer: 'Seminar Series',
    date: '2026',
    category: 'Seminars',
    id: '',
    desc: 'Certificate of attendance for professional seminar.',
    icon: '🎤',
    image: sem4,
  },
  {
    title: 'Building Sustainable Future: Empowering Communities through HIV Awareness and Education',
    issuer: 'Seminar Series',
    date: '2024',
    category: 'Seminars',
    id: '',
    desc: 'Certificate of attendance for professional seminar.',
    icon: '🎤',
    image: sem5,
  },
  {
    title: 'Arduino Workshop Part 1: Arduino Coding Skills Preperation for Hardware',
    issuer: 'Seminar Series',
    date: '2025',
    category: 'Seminars',
    id: '',
    desc: 'Certificate of attendance for professional seminar.',
    icon: '🎤',
    image: sem6,
  },
];

function Certificates() {
  return (
    <div className="section certificates-section">
      <div className="section-number">09</div>

      <div className="section-header">
        <h2 className="section-title">Certificates & Seminars<span className="dot">.</span></h2>
        <div className="section-divider" />
      </div>

      {/* Count badge */}
      <div className="cert-count fade-up delay-1">
        Showing <strong>{CERTIFICATES.length}</strong> item{CERTIFICATES.length !== 1 ? 's' : ''}
      </div>

      {/* Grid */}
      <div className="certificates-grid fade-up delay-2">
        {CERTIFICATES.map((cert, i) => (
          <div className="cert-card card" key={i}>
            <div className="cert-icon-wrap">
              <span className="cert-icon">{cert.icon}</span>
            </div>
            <div className="cert-cat-tag">{cert.category}</div>
            <h3 className="cert-title">{cert.title}</h3>
            <div className="cert-issuer">🏛 {cert.issuer}</div>
            <div className="cert-date">📅 {cert.date}</div>
            {cert.id && <div className="cert-id">ID: {cert.id}</div>}
            <p className="cert-desc">{cert.desc}</p>

            {/* Certificate photo placeholder */}
            {cert.image ? (
              <img
                src={cert.image}
                alt={cert.title}
                style={{ width: '100%', height: 'auto', maxHeight: '160px', objectFit: 'contain', borderRadius: '8px', marginTop: '10px' }}
              />
            ) : (
              <div className="photo-placeholder cert-photo">
                <span className="ph-icon">🖼️</span>
                <span className="ph-text">Certificate Image</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
