import React from 'react';
import './education.css';

const SCHOOLS = [
    {
        degree: 'Bachelor of Science in Computer Engineering',
        school: 'First Asia Institute of Technologies and Humanites',
        location: 'Tanuan City, Batangas',
        period: '2023 – Present',
        gpa: '',
        icon: '🎓',
        desc: 'Computer Engineering, inlined with Electronics Engineering Course',
        highlight: true,
    },
    {
        degree: 'Senior High School – STEM Strand',
        school: 'The Meradian School Inc.',
        location: 'Lipa City, Batangas',
        period: '2022 – 2023',
        gpa: '',
        icon: '📚',
        desc: 'Senior high school under the Science, Technology, Engineering, and Mathematics strand.',
        highlight: false,
    },
    {
        degree: 'Junior High School',
        school: 'APEC Schools JRU Lipa',
        location: 'Lipa City, Batangas',
        period: '2017 – 2021',
        gpa: '',
        icon: '🏫',
        desc: 'Completed junior high school with consistent academic performance.',
        highlight: false,
    },
    {
        degree: 'Elementary School',
        school: 'Gaudencio B. Lontok Memorial Integrated School',
        location: 'Lipa City, Batangas',
        period: '2011 – 2017',
        gpa: '',
        icon: '✏️',
        desc: 'Completed elementary education.',
        highlight: false,
    },
];

function Education() {
    return (
        <div className="section education-section">
            <div className="section-number">04</div>

            <div className="section-header">
                <h2 className="section-title">Education<span className="dot">.</span></h2>
                <div className="section-divider" />
            </div>

            <div className="education-timeline fade-up">
                {SCHOOLS.map((s, i) => (
                    <div className={`edu-item ${s.highlight ? 'edu-highlight' : ''}`} key={i}>
                        {/* Connector line */}
                        <div className="edu-connector">
                            <div className="edu-icon-bubble">{s.icon}</div>
                            {i < SCHOOLS.length - 1 && <div className="edu-line" />}
                        </div>

                        <div className={`card edu-card ${s.highlight ? 'edu-card-featured' : ''}`}>
                            <div className="edu-card-top">
                                <div>
                                    <div className="edu-degree">{s.degree}</div>
                                    <div className="edu-school">{s.school}</div>
                                    <div className="edu-location">📍 {s.location}</div>
                                </div>
                                <div className="edu-meta">
                                    <span className={`pill ${s.highlight ? 'pill-dark' : ''}`}>{s.period}</span>
                                    <span className="edu-gpa">{s.gpa}</span>
                                </div>
                            </div>
                            <p className="edu-desc">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
