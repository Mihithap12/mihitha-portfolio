import "./Education.css";

function Education() {
  return (
    <section id="education" className="education-section">
      {/* Section heading */}
      <div className="education-header">
        <div className="education-label">
          <span></span>
          EDUCATION
        </div>

        <h2>Academic Background</h2>

        <p>
          Computer Science studies supported by a strong mathematics and
          statistics foundation.
        </p>
      </div>

      {/* =========================
          UNIVERSITY
      ========================= */}

      <div className="education-card">
        <div className="education-logo">
          <img
            src="/university-logo.png"
            alt="University of Sri Jayewardenepura"
          />
        </div>

        <div className="education-content">
          <h3>BSc(Hons) in Computer Science</h3>

          <div className="education-institute">
            ◇ University of Sri Jayewardenepura
          </div>

          <div className="education-location">
            <span>•</span>
            Nugegoda, Sri Lanka
          </div>

          <div className="education-subjects">
            <span>• Computer Security</span>
            <span>• Service Oriented Computing</span>
            <span>• Machine Learning</span>
            <span>• Data Structures & Algorithms</span>
            <span>• Data Analysis</span>
            <span>• Inference Statistics</span>
            <span>• Regression Analysis</span>
            <span>• Object Oriented Programming</span>
            <span>• Database Design & ER Modelling</span>
          </div>
        </div>

        <div className="education-date">
          <span></span>
          2024 — PRESENT
        </div>
      </div>

      {/* =========================
          A/L
      ========================= */}

      <div className="education-card">
        <div className="education-logo">
          <img src="/nalanda-logo.png" alt="Nalanda College" />
        </div>

        <div className="education-content">
          <h3>G.C.E Advanced Level</h3>

          <div className="education-institute">◇ Nalanda College</div>

          <div className="education-location">
            <span>•</span>
            Colombo 10
          </div>

          <div className="education-subjects">
            <span>• Mathematics - B</span>
            <span>• Physics - C</span>
            <span>• Chemistry - C</span>
          </div>
        </div>

        <div className="education-date">
          <span></span>
          2020 — 2022
        </div>
      </div>

      {/* =========================
          O/L
      ========================= */}

      <div className="education-card">
        <div className="education-logo">
          <img src="/rajasinghe-logo.png" alt="Rajasinghe Central College" />
        </div>

        <div className="education-content">
          <h3>G.C.E Ordinary Level</h3>

          <div className="education-institute">
            ◇ Rajasinghe Central College
          </div>

          <div className="education-location">
            <span>•</span>
            Hanwella, Sri Lanka
          </div>

          <div className="education-subjects">
            <span>• Obtained A pass for all 9 subjects</span>
          </div>
        </div>

        <div className="education-date">
          <span></span>
          2014 — 2019
        </div>
      </div>
    </section>
  );
}

export default Education;
