import React, { useState } from 'react';
import './contactsection.css';

const CONTACT_INFO = [
    { icon: '📧', label: 'Email', value: 'frutojohnmitchell@gmail.com', href: 'mailto:frutojohnmitchell@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+63 995 207 2304', href: 'tel:+639952072304' },
    { icon: '🔗', label: 'LinkedIn', value: 'john-mitchell-fruto', href: 'https://www.linkedin.com/in/john-mitchell-fruto-781800380/' },
    { icon: '👾', label: 'GitHub', value: 'mitssikunbyte', href: 'https://github.com/mitssikunbyte' },
    { icon: '📍', label: 'Location', value: 'Lipa City Batangas, Philippines', href: 'https://maps.app.goo.gl/WhjZvPsnkDRtcRPP7' },
];

function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = e => {
        e.preventDefault();
        /* Plug in your form service (EmailJS, Formspree, etc.) here */
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="section contact-section">
            <div className="section-number">11</div>

            <div className="section-header">
                <h2 className="section-title">Contact<span className="dot">.</span></h2>
                <div className="section-divider" />
            </div>

            <p className="contact-intro fade-up">
                I'd love to hear from you! Whether it's a project idea, collaboration, or just saying hi —
                feel free to reach out.
            </p>

            <div className="contact-grid fade-up delay-2">
                {/* ── Left: Info ── */}
                <div className="contact-info-col">
                    <div className="contact-info-cards">
                        {CONTACT_INFO.map(({ icon, label, value, href }) => (
                            <a href={href} className="contact-info-card" key={label} target="_blank" rel="noreferrer">
                                <div className="ci-icon-wrap">
                                    <span className="ci-icon">{icon}</span>
                                </div>
                                <div>
                                    <div className="ci-label">{label}</div>
                                    <div className="ci-value">{value}</div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Map / location placeholder */}
                    <div className="contact-map iframe-map">
                        <iframe
                            title="Location Map"
                            src="https://maps.google.com/maps?q=Lipa%20City,%20Batangas,%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0, borderRadius: 'inherit' }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                </div>

                {/* ── Right: Form ── */}
                <div className="contact-form-col">
                    <form className="contact-form card" onSubmit={handleSubmit}>
                        <h3 className="cf-title">Send a Message</h3>

                        <div className="cf-row">
                            <div className="cf-field">
                                <label htmlFor="cf-name">Your Name</label>
                                <input
                                    id="cf-name"
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Juan Dela Cruz"
                                    required
                                />
                            </div>
                            <div className="cf-field">
                                <label htmlFor="cf-email">Email Address</label>
                                <input
                                    id="cf-email"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="juan@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="cf-field">
                            <label htmlFor="cf-subject">Subject</label>
                            <input
                                id="cf-subject"
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Project Collaboration / Inquiry"
                                required
                            />
                        </div>

                        <div className="cf-field">
                            <label htmlFor="cf-message">Message</label>
                            <textarea
                                id="cf-message"
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your message here…"
                                required
                            />
                        </div>

                        <button type="submit" className="cf-submit">
                            {sent ? '✅ Message Sent!' : '🚀 Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <div className="contact-footer">
                <p>© 2025 Your Name · Built with React · All Rights Reserved</p>
            </div>
        </div>
    );
}

export default ContactSection;
