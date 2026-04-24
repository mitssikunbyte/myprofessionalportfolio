import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage      from './homepage';
import AboutMe       from './aboutme';
import ResumeSection from './resumesection';
import Education     from './education';
import Projects      from './projects';
import AcademicAchievements from './academicachievements';
import Competitions  from './competitions';
import Leadership    from './leadership';
import Certificates  from './certificates';
import Skills        from './skills';
import ContactSection from './contactsection';

const NAV_ITEMS = [
  { id: 'home',         label: 'Home',                 icon: '🏠' },
  { id: 'about',        label: 'About Me',              icon: '👤' },
  { id: 'resume',       label: 'Resume',                icon: '📄' },
  { id: 'education',    label: 'Education',             icon: '🎓' },
  { id: 'projects',     label: 'Projects',              icon: '💻' },
  { id: 'achievements', label: 'Academic Achievements', icon: '🏆' },
  { id: 'competitions', label: 'Competitions',          icon: '🥇' },
  { id: 'leadership',   label: 'Leadership',            icon: '🌟' },
  { id: 'certificates', label: 'Certificates',          icon: '📜' },
  { id: 'skills',       label: 'Skills',                icon: '⚡' },
  { id: 'contact',      label: 'Contact',               icon: '✉️'  },
];

function App() {
  const [navOpen, setNavOpen]     = useState(false);
  const [activeSection, setActive] = useState('home');

  /* ── Intersection Observer to highlight nav on scroll ── */
  useEffect(() => {
    const observers = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  return (
    <div className="App">
      {/* ── Hamburger (mobile) ── */}
      <button className="hamburger" onClick={() => setNavOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>

      {/* ── Side Navigation ── */}
      <nav className={`side-nav ${navOpen ? 'open' : ''}`}>
        <div className="nav-brand">
          <div className="nav-brand-name">My Portfolio</div>
          <div className="nav-brand-role">CPE Student</div>
        </div>

        <ul className="nav-links">
          {NAV_ITEMS.map(({ id, label, icon }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={e => { e.preventDefault(); handleNavClick(id); }}
              >
                <span className="nav-icon">{icon}</span>
                {label}
                <span className="nav-num">{String(i + 1).padStart(2, '0')}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-footer">© 2025 – All rights reserved</div>
      </nav>

      {/* ── Sections ── */}
      <main className="main-content">
        <section id="home">        <HomePage />        </section>
        <section id="about">       <AboutMe />         </section>
        <section id="resume">      <ResumeSection />   </section>
        <section id="education">   <Education />       </section>
        <section id="projects">    <Projects />        </section>
        <section id="achievements"><AcademicAchievements /></section>
        <section id="competitions"><Competitions />    </section>
        <section id="leadership">  <Leadership />      </section>
        <section id="certificates"><Certificates />    </section>
        <section id="skills">      <Skills />          </section>
        <section id="contact">     <ContactSection />  </section>
      </main>
    </div>
  );
}

export default App;
