import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-label">
        <span></span>
        ABOUT
      </div>

      <div className="about-layout">
        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="about-heading">
          <h2>
            Building reliable
            <br />
            software,
            <br />
            secure systems
            <br />
            and infrastructure.
          </h2>
        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="about-content">
          <p>
            I'm a Computer Science undergraduate at the University of Sri
            Jayewardenepura with a strong interest in DevOps, DevSecOps and
            computer security. I enjoy building software systems and
            understanding how they can be developed, secured, automated and
            deployed reliably.
          </p>

          <p>
            My experience spans full-stack development, containerization, CI/CD,
            cloud technologies and infrastructure. I've worked with technologies
            such as React, Spring Boot, Docker, Kubernetes, Jenkins, Git and AWS
            while developing practical software projects.
          </p>

          <p>
            I'm currently focusing on strengthening my skills in DevOps and
            DevSecOps, particularly around automation, CI/CD pipelines,
            container security, infrastructure and secure software delivery. I'm
            also interested in computer security and how security can be
            integrated throughout the software development lifecycle.
          </p>

          {/* =========================
              CURRENT DIRECTION
          ========================= */}

          <div className="about-divider"></div>

          <div className="about-direction-title">CURRENT DIRECTION</div>

          <div className="about-focus-grid">
            <div className="about-focus">
              <h4>PRIMARY FOCUS</h4>

              <p>DevOps & DevSecOps</p>
            </div>

            <div className="about-focus">
              <h4>SECURITY INTEREST</h4>

              <p>Computer Security</p>
            </div>

            <div className="about-focus">
              <h4>FOUNDATION</h4>

              <p>Software Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
