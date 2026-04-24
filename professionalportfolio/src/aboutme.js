import React, { useState } from 'react';
import './aboutme.css';

function AboutMe() {
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <div className="section about-section">
            <div className="section-number">02</div>

            <div className="section-header">
                <h2 className="section-title">About Me<span className="dot">.</span></h2>
                <div className="section-divider" />
            </div>

            <div className="about-grid fade-up">
                {/* ── Photo ── */}
                <div className="about-photo-col">
                    <div className="about-photo-frame">
                        {!imgFailed ? (
                            <img
                                src={process.env.PUBLIC_URL + '/Images/image1.png'}
                                alt="Profile"
                                className="about-photo-img"
                                onError={() => setImgFailed(true)}
                            />
                        ) : (
                            <div className="photo-placeholder" style={{ width: '100%', height: '100%', borderRadius: '32px' }}>
                                <span className="ph-icon">📸</span>
                                <span className="ph-text">About Me Photo</span>
                            </div>
                        )}
                    </div>
                    <div className="about-social-row">
                        <a href="#contact" className="social-chip">📧 Email</a>
                        <a href="https://www.linkedin.com/in/john-mitchell-fruto-781800380/" target="_blank" rel="noreferrer" className="social-chip">🔗 LinkedIn</a>
                        <a href="https://github.com/mitssikunbyte" target="_blank" rel="noreferrer" className="social-chip">👾 GitHub</a>
                    </div>
                </div>

                {/* ── Bio ── */}
                <div className="about-bio-col fade-up delay-2">
                    <div className="pill about-pill">Who I Am</div>
                    <h3 className="about-greeting">A Passionate Computer Engineer</h3>

                    <p className="about-para">
                        I am a Computer Engineering student based in the Philippines with a deep passion for the intersection of hardware and software. Born in 2004, I grew up fascinated by consumer technology—particularly PCs, laptops, and mobile devices—which drove me to understand how they work from the inside out.
                    </p>
                    <p className="about-para">
                        Currently, I specialize in mobile application development, building interactive tools and intuitive apps, while maintaining a strong foundation in hardware automation and digital logic design. I thrive in collaborative, high-pressure environments and frequently participate in hackathon competitions to rapidly prototype innovative solutions. From designing custom 32-bit ALUs using Verilog to engineering physical microcontroller prototypes with ESP32 and Arduino, I love tackling complex technical challenges. After graduation, my goal is to leverage my unique blend of software development experience and hardware engineering skills to make a tangible impact in the semiconductor industry.
                    </p>

                    {/* Quick info cards */}
                    <div className="about-info-grid">
                        <div className="about-info-card">
                            <span className="info-icon">🎓</span>
                            <span className="info-label">Degree</span>
                            <span className="info-value">BS Computer Engineering</span>
                        </div>
                        <div className="about-info-card">
                            <span className="info-icon">📍</span>
                            <span className="info-label">Location</span>
                            <span className="info-value">Lipa City Batangas, Philippines</span>
                        </div>
                        <div className="about-info-card">
                            <span className="info-icon">💼</span>
                            <span className="info-label">Status</span>
                            <span className="info-value">Open to Opportunities</span>
                        </div>
                        <div className="about-info-card">
                            <span className="info-icon">🌐</span>
                            <span className="info-label">Languages</span>
                            <span className="info-value">Filipino, English</span>
                        </div>
                    </div>

                    <a href="#resume" className="btn-primary about-resume-btn">
                        View Full Resume 📄
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
