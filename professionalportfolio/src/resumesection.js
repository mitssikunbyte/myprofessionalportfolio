import React, { useState } from 'react';
import './resumesection.css';
import resumeFile from './Files/Resume/Screenshot 2026-04-24 173618.png';

const RESUME_TABS = ['Education', 'Skills', 'Personal Info'];

const RESUME_EDUCATION = [
    {
        degree: 'Bachelor of Science in Computer Engineering',
        school: 'First Asia Institute of Technology and Humanities',
        period: '2023 – 2027',
        desc: 'College Level. Pres. JP Laurel Highway, Darasa, Tanauan City, Batangas.',
    },
    {
        degree: 'Science, Technology, Engineering, and Mathematics (STEM)',
        school: 'The Meradian School Inc.',
        period: '2022 – 2023',
        desc: 'Senior High School. Sabang, Lipa City, Batangas.',
    },
    {
        degree: 'Junior High School',
        school: 'Affordable Private Education Center JRU Lipa (APEC Schools)',
        period: '2017 – 2021',
        desc: 'Marawoy, Lipa City, Batangas.',
    },
    {
        degree: 'Elementary Education',
        school: 'Gaudencio B. Lontok Memorial Integrated School',
        period: '2011 – 2017',
        desc: 'P. Laygo Street Sabang, Lipa City.',
    },
];

const RESUME_SKILLS = [
  {
    category: 'Core Competencies',
    items: ['Computer Literate', 'Creative', 'Adaptive and flexible', 'Good Communication', 'Fast Learner'],
  },
  {
    category: 'Languages',
    items: ['English', 'Filipino'],
  }
];

const PERSONAL_INFO = [
  { label: 'Name', value: 'John Mitchell Miguel Fruto' },
  { label: 'Profession', value: 'Researcher' },
  { label: 'Contact Number', value: '+639950057573' },
  { label: 'Email Address', value: 's2023101186@firstasia.edu.ph' },
  { label: 'Location', value: 'Braceros Street, Poblacion Barangay 10, Lipa City, Batangas' },
  { label: 'Gender', value: 'Male' },
  { label: 'Date of Birth', value: 'December 11, 2004' },
  { label: 'Religion', value: 'Roman Catholic' },
  { label: 'Nationality', value: 'Filipino' },
];

function ResumeSection() {
  const [tab, setTab] = useState(0);

  return (
    <div className="section resume-section">
      <div className="section-number">03</div>

      <div className="section-header">
        <h2 className="section-title">Resume<span className="dot">.</span></h2>
        <div className="section-divider" />
        {/* Download button */}
        <a href={resumeFile} className="resume-download-btn" download="John_Mitchell_Miguel_Fruto_Resume.png">
          ⬇ Download CV
        </a>
      </div>

      {/* ── Tab bar ── */}
      <div className="resume-tabs fade-up">
        {RESUME_TABS.map((t, i) => (
          <button
            key={t}
            className={`resume-tab ${tab === i ? 'active' : ''}`}
            onClick={() => setTab(i)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── Tab: Education ── */}
      {tab === 0 && (
        <div className="resume-timeline fade-up delay-1">
          {RESUME_EDUCATION.map((edu, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card card">
                <div className="tc-top">
                  <div>
                    <div className="tc-role">{edu.degree}</div>
                    <div className="tc-company">{edu.school}</div>
                  </div>
                  <div className="tc-period">{edu.period}</div>
                </div>
                <p className="tc-desc">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Tab: Skills ── */}
      {tab === 1 && (
        <div className="resume-skills-grid fade-up delay-1">
          {RESUME_SKILLS.map(cat => (
            <div className="card resume-skill-card" key={cat.category}>
              <h4 className="rsk-title">{cat.category}</h4>
              <ul className="rsk-list">
                {cat.items.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* ── Tab: Personal Info ── */}
      {tab === 2 && (
        <div className="resume-timeline fade-up delay-1">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card card">
              <div className="tc-top" style={{ marginBottom: '16px' }}>
                <div>
                  <div className="tc-role">Personal & Contact Information</div>
                </div>
              </div>
              <div>
                {PERSONAL_INFO.map(info => (
                  <div key={info.label} style={{ marginBottom: '12px' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>{info.label}:</strong> <span style={{ color: 'var(--text-mid)', marginLeft: '6px' }}>{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeSection;
