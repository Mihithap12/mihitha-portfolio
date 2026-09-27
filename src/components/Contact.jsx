import "./Contact.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* =========================
          SECTION LABEL
      ========================= */}

      <div className="contact-label">
        <span></span>
        CONTACT
      </div>

      {/* =========================
          HEADER
      ========================= */}

      <div className="contact-header">
        <h2>Let's Build Something Useful.</h2>

        <p>
          Open to software engineering, DevOps, DevSecOps and computer security
          opportunities, collaborations and conversations.
        </p>
      </div>

      {/* =========================
          CONTACT GRID
      ========================= */}

      <div className="contact-grid">
        {/* ==========================================
            LEFT — CONTACT INFORMATION
        ========================================== */}

        <div className="contact-info-card">
          {/* EMAIL */}

          <div className="contact-item">
            <div className="contact-item-label">EMAIL</div>

            <a
              href="mailto:mihithapabasara12@gmail.com"
              className="contact-item-value"
            >
              mihithapabasara12@gmail.com
            </a>
          </div>

          {/* GITHUB */}

          <div className="contact-item">
            <div className="contact-item-label">GITHUB</div>

            <a
              href="https://github.com/Mihithap12"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-value"
            >
              github.com/Mihithap12 <FaGithub />
            </a>
          </div>

          {/* LINKEDIN */}

          <div className="contact-item">
            <div className="contact-item-label">LINKEDIN</div>

            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item-value"
            >
              LinkedIn <FaLinkedinIn />
            </a>
          </div>

          {/* LOCATION */}

          <div className="contact-item">
            <div className="contact-item-label">LOCATION</div>

            <div className="contact-item-value">
              Sri Lanka
              <FaMapMarkerAlt />
            </div>
          </div>

          {/* CV */}

          <a href="/Mihitha-CV.pdf" download className="resume-button">
            <FaDownload />
            Download Full Resume / CV
          </a>
        </div>

        {/* ==========================================
            RIGHT — CONTACT FORM
        ========================================== */}

        <div className="contact-form-card">
          <form>
            {/* NAME */}

            <div className="form-group">
              <label htmlFor="name">NAME</label>

              <input id="name" type="text" placeholder="Your name" />
            </div>

            {/* EMAIL */}

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>

              <input id="email" type="email" placeholder="your@email.com" />
            </div>

            {/* MESSAGE */}

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>

              <textarea
                id="message"
                rows="6"
                placeholder="What's on your mind?"
              ></textarea>
            </div>

            {/* SEND BUTTON */}

            <button type="button" className="send-button">
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
