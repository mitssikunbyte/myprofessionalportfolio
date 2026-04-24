import React, { useEffect, useRef } from 'react';
import './homepage.css';

function HomePage() {
    const canvasRef = useRef(null);

    /* ── Floating particles background ── */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const particles = Array.from({ length: 40 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 4 + 2,
            dx: (Math.random() - 0.5) * 0.6,
            dy: (Math.random() - 0.5) * 0.6,
            alpha: Math.random() * 0.4 + 0.1,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245,197,24,${p.alpha})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className="home-section">
            <canvas className="home-canvas" ref={canvasRef} />

            <div className="home-content">
                {/* ── Left: Text ── */}
                <div className="home-text fade-up">
                    <div className="home-greeting">Hello, I'm</div>
                    <h1 className="home-name">
                        John Mitchell M. Fruto<span className="name-dot">.</span>
                    </h1>
                    <div className="home-role-row">
                        <span className="home-role">Computer Engineer</span>
                        <span className="home-role-sep">·</span>
                        <span className="home-role">Developer</span>
                        <span className="home-role-sep">·</span>
                        <span className="home-role">Gamer</span>
                    </div>

                    <p className="home-tagline fade-up delay-2">
                        I am a Computer Engineer who is passionate about building innovative solutions and creating impactful
                        digital experiences. Welcome to my professional portfolio.
                    </p>

                    <div className="home-cta-row fade-up delay-3">
                        <a href="#projects" className="btn-primary">View My Work</a>
                        <a href="#contact" className="btn-outline">Get In Touch</a>
                    </div>

                    {/* Quick stats */}
                    <div className="home-stats fade-up delay-4">
                        <div className="stat-item">
                            <span className="stat-num">4+</span>
                            <span className="stat-lbl">Projects</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-num">1+</span>
                            <span className="stat-lbl">Competitions</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat-item">
                            <span className="stat-num">3+</span>
                            <span className="stat-lbl">Years Experience</span>
                        </div>
                    </div>
                </div>

                {/* ── Right: Photo area ── */}
                <div className="home-photo-wrapper fade-up delay-2">
                    <div className="home-photo-ring">
                        <img
                            src={process.env.PUBLIC_URL + '/Images/image1.png'}
                            alt="John Mitchell M. Fruto"
                            className="home-photo-img"
                        />
                    </div>
                    {/* Decorative blobs */}
                    <div className="blob blob-1" />
                    <div className="blob blob-2" />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <span className="scroll-text">Scroll</span>
                <div className="scroll-line" />
            </div>
        </div>
    );
}

export default HomePage;
