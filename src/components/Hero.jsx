import { ArrowRight, Download } from "lucide-react";
import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-card">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <div className="availability">
            <span></span>
            AVAILABLE FOR INTERNSHIPS
          </div>

          <h1>Mihitha Pabasara</h1>

          <h2>Computer Science Undergraduate · Software & AI</h2>

          <p>
            I build practical software systems across web, mobile, machine
            learning and cloud infrastructure.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View Projects
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>

            <a href="/cv.pdf" className="cv-button">
              <Download size={17} />
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

            <a href="mailto:your-email@gmail.com">Email ✉</a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image-container">
          <img
            src={profileImage}
            alt="Mihitha Pabasara"
            className="hero-image"
          />

          <div className="location-badge">
            <span></span>
            COLOMBO, LK · CS STUDENT
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
