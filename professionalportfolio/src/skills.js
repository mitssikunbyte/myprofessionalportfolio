import React from 'react';
import './skills.css';

const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'C / C++', level: 70 },
      { name: 'JavaScript', level: 60 },
      { name: 'Java', level: 60 },
      { name: 'VHDL / HDL', level: 80 },
    ],
  },
  {
    category: 'Web & Frameworks',
    icon: '🌐',
    skills: [
      { name: 'React.js', level: 65 },
      { name: 'Node.js', level: 60 },
      { name: 'HTML & CSS', level: 75 },
      { name: 'REST APIs', level: 65 },
    ],
  },
  {
    category: 'Hardware & Embedded',
    icon: '⚙️',
    skills: [
      { name: 'Arduino', level: 80 },
      { name: 'Raspberry Pi', level: 60 },
      { name: 'ESP32', level: 90 },
      { name: 'PCB Design', level: 55 },
    ],
  },
  {
    category: 'Tools & Software',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 60 },
      { name: 'AutoCAD', level: 50 },
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    skills: [
      { name: 'Leadership', level: 80 },
      { name: 'Communication', level: 85 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 85 },
    ],
  },
  {
    category: 'Languages',
    icon: '🌏',
    skills: [
      { name: 'Filipino (Native)', level: 100 },
      { name: 'English (Proficient)', level: 85 },
    ],
  },
];

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-label">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ '--target-width': `${level}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="section skills-section">
      <div className="section-number">10</div>

      <div className="section-header">
        <h2 className="section-title">Skills<span className="dot">.</span></h2>
        <div className="section-divider" />
      </div>

      <div className="skills-grid fade-up">
        {SKILL_GROUPS.map((group, i) => (
          <div className={`skill-group-card card fade-up delay-${(i % 5) + 1}`} key={i}>
            <div className="sg-header">
              <span className="sg-icon">{group.icon}</span>
              <h3 className="sg-title">{group.category}</h3>
            </div>
            <div className="sg-bars">
              {group.skills.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
