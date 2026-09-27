import "./Certifications.css";

import { FaAws, FaLock } from "react-icons/fa";

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      {/* =========================
          HEADER
      ========================= */}

      <div className="certifications-header">
        <div className="certifications-label">
          <span></span>
          CERTIFICATIONS
        </div>

        <h2>Courses & Certifications</h2>

        <p>
          Focused learning in cloud foundations, cloud security, microservices,
          CI/CD and DevOps.
        </p>
      </div>

      {/* =========================
          CERTIFICATION GRID
      ========================= */}

      <div className="certifications-grid">
        {/* ==================================================
            1. CLOUD FOUNDATIONS
        ================================================== */}

        <CertificationCard
          icon={<FaAws />}
          iconColor="#FF9900"
          provider="AMAZON WEB SERVICES (AWS)"
          title="AWS Academy Graduate – Cloud Foundations"
          link="https://www.credly.com/badges/fae9caa0-55c4-4b48-850f-793d04aed9d6/linked_in_profile"
        />

        {/* ==================================================
            2. MICROSERVICES & CI/CD
        ================================================== */}

        <CertificationCard
          icon={<FaAws />}
          iconColor="#FF9900"
          provider="AMAZON WEB SERVICES (AWS)"
          title="Microservices and CI/CD Pipeline Builder – Training Badge"
          link="https://www.credly.com/badges/3d710de7-1e53-4a60-bb1f-40fa60884d63/linked_in_profile"
        />

        {/* ==================================================
            3. CLOUD SECURITY FOUNDATIONS
        ================================================== */}

        <CertificationCard
          icon={<FaLock />}
          iconColor="#F5A623"
          provider="AMAZON WEB SERVICES (AWS)"
          title="Cloud Security Foundations – Training Badge"
          link="https://www.credly.com/badges/9f3ee897-c7f1-4073-9884-739b5b35cdc0/linked_in_profile"
        />

        {/* ==================================================
            4. CLOUD SECURITY BUILDER
        ================================================== */}

        <CertificationCard
          icon={<FaLock />}
          iconColor="#F5A623"
          provider="AMAZON WEB SERVICES (AWS)"
          title="Cloud Security Builder – Training Badge"
          link="https://www.credly.com/badges/ee239c93-b644-4452-b96f-04adfa1404d7/linked_in_profile"
        />
      </div>
    </section>
  );
}

/* ==================================================
   CERTIFICATION CARD
================================================== */

function CertificationCard({ icon, iconColor, provider, title, link }) {
  return (
    <article className="certification-card">
      {/* =========================
          TOP
      ========================= */}

      <div className="certification-top">
        <div
          className="certification-icon"
          style={{
            color: iconColor,
          }}
        >
          {icon}
        </div>

        <div className="certification-provider">{provider}</div>
      </div>

      {/* =========================
          TITLE
      ========================= */}

      <h3>{title}</h3>

      {/* =========================
          DIVIDER
      ========================= */}

      <div className="certification-divider"></div>

      {/* =========================
          BOTTOM
      ========================= */}

      <div className="certification-bottom">
        <span className="certification-date">AWS</span>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="credential-button"
        >
          View Credential ↗
        </a>
      </div>
    </article>
  );
}

export default Certifications;
