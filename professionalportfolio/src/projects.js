import React, { useState } from 'react';
import './projects.css';

import ae_mat from './Files/Projects/AEFT_COURSEPROJ_IEEEPaper_CPE-MAT.pdf';
import affhn from './Files/Projects/AFFHN_IEEEfinalpaper.docx-3.pdf';
import hdl_hvl from './Files/Projects/TEAM01_IEEEPAPER_HDL-HVL.pdf';
import cpe_cp2 from './Files/Projects/TEAM08_COURSEPROJ_IEEEPaper_CPE-CP2.pdf';

const PROJECT_CATEGORIES = ['All', 'Hardware', 'Software', 'Research'];

const PROJECTS = [
  {
    title: 'Application of Laplace Transform in Radioactive Decay',
    category: 'Research',
    tech: ['CPE-MAT', 'IEEE Paper', 'Research'],
    desc: 'This paper introduces a Python-based project designed to show the application of Laplace Transform in Radioactive Decay Simulation.',
    status: 'Completed',
    year: '2024',
    file: ae_mat,
  },
  {
    title: 'VertiSafe: ESP32-Enabled Elevator Control with Sensor-Based Safety Mechanisms',
    category: 'Research',
    tech: ['IEEE Paper', 'Research'],
    desc: 'VertiSafe is an ESP32-based elevator control prototype that uses IoT sensors to enhance safety and real-time monitoring. It features fault detection, emergency controls, and a live web GUI, achieving 81.33% sensor accuracy and low latency in testing.',
    status: 'Completed',
    year: '2026',
    file: affhn,
  },
  {
    title: 'Design and Verification of 3-Floor Elevator Control System Using Coverage-Driven Verification Technique',
    category: 'Hardware',
    tech: ['HDL', 'HVL', 'Hardware Engineering'],
    desc: 'This paper presents a SystemVerilog-based verification project designed to test out the functions of a 3-floor elevator control system. ',
    status: 'Completed',
    year: '2026',
    file: hdl_hvl,
  },
  {
    title: 'Predicting the Unpredictable: Innovations in Volcanic Eruption Forecasting',
    category: 'Software',
    tech: ['CPE-CP2', 'Software Development', 'IEEE Paper'],
    desc: ' This paper talks about a Python project designed to predict when volcanoes might erupt by using datasets.',
    status: 'Completed',
    year: '2024',
    file: cpe_cp2,
  },
];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active);

  return (
    <div className="section projects-section">
      <div className="section-number">05</div>

      <div className="section-header">
        <h2 className="section-title">Projects<span className="dot">.</span></h2>
        <div className="section-divider" />
      </div>

      {/* Filter chips */}
      <div className="project-filters fade-up">
        {PROJECT_CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-chip ${active === cat ? 'filter-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project cards grid */}
      <div className="projects-grid fade-up delay-2">
        {filtered.map((proj, i) => (
          <div className="project-card card" key={i}>
            <div className="project-body">
              <div className="project-meta-row">
                <span className="pill project-cat">{proj.category}</span>
                <span className="project-year">{proj.year}</span>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tech-row">
                {proj.tech.map(t => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              {proj.file ? (
                <a
                  href={proj.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-btn proj-btn-solid"
                  style={{ textDecoration: 'none', textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  📄 View Paper
                </a>
              ) : (
                <>
                  <button className="proj-btn proj-btn-outline">📂 Details</button>
                  <button className="proj-btn proj-btn-solid">🔗 Demo</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
